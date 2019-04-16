from django.db import models
from liveSimpley.budgetSimpley.models import *


# Create your models here.

class Activity(models.Model):
    title = models.CharField(max_length=120, null=False)
    description = models.TextField()
    complete = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title}"
