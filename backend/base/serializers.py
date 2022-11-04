from dataclasses import fields
from rest_framework import serializers
from django.contrib.auth.models import User 
from .models import Course 


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'