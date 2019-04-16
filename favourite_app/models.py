from django.db import models

# Create your models here.

class Supplier(models.Model):
    title = models.CharField(max_length=75)
    location = models.BooleanField(default=False, blank=True)
    description = models.TextField(blank=True)
    photo_url = models.CharField(max_length=400, blank=True)
    why = models.TextField()

    def __str__(self):
        return self.title

class Guru(models.Model):
    name: models.CharField(max_length=75)
    brief_description = models.CharField(max_length=150)
    location = models.BooleanField(default=False, blank=True)
    image_url = models.CharField(max_length=400, blank=True)
    skill_set = models.CharField(max_length=80)

    def __str__(self):
        return self.name


class Product(models.Model):
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, related_name='suppliers')
    guru = models.ForeignKey(Guru, on_delete=models.CASCADE, related_name='Gurus')
    name: models.CharField(max_length=75)
    picture_url = models.CharField(max_length=400)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

