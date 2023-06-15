from django.urls import path 
# from django.contrib.auth import views as auth_views 

from base.views import user_views as views 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('register/', views.registerUser, name='register'), 

    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update/', views.updateUserProfile, name="users-profile-update"),
    path('', views.getUsers, name="users"),

    path('<str:pk>/', views.getUserById, name='user'),

    path('update/<str:pk>/', views.updateUser, name='user-update'), 

    path('delete/<str:pk>/', views.deleteUser, name='user-delete'), 

    # path('reset_password/', auth_views.PasswordResetView.as_view()),


]

""" 
1- Submit Email form 
2- Email sent success Message 
3- Link to password reset form in email 
4- Password successfully changed message 
"""