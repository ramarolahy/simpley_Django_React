from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Budget(models.Model):
    limit = models.FloatField(null=False)


class ActivityManager(models.Manager):
    def total_expenses(self, customer_id):
        '''
        Manager Method to get total cart price for a customer
        :param customer_id:
        :return: float total price
        '''
        customer_id = User.objects.get(pk=customer_id)
        costs = self.filter(customer=customer_id).values_list('cost', flat=True)
        return round(sum(costs), 2)


class Activity(models.Model):
    owner = models.ForeignKey(User, null=True, related_name='activities', on_delete=models.CASCADE)
    title = models.CharField(max_length=120, null=False)
    description = models.TextField(null=True)
    # FIXME! Change auto_now_add to local time
    created_at = models.DateTimeField(null=False, auto_now_add=True)
    complete = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)
    cost = models.FloatField(null=True, blank=True)
    object = ActivityManager

    def __str__(self):
        return f"{self.title}"

# TODO: Add Userprofile
