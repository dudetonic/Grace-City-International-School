# pyrefly: ignore [missing-import]
from rest_framework import viewsets
from rest_framework.response import Response
from .models import News, Event, AdmissionInquiry
from .serializers import NewsSerializer, EventSerializer, AdmissionInquirySerializer

class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows news to be viewed.
    Read-only for public access.
    """
    queryset = News.objects.filter(status='published').order_by('-published_at')
    serializer_class = NewsSerializer

class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows events to be viewed.
    Read-only for public access.
    """
    queryset = Event.objects.all().order_by('start_datetime')
    serializer_class = EventSerializer

class AdmissionInquiryViewSet(viewsets.ModelViewSet):
    """
    API endpoint to submit admission inquiries.
    """
    queryset = AdmissionInquiry.objects.all()
    serializer_class = AdmissionInquirySerializer
    
    # Optional: override create to handle specific logic
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
