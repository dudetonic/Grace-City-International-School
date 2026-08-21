from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, EventViewSet, AdmissionInquiryViewSet

router = DefaultRouter()
router.register(r'news', NewsViewSet)
router.register(r'events', EventViewSet)
router.register(r'admissions', AdmissionInquiryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
