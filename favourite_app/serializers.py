from rest_framework import serializers
from .models import Supplier, Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields =('id', 'name', 'picture_url', 'supplier')

class SupplierSerializer(serializers.ModelSerializer):
    suppliers = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = Supplier
        fields ('id', 'title', 'location', 'description', 'photo_url', 'why')