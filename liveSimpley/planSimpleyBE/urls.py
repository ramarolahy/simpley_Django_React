from rest_framework import routers
from .api import *

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, 'user')
router.register(r'api/activities', ActivityViewSet, 'activities')

urlpatterns = router.urls
