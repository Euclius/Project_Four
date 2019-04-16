from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('suppliers', views.SupplierView)
router.register('products', views.ProductView)
router.register('gurus', views.GuruView)

urlpatterns = [
path('', include(router.urls))
]