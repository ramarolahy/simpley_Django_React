from django.urls import include, path


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include('planSimpleyFE.urls')),
    path('', include('planSimpleyBE.urls'))
]
