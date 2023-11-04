from django.shortcuts import render
from .serializer import BusSerializer, BusCodesSerializer, RouteSerializer
from rest_framework.generics import ListAPIView
from .models import BusStand, Bus, Routes
# from .models import BusStand
# Create your views here.
class BusStandsList(ListAPIView):
    queryset = BusStand.objects.all()
    serializer_class = BusSerializer
class RouteList(ListAPIView):
    queryset = Routes.objects.all()
    serializer_class = RouteSerializer
class Bus_Codes_List(ListAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusCodesSerializer

