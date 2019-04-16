from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


# Create your models here.
class BudgetCategory(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, related_name="user_categories", on_delete=models.CASCADE)
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


class ExpenseGroup(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, related_name="user_expense_groups", on_delete=models.CASCADE)
    group = models.CharField(max_length=120, null=False)

    def __str__(self):
        return f"{self.group}"


class ExpenseManager(models.Manager):
    def total_expense(self, user_id, period_id, category_id):
        '''
        Manager Method to get total cart price for a customer
        :param user_id:
        :param period_id:
        :param category_id:
        :return: float total price
        '''
        customer_id = User.objects.get(pk=user_id)
        prices = self.filter(customer=customer_id, period=period_id, category=category_id).values_list('price',
                                                                                                       flat=True)
        return round(sum(prices), 2)


class Expense(models.Model):
    user = models.ForeignKey(User, null=False, related_name="user_expenses", on_delete=models.CASCADE)
    category = models.ManyToManyField(BudgetCategory, related_name='expenses')
    group = models.ForeignKey(ExpenseGroup, null=True, related_name="expense_groups", on_delete=models.CASCADE)
    amount = models.FloatField(null=False)

    def __str__(self):
        return f"{self.category} {self.group}: {self.amount}"


class ActivityManager(models.Manager):
    def activity_counter(self, user_id, category_id, group_id):
        '''
        Manager method to count user activities
        :param user_id:
        :param category_id:
        :param group_id:
        :return:
        '''
        customer_id = User.objects.get(pk=user_id)
        return self.filter(user=user_id, category=category_id, group=group_id).count()


class Activity(models.Model):
    user = models.ForeignKey(User, null=False, related_name="users", on_delete=models.CASCADE)
    category = models.ManyToManyField(BudgetCategory, related_name="user_categories")
    group = models.ForeignKey(ExpenseGroup, null=False, related_name="activity_groups", on_delete=models.CASCADE)
    title = models.CharField(max_length=120, null=False)
    description = models.TextField()
    complete = models.BooleanField(default=False)
    cost = models.FloatField(null=False)

    def __str__(self):
        return f"{self.title}"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=11, null=False)
    address = models.CharField(max_length=120, null=False)

    # Each instance should have no duplicates
    class Meta:
        unique_together = ["user", "phone", "address"]

    def __str__(self):
        return f"ID: {self.id} - {self.user.first_name} {self.user.last_name}"


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    '''
    Create a userprofile instance everytime a new user is created
    :param sender: User model
    :param instance: Model instance
    :param created: Model created
    :param kwargs: args
    :return:
    '''
    if created:
        UserProfile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    '''
    Save userprofile instance after its creation
    :param sender: User model
    :param instance: Model instance
    :param kwargs: args
    :return:
    '''
    instance.userprofile.save()
