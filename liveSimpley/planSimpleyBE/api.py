from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from .serializers import *


# Activity Viewset
class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer
    # To be changed when adding user auth
    # permission_classes = [permissions.AllowAny]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        '''
        ViewSet method to only return
        '''
        return self.request.user.activities.all()

    def perform_create(self, serializer):
        '''
        ViewSet method to automatically save user as activity owner
        :param serializer:
        :return:
        '''
        serializer.save(owner=self.request.user)


# User Viewset
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)
