from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, LoginSerializer, SignupSerializer


# Registration API
# SEE https://www.django-rest-framework.org/api-guide/generic-views/#genericapiview
class SignupAPI(generics.GenericAPIView):
    serializer_class = SignupSerializer

    def post(self, request, *args, **kwargs):
        # Serialize request data
        serializer = self.get_serializer(data=request.data)
        # Validate data
        serializer.is_valid(raise_exception=True)
        # Save new user
        user = serializer.save()
        return Response({
            # Send back the serialized (JSON) user
            "user":  UserSerializer(user, context=self.get_serializer_context()).data,
            # Create then Send back a token for the created user
            # Access second position as it now returns a tuple
            "token": AuthToken.objects.create(user)[1]
        })


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        # Serialize request data
        serializer = self.get_serializer(data=request.data)
        # Validate data
        serializer.is_valid(raise_exception=True)
        # get the user
        user = serializer.validated_data
        return Response({
            # Send back the serialized (JSON) user
            "user":  UserSerializer(user, context=self.get_serializer_context()).data,
            # Create then Send back a token for the created user
            # Access second position as it returns a tuple
            "token": AuthToken.objects.create(user)[1]
        })


# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

