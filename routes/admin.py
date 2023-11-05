from django.contrib import admin
from .models import *
# Register your models here.
# @admin.register(BusStand)
# @admin.register(Routes)
# @admin.register(Bus)
class Bus_StandAdmin(admin.ModelAdmin):
    list_display=['code', 'Name']
class BusAdmin(admin.ModelAdmin):
    list_display=['bus_code', 'route']
class RouteAdmin(admin.ModelAdmin):
    list_display=['source', 'reachable']
class ConductorAdmin(admin.ModelAdmin):
    list_display=['C_id', 'C_name', 'salary', 'working_shift']
class DriverAdmin(admin.ModelAdmin):
    list_display=['D_id', 'D_name', 'salary', 'working_shift']
class FareAdmin(admin.ModelAdmin):
    list_display=['Number_of_Stands_covered', 'Price']
class TicketAdmin(admin.ModelAdmin):
    list_display=['T_id', 'Bus_no', 'source', 'destination']
admin.site.register(Bus, BusAdmin)
admin.site.register(BusStand, Bus_StandAdmin)
admin.site.register(Routes, RouteAdmin)
admin.site.register(Tickets, TicketAdmin)
admin.site.register(Conductor, ConductorAdmin)
admin.site.register(Driver, DriverAdmin)
admin.site.register(Fare, FareAdmin)