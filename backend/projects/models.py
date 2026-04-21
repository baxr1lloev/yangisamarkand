import re
from django.db import models
from ckeditor.fields import RichTextField

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('uzMade', 'Uz Made'),
        ('startups', 'Startups'),
        ('social', 'Social'),
        ('scientific', 'Scientific'),
    ]
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('completed', 'Completed'),
    ]

    name = models.CharField(max_length=255)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='uzMade')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    tag = models.CharField(max_length=100)
    desc = RichTextField(help_text="Short description for the list view")
    full_desc = RichTextField(help_text="Full description for the detail page", blank=True, null=True)
    expected_results = RichTextField(blank=True, null=True)
    youtube_id = models.CharField(max_length=255, blank=True, null=True, help_text="Paste YouTube link or ID here")

    def save(self, *args, **kwargs):
        if self.youtube_id:
            # Extract video ID from link if it is a link
            match = re.search(r'(?:v=|youtu\.be/|youtube\.com/embed/)([^&?]+)', self.youtube_id)
            if match:
                self.youtube_id = match.group(1)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
