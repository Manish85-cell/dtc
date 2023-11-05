from django.urls import path
from . import views
urlpatterns = [
    path("bus_stand/",views.BusStandsList.as_view()),
    path("routes/",views.RouteList.as_view()),
    path("bus/",views.Bus_Codes_List.as_view()),
    
]