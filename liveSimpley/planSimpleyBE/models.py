from django.db import models


# Create your models here.
class Budget(models.Model):
    limit = models.FloatField(null=False)


class Activity(models.Model):
    title = models.CharField(max_length=120, null=False)
    description = models.TextField(null=True)
    # FIXME! Change auto_now_add to local time
    created_at = models.DateTimeField(null=False, auto_now_add=True)
    complete = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)
    cost = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"{self.title}"



