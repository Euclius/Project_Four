from django.db import models

# Create your models here.

class Supplier(models.Model):
    title = models.CharField(max_length=75)
    location = models.BooleanField(default=False, blank=True)
    description = models.TextField(blank=True)
    photo_url = models.CharField(max_length=400)
    why = models.TextField()

    def __str__(self):
        return self.title

class Product(models.Model):
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, related_name='suppliers')
    name: models.CharField(max_length=75)
    picture_url = models.CharField(max_length=400)

    def __str__(self):
        return self.name


