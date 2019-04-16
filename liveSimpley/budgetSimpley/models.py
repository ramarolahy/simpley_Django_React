from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class BudgetCategory(models.Model):
    category = models.CharField(max_length=120, null=False)

    def __str__(self):
        return f"{self.category}"


class BudgetPeriod(models.Model):
    period = models.CharField(max_length=120, null=False)

    def __str__(self):
        return f"{self.period}"


class Budget(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, related_name="user_budgets", on_delete=models.CASCADE)
    category = models.ForeignKey(BudgetCategory, null=False, related_name='budget_categories', on_delete=models.CASCADE)
    period = models.ForeignKey(BudgetPeriod, null=False, related_name='budget_periods', on_delete=models.CASCADE)
    amount = models.FloatField(null=False)


def __str__(self):
    return f"{self.category} {self.period}: {self.amount}"


class ExpenseManager(models.Manager):
    def total_expense(self, user_id, period, category):
        '''
        Manager Method to get total cart price for a customer
        :param user_id:
        :param period:
        :param category:
        :return: float total price
        '''
        customer_id = User.objects.get(pk=user_id)
        prices = self.filter(customer=customer_id, period=period, category=category).values_list('price', flat=True)
        return round(sum(prices), 2)


class Expense(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, related_name="user_expenses", on_delete=models.CASCADE)
    category = models.ManyToManyField(BudgetCategory, null=False, related_name='expenses')
    name = models.CharField(max_length=120, null=False)
    amount = models.FloatField(null=False)
