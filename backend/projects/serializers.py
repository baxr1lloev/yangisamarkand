from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    youtubeId = serializers.CharField(source='youtube_id', read_only=True)
    fullDesc = serializers.CharField(source='full_desc', read_only=True)
    expectedResults = serializers.CharField(source='expected_results', read_only=True)
    
    class Meta:
        model = Project
        fields = ['id', 'name', 'category', 'status', 'tag', 'desc', 'full_desc', 'fullDesc', 'expected_results', 'expectedResults', 'youtube_id', 'youtubeId']
