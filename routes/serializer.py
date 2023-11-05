from rest_framework import serializers
from .models import *
class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusStand
        fields = ['code', 'Name']
class ConductorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conductor
        fields = ['C_id', 'C_name', 'salary', 'working_shift']
class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ['D_id', 'D_name', 'salary', 'working_shift']
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
        
