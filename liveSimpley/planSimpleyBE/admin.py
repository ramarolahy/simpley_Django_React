from django.contrib import admin

from .models import *

# Register your models here.
admin.site.register(Budget)
admin.site.register(Activity)


class ActivityAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'complete', 'cost')
