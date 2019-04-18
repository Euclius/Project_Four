from django.shortcuts import render, redirect
from .models import Supplier
from .models import Product
from .models import Guru
from rest_framework import viewsets
from .serializers import SupplierSerializer, ProductSerializer, GuruSerializer
# Create your views here.

class SupplierView(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serialzier_class = ProductSerializer

class GuruView(viewsets.ModelViewSet):
    queryset = Guru.objects.all()
    serializer_class = GuruSerializer
