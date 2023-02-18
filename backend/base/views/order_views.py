from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response 


from base.models import Course, Order, OrderItem
from base.serializers import CourseSerializer, OrderSerializer

from rest_framework import status 


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = requesr.user
    data = request.data
    OrderItems = data['orderItems']

    if orderItems and len(orderItems) == 0:
        return Response({'detail' : 'No order Items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # 1. create order 

        order = Order.objects.create(
            user=user, 
            paymentMethod=data['paymentMethod'],
            totalPrice = data['totalPrice']
        )
        # 2. create order items and set order to orderItems relationship 

        for i in orderItems: 
            course = Course.objects.get(_id=i['course'])

            item = OrderItem.objects.create(
                course=course,
                order=order, 
                name = course.name,
                price = i['price'],
                image= course.image.url, 
            )
        

        serializer = OrderSerializer(order, many=False)

        return Response(serializer.data)

@api_view(['GET'])
@permission_classes(['IsAuthenticated'])
def getOrderById(request, pk):

    user = request.user 

    try:
        order = Order.objects.get(_id=pk)

        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False) 
            return Response(serializer.data)
        else:
            Response({'detail': 'Not authorized to view this order'},
            status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'detail': 'Order does not exist'}, 
        status=status.HTTP_400_BAD_REQUEST)