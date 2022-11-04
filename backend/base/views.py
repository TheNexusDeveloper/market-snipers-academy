from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response 

from .models import Course 
from .coursedb import coursedb 
from .serializers import CourseSerializer

# Create your views here.

@api_view(['GET']) 
def getRoutes(request):
    routes = [
        '/api/courses/',
        '/api/courses/create/',
        '/api/courses/upload/',

        '/api/courses/<id>/reviews/',

        '/api/courses/top/',
        '/api/courses/<id>/',

        '/api/courses/delete/<id>/',
        '/api/courses/<update>/<id>/',
    ]
    return Response(routes) 

@api_view(['GET'])
def getCourses(request):
    Courses = Course.objects.all()
    serializer = CourseSerializer(Courses, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def getCourse(request, pk):
    course = Course.objects.get(_id=pk)
    serializer = CourseSerializer(course, many=False)
   
    return Response(serializer.data)