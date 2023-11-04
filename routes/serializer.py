from rest_framework import serializers
from .models import BusStand, Routes, Bus
class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusStand
        fields = ['code', 'Name']
class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routes
        fields = ['source', 'reachable']
class BusCodesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ['bus_code', 'route']
        
