from django.urls import path 
from base.views import order_views as views 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('add/', views.addOrderItems, name='orders-add'),
    path('myorders/', views.getMyOrders, name='myorders'),

    path('orderitems/', views.getAllOrderItems, name='myorderitems'),
    path('orderitem/<str:pk>/', views.getOrderItem, name='order-item'),

    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay'),

    path('orderitem/<str:pk>/itempay/', views.updateOrderItemToPaid, name='item-pay'),
]