from django.db import models
from django.contrib.auth.models import User 

# Create your models here.


class Course(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True )
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(null=True, blank=True, default='/placeholder.png')
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
    tutors = models.CharField(max_length=200, null=True, blank=True )
    # createdAt = models.DateTimeField(auto_now_add = True )
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name
    
class Review(models.Model):
    course = models.ForeignKey(Course, on_delete= models.SET_NULL, null = True )
    user = models.ForeignKey(User, on_delete= models.SET_NULL, null= True )
    name = models.CharField(max_length=200, null = True, blank= True )
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add = True )
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True )
    paymentMethod = models.CharField(max_length=200, null= True, blank= True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    isPaid = models.BooleanField(default= False)
    paidAt = models.DateTimeField(auto_now_add = False, null = True, blank=True )
    createdAt = models.DateTimeField(auto_now_add = True )
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str (self.createdAt)

class OrderItem(models.Model):
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True )
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True )
    name = models.CharField(max_length=200, null= True, blank= True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    image = models.ImageField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False) 

    def __str__(self):
        return str(self.name)
