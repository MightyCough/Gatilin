from django.contrib import admin
from django.urls import path, include # new

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cuadrillas/', include('Cuadrillas.urls')), # new
    path('cuentas/', include('Cuentas.urls')), # new
    path('denuncias/', include('Denuncias.urls')), # new
    path('dashboard/', include('dashboards.urls')), # new
]
