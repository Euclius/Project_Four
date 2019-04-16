from rest_framework import serializers
from .models import Supplier, Product, Guru

class GuruSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guru
        fields = ('id', 'name', 'brief_description', 'location', 'image_url', 'skill_set')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields =('id', 'name', 'picture_url', 'supplier')

class SupplierSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = Supplier
        fields = ('id', 'title', 'location', 'description', 'photo_url', 'why')