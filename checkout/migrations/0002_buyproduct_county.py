# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-05-15 16:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='buyproduct',
            name='county',
            field=models.CharField(default='County', max_length=40),
            preserve_default=False,
        ),
    ]