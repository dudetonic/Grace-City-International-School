from django.db import models

class Section(models.Model):
    section_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)
    
    class Meta:
        db_table = 'sections'
        managed = False
    
    def __str__(self):
        return self.name

class Staff(models.Model):
    staff_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    
    class Meta:
        db_table = 'staff'
        managed = False
        
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class News(models.Model):
    CATEGORY_CHOICES = [
        ('general', 'General'),
        ('academics', 'Academics'),
        ('sports', 'Sports'),
        ('alumni', 'Alumni'),
        ('cbt_updates', 'CBT Updates'),
    ]
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('archived', 'Archived'),
    ]
    news_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    author = models.ForeignKey(Staff, on_delete=models.DO_NOTHING, db_column='author_id')
    published_at = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    
    class Meta:
        db_table = 'news'
        managed = False

class Event(models.Model):
    event_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    section = models.ForeignKey(Section, on_delete=models.DO_NOTHING, null=True, blank=True, db_column='section_id')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    rsvp_enabled = models.BooleanField(default=False)
    
    class Meta:
        db_table = 'events'
        managed = False

class AdmissionInquiry(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('converted', 'Converted'),
        ('closed', 'Closed'),
    ]
    inquiry_id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=150)
    email = models.CharField(max_length=150)
    phone = models.CharField(max_length=30, null=True, blank=True)
    section = models.ForeignKey(Section, on_delete=models.DO_NOTHING, null=True, blank=True, db_column='section_id')
    message = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'admission_inquiries'
        managed = False
