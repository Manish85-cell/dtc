from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
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
class Driver(models.Model):
    D_id = models.IntegerField(primary_key=True)
    D_name = models.CharField(max_length=64)
    salary = models.IntegerField(validator=[
        MinValueValidator(20,000),
        MaxValueValidator(50,000),
    ])
    working_shift = models.CharField(max_length=64)
    
    def __str__(self):
        return f"({self.D_id}) {self.D_name}"
class Conductor(models.Model):
    C_id = models.IntegerField(primary_key=True)
    C_name = models.CharField(max_length=64)
    salary = models.IntegerField(validators=[
        MinValueValidator(15,000),
        MaxValueValidator(30,000),
    ])
    working_shift = models.CharField(max_length=64)
    
    def __str__(self):
        return f"({self.D_id}) {self.D_name}"

class Tickets(models.Model):
    T_id = models.IntegerField(primary_key=True)
    Bus_no = models.ForeignKey(Bus, on_delete=models.CASCADE, related_name="t_no")   
    source = models.ForeignKey(BusStand, ondelete=models.CASCADE, related_name="dest")
    destination = models.ForeignKey(BusStand, ondelete=models.CASCADE, related_name="src")
    Fare = models.IntegerChoices()

# class Passenger(models.Model):
#     first = models.CharField(max_length=64)
