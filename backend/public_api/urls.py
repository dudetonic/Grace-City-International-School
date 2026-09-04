from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, EventViewSet, AdmissionInquiryViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'news', NewsViewSet)
router.register(r'events', EventViewSet)
router.register(r'admissions', AdmissionInquiryViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

from .views import NewsViewSet, EventViewSet, AdmissionInquiryViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'news', NewsViewSet)
router.register(r'events', EventViewSet)
router.register(r'admissions', AdmissionInquiryViewSet)
router.register(r'contact', ContactMessageViewSet)   # new line