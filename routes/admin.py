from django.contrib import admin
from .models import BusStand#, Routes, Bus
# Register your models here.
@admin.register(BusStand)
# @admin.register(Routes)
# @admin.register(Bus)
class BusAdmin(admin.ModelAdmin):
    list_display=['code', 'Name']

