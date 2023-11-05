from django.db import models
import random

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
        return f"{self.bus_code}({self.route})"
    def get_route_list(self):
        return self.route.split(",")  
class Driver(models.Model):
    D_id = models.IntegerField(primary_key=True)
    D_name = models.CharField(max_length=64)
    salary = models.IntegerField()
    working_shift = models.CharField(max_length=64)
    # password=models.CharField(max_length=16)
    
    def __str__(self):
        return f"({self.D_id}) {self.D_name}"
class Conductor(models.Model):
    C_id = models.IntegerField(primary_key=True)
    C_name = models.CharField(max_length=64)
    salary = models.IntegerField()
    working_shift = models.CharField(max_length=64)
    # password=models.CharField(max_length=16)
    
    def __str__(self):
        return f"({self.D_id}) {self.D_name}"

class Tickets(models.Model):
    T_id = models.IntegerField(primary_key=True)
    Bus_no = models.ForeignKey(Bus, on_delete=models.CASCADE, related_name="t_no")   
    source = models.ForeignKey(BusStand, on_delete=models.CASCADE, related_name="dest")
    destination = models.ForeignKey(BusStand, on_delete=models.CASCADE, related_name="src")
    def __str__(self):
       return f"({self.C_id}) {self.C_name}"

class Fare(models.Model):
    # choices=(
    #     (1, '5'),
    #     (2, '10'),
    #     (3, '15')
    # )
    Number_of_Stands_covered : models.IntegerField(primary_key  = True)
    Price : models.IntegerField()  


# for _ in range(25):
#         conductor = Conductor(
#             C_id=random.randint(1, 100),
#             C_name='Conductor ' + str(random.randint(1, 100)),
#             salary=random.randint(10000, 50000),
#             working_shift=random.choice(['Morning', 'Afternoon', 'Night']),
#             password=''.join(random.choices('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', k=8))
#         )
#         conductor.save()