from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.exceptions import ValidationError

class UsuarioManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, password, **extra_fields)
    
class Usuario(AbstractUser):
    username = models.CharField(max_length=150, unique=False)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    id_cofradia = models.IntegerField(null=True)

    objects = UsuarioManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    REGISTRATION_CHOICES = [
        ('email', 'Email'),
        ('google', 'Google'),
    ]
    registration_method = models.CharField(
        max_length=20, 
        choices=REGISTRATION_CHOICES, 
        default='email')

    def __str__(self):
        return self.first_name + ' ' + self.last_name + ' - ' + self.email
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)