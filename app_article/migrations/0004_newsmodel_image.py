# Generated by Django 4.2.14 on 2024-08-01 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_article', '0003_newsmodel_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsmodel',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
