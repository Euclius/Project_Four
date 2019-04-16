from django.contrib import admin
from .models import Supplier
from .models import Product
from .models import Guru

# Register your models here.

admin.site.register(Supplier)
admin.site.register(Product)
admin.site.register(Guru)