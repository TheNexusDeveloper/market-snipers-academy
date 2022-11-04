from django.db import models
from django.contrib.auth.models import User 

# Create your models here.


class Course(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True )
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
    tutors = models.CharField(max_length=200, null=True, blank=True )
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name