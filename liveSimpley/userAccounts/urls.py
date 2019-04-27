from django.urls import path, include
from django.conf.urls import url
from .api import *
from knox import views as knox_views

urlpatterns = [
    # This will include login and logout endpoints
    path('api/login', LoginAPI.as_view()),
    path('api/signup', SignupAPI.as_view()),
    path('api/user', UserAPI.as_view()),
    path('api/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
