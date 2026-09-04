from django.contrib import admin
from .models import News, Event, AdmissionInquiry, ContactMessage

admin.site.register(News)
admin.site.register(Event)
admin.site.register(AdmissionInquiry)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'submitted_at')
    list_filter = ('submitted_at',)
    search_fields = ('name', 'email', 'subject', 'message')
    readonly_fields = ('submitted_at',)