from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

# user Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register serializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validate_data):
        user = User.objects.create_user(validate_data['username'], validate_data['email'],
                                        validate_data['password'])
        return user

# login serializer


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):

        # kalo datanya tuple misalnya ('username','faris'),('password','masasih117') bisa pakai **data
        user = authenticate(**data)

        if user is not None:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
