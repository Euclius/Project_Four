# Generated by Django 2.2 on 2019-04-24 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('favourite_app', '0002_auto_20190422_2053'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guru',
            name='location',
            field=models.CharField(blank=True, max_length=140),
        ),
        migrations.AlterField(
            model_name='supplier',
            name='location',
            field=models.CharField(blank=True, max_length=140),
        ),
    ]
