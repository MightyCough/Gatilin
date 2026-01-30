from dj_rest_auth.serializers import LoginSerializer, TokenSerializer
from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers

from Cuadrillas.models import Cofradias
from .models import Usuario

class CustomTokenSerializer(TokenSerializer):
    cofradia = serializers.SerializerMethodField()

    class Meta(TokenSerializer.Meta):
        fields = ['key', 'cofradia']

    def get_cofradia(self, obj):
        return obj.user.id_cofradia

class CustomLoginSerializer(LoginSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, style={'input_type': 'password'})

    def get_response_serializer(self):
        return CustomTokenSerializer

    def get_fields(self):
        fields = super(CustomLoginSerializer, self).get_fields()
        fields['email'] = fields['username']
        del fields['username']
        return fields
    
class CustomRegisterSerializer(RegisterSerializer):
    username = serializers.CharField(required=False)
    email = serializers.EmailField(required=True)
    nombre = serializers.CharField(required=True)
    apellidos = serializers.CharField(required=True)
    cofradia = serializers.CharField(required=True)

    class Meta:
        model = Usuario

    def custom_signup(self, request, user):
        user.username = self.validated_data.get('email', '')
        user.first_name = self.validated_data.get('nombre', '')
        user.last_name = self.validated_data.get('apellidos', '')
        cofradia_name = self.validated_data.get('cofradia', '')
        cofradia = Cofradias.objects.get(nombre_completo=cofradia_name)
        user.id_cofradia = cofradia.id
        user.save()
        return super().custom_signup(request, user)