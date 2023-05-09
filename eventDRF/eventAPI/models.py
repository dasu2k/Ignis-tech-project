from django.db import models

class Event(models.Model):
    event_name = models.CharField(max_length=70 )
    data = models.CharField(max_length=500)
    time = models.DateTimeField(null=True)
    location = models.CharField(max_length=50)
    is_liked = models.BooleanField(default=False)
    image = models.CharField(max_length=400,default='http://surl.li/gxgxl')

    def __str__(self):
        return self.event_name