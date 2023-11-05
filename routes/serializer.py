from rest_framework import serializers
from .models import BusStand, Routes, Bus
class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusStand
        fields = ['code', 'Name']
class RouteSerializer(serializers.ModelSerializer):
    source = serializers.StringRelatedField()
    def to_representation(self, instance):
        representation= super().to_representation(instance)
        codes = representation['reachable'].split(',')
        stands = [BusStand.objects.get(code=code).Name for code in codes]
        representation['reachable'] = stands
        return representation 
    class Meta:
        model = Routes
        fields = ['source', 'reachable']
class BusCodesSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation= super().to_representation(instance)
        codes = representation['route'].split(',')
        stands = [BusStand.objects.get(code=code).Name for code in codes]
        representation['route'] = stands
        return representation 
    class Meta:
        model = Bus
        fields = ['bus_code', 'route']
        
