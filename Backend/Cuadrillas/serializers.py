from rest_framework import serializers
from .models import Cofradias, Bordadurias, Cofrades,  Cronogramas

class CofradiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cofradias
        fields = '__all__'

class BordaduriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bordadurias
        fields = '__all__'

class CofradesSerializer(serializers.ModelSerializer):
    foto = serializers.ImageField(max_length=None, use_url=True)
    
    class Meta:
        model = Cofrades
        fields = '__all__'

class CronogramasSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Cronogramas
        fields = '__all__'
