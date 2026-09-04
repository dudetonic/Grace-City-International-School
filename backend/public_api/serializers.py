from rest_framework import serializers
from .models import News, Event, AdmissionInquiry, ContactMessage

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class AdmissionInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionInquiry
        fields = ['full_name', 'email', 'phone', 'section', 'message', 'status']
        read_only_fields = ['status']

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message', 'status']
        read_only_fields = ['status']