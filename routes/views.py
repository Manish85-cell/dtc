from django.shortcuts import render
from .serializer import *
from rest_framework.generics import ListAPIView
from .models import *
# from .models import BusStand
# Create your views here.
class BusStandsList(ListAPIView):
    serializer_class = BusSerializer
    def get_queryset(self):
        code = self.request.GET.get('code')
        if code is not None:
            return BusStand.objects.filter(code = code)
        else:
            return BusStand.objects.all()
       
    
class RouteList(ListAPIView):
    queryset = Routes.objects.all()
    serializer_class = RouteSerializer
class ConductorList(ListAPIView):
    queryset = Conductor.objects.all()
    serializer_class = ConductorSerializer
class DriverList(ListAPIView):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer
class FareList(ListAPIView):
    queryset = Fare.objects.all()
    serializer_class = FareSerializer
   
        
   
class Bus_Codes_List(ListAPIView):
    
    serializer_class = BusCodesSerializer
    def get_queryset(self):
        code = self.request.GET.get('bus_code')
        if code is not None:
            return Bus.objects.filter(bus_code = code)
        else:
            return Bus.objects.all()


# class Bus_Routes(ListAPIView):
#     inp_code = request.GET.get('inp_code')
    
#     queryset = Bus.objects.raw("SELECT Name FROM route_BusStand WHERE code = (SELECT route FROM route_Bus WHERE bus_code = %s Cross Apply String_split(TAGS, (,))", [inp_code])
 
#     serializer =_class = RouteSerializer

