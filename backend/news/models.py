from django.db import models
from ckeditor.fields import RichTextField

class News(models.Model):
    title = models.CharField(max_length=255)
    description = RichTextField()
    content = RichTextField()
    CATEGORY_CHOICES = [
        ('Events', 'Events'),
        ('Grants', 'Grants'),
        ('Partnerships', 'Partnerships'),
    ]
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES, default='Events')
    image = models.ImageField(upload_to='news_images/')
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = "News"
        ordering = ['-date']
