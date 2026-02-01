from .views import *
from django.urls import path

urlpatterns = [
    path('lista/', ListaCuadrillasView.as_view(), name='todas-las-cuadrillas'),
    path('actualizar-coordenadas/', ActualizarCoordenadasView.as_view(), name='actualizar-coordenadas'),
    path('coordenadas/<int:id>/', EnviarCoordenadasView.as_view(), name='enviar-coordenadas'),
    path('cuadrilla/<int:id>/', VerCuadrillaView.as_view(), name='enviar-cuadrilla'),
    path('bordadurias/', ListaBordaduriasView.as_view(), name='todas-las-bordadurias'),
    path('bordaduria/<int:id>/', VerBordaduriaView.as_view(), name='enviar-bordaduria'),
    path('cofrades/<int:id>/', VerCofradesView.as_view(), name='enviar-cofrades'),
    path('cronograma/<int:id>/', VerCronogramaView.as_view(), name='enviar-cronograma'),
    path('activar-desactivar/', ActivarDesactivarCuadrilla.as_view(), name='activar-desactivar'),
]