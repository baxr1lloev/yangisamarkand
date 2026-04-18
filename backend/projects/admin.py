from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'status', 'tag')
    list_filter = ('category', 'status')
    search_fields = ('name', 'tag')
