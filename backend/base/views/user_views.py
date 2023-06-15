from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 
from django.contrib.auth.models import User 
from django.contrib.auth import get_user_model

from base.serializers import UserSerializer, UserSerializerWithToken

# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView 

from django.contrib.auth.hashers import make_password 
from rest_framework import status 

from django.contrib.sites.shortcuts import get_current_site  
from django.utils.encoding import force_bytes, force_str 
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string  
from base.tokens import account_activation_token  
from django.http import HttpResponse 
from django.core.mail import EmailMessage 
from base.forms import SignupForm
from django.conf import settings




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs) 

        serializer = UserSerializerWithToken(self.user).data

        for k , v in serializer.items():
            data[k] = v 

        return data 



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


def sendActivationEmail(User, request):
    current_site = get_current_site(request)
    email_subject = 'Activate Your Email'
    email_body = render_to_string('acc_activate_email.html',{
        'user': User, 
        'domain': current_site,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': account_activation_token.make_token(user),
    })

    email = EmailMessage(subject=email_subject, body=email_body, from_email=settings.EMAIL_HOST_USER, to=[user.email])

    email.send() 

    

@api_view(['POST'])
def registerUser(request):
    data = request.data
    
    try:
        user = User.objects.create(
            first_name= data['name'],
            username= data['email'],
            email= data['email'],
            password= make_password(data['password']),
            is_active= False,
            
        )
       
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'details': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
 
    


    
def activate(request, uidb64, token):  
    User = get_user_model()  
    try:  
        uid = force_str(urlsafe_base64_decode(uidb64))  
        user = User.objects.get(pk=uid)  
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):  
        user = None  
    if user is not None and account_activation_token.check_token(user, token):  
        user.is_active = True  
        user.save()  
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')  
    else:  
        return HttpResponse('Activation link is invalid!')  
    

@api_view(['PUT'])
@permission_classes([IsAuthenticated]) 
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data

    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email'] 
    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data) 


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data) 



@api_view(['GET'])
@permission_classes([IsAdminUser]) 
def getUsers(request):
    users = User.objects.all() 
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data) 


@api_view(['GET'])
@permission_classes([IsAdminUser]) 
def getUserById(request, pk): 
    user = User.objects.get(id=pk) 
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data) 


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateUser(request, pk):
    user = User.objects.get(id=pk)
    

    data = request.data

    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email'] 
    user.is_staff = data['isAdmin']

    user.save()

    serializer = UserSerializer(user, many=False)

    return Response(serializer.data) 


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')


