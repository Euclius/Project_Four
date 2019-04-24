from django.db import models

# Create your models here.

class Supplier(models.Model):
    title = models.CharField(max_length=75)
    location = models.NullBooleanField(default=False, Null=True)
    description = models.TextField(blank=True)
    photo_url = models.CharField(max_length=400, blank=True)
    reason = models.TextField()

    def __str__(self):
        return self.title

class Guru(models.Model):
    name = models.CharField(max_length=75)
    brief_description = models.CharField(max_length=150)
    location = models.NullBooleanField(default=False, Null=True)
    image_url = models.CharField(max_length=400, blank=True)
    skill_set = models.CharField(max_length=80)

    def __str__(self):
        return self.name


class Product(models.Model):
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, related_name='suppliers')
    name = models.CharField(max_length=75)
    picture_url = models.CharField(max_length=400)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

