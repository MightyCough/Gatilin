from pathlib import Path
import os
import dj_database_url

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['SECRET_KEY']

DEBUG = os.environ.get('DEBUG', 'True')=='True'
CORS_VAR = os.environ.get('CORS_VAR', 'True')=='True'
HEROKU = os.environ.get('HEROKU', 'False')=='True'

ALLOWED_HOSTS = ['localhost', '127.0.0.1', '.herokuapp.com']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework', # REST Framework

    # CORS
    'corsheaders',

    # Auth apps
    'rest_framework.authtoken',
    'dj_rest_auth',

    # Registration apps
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'dj_rest_auth.registration',

    # Social Registration apps
    'allauth.socialaccount.providers.google',
    'allauth.socialaccount.providers.facebook',

    # Local Apps
    'Cuentas', # Cuentas App
    'Cuadrillas', # Cuadrillas App
    'Denuncias', # Denuncias App
    'dashboards', # Dashboards App
    'datadash', # DataDash App

]

SITE_ID = 1

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',     # CORS
    'whitenoise.middleware.WhiteNoiseMiddleware', # whitenoise
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    # Auth middleware
    'allauth.account.middleware.AccountMiddleware',
]

ROOT_URLCONF = 'DjangoBackend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'DjangoBackend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases


if not DEBUG:
    DATABASES = {
        'default': dj_database_url.config(
            default=os.environ.get('DATABASE_URL')
        )
    }

    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

    STORAGES = {
        "default": {
            "BACKEND": "storages.backends.s3.S3Storage",
            "OPTIONS": {
                "access_key": os.environ.get('AWS_ACCESS_KEY'),
                "secret_key": os.environ.get('AWS_SECRET_ACCESS_KEY'),
                "bucket_name": os.environ.get('AWS_STORAGE_BUCKET_NAME'),
            },
        },
        "staticfiles": {
            "BACKEND":'whitenoise.storage.CompressedManifestStaticFilesStorage',
        }
    }

else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'HOST': 'localhost',
            'PORT': '5432',
            'NAME': 'Cuadrillas2',
            'USER': 'postgres',
            'PASSWORD': '0116',
        }
    }
"""
    PARA MYSQL:

    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'Cuadrillas',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': 3306,
    }

    PARA SQLITE:
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
"""

# Password validation python manage.py runserver
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS':{
            'min_length': 4,
        }
    }
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'America/Lima'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

AUTHENTUCATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
]

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'Cuentas.Usuario'

# Account settings (allauth)
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_USER_MODEL_USERNAME_FIELD = 'email'
USERNAME_REQUIRED = False
ACCOUNT_EMAIL_VERIFICATION = None
ACCOUNT_CONFIRM_EMAIL_ON_GET = False
ACCAUNT_MODEL_USERNAME_FIELD = None

REST_AUTH = {
    'LOGIN_SERIALIZER': 'Cuentas.serializers.CustomLoginSerializer',
    'TOKEN_SERIALIZER': 'Cuentas.serializers.CustomTokenSerializer',  #Esto es por si necesitamos más adelante
    'REGISTER_SERIALIZER': 'Cuentas.serializers.CustomRegisterSerializer',
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
}

CORS_ALLOW_ALL_ORIGINS = CORS_VAR

CORS_ALLOWED_ORIGINS = [
    "http://localhost:4200",
    "http://127.0.0.1:8000",
    "https://seguimiento-negritos-dd422cc4e500.herokuapp.com",
    "https://gatilin.udh.edu.pe",
]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:4200",
    "http://127.0.0."
    "http://seguimiento-negritos-dd422cc4e500.herokuapp.com",
    "https://gatilin.udh.edu.pe",
]