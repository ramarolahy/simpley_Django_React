from django.contrib import admin

from .models import *

# Register your models here.

admin.site.register(BudgetCategory)
admin.site.register(BudgetPeriod)


class BudgetAdmin(admin.ModelAdmin):
    list_display = ('user', 'category', 'period', 'amount')


admin.site.register(Budget)

admin.site.register(ExpenseGroup)
admin.site.register(Expense)

admin.site.register(Activity)

