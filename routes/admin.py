from django.contrib import admin
from .models import BusStand, Routes, Bus
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
admin.site.register(Bus, BusAdmin)
admin.site.register(BusStand, Bus_StandAdmin)
admin.site.register(Routes, RouteAdmin)