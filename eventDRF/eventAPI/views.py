from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import EventSerializer

@csrf_exempt
@api_view(['POST'])
def createEvent(Request):
    data = Request.data
    event_name=data['name']
    time = datetime.fromisoformat(data['time'])
    desc = data['data']
    location = data['location']
    image = data['image']

    Event.objects.create(event_name=event_name,data=desc ,time= time, location=location , image= image)
    return HttpResponse('event created')

@api_view(['GET'])
def viewAllData(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)