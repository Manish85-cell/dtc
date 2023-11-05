from django.db import models

# Create your models here.
class BusStand(models.Model):
    code = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.Name} ({self.code})"


class Routes(models.Model):
    source = models.ForeignKey(BusStand, on_delete=models.CASCADE, related_name="departures")
    reachable = models.CharField(max_length=255)
    def __str__(self):
        return self.route
    
    def get_route_list(self):
        return self.route.split(",")# Split the route string into a list
    
class Bus(models.Model):
    bus_code = models.IntegerField(primary_key=True)
    route = models.CharField(max_length=255)
    def __str__(self):
        return self.route
    def get_route_list(self):
        return self.route.split(",")  

# class Passenger(models.Model):
#     first = models.CharField(max_length=64)
