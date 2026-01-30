from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Cofradias, Cofrades, Bordadurias, Coordenadas, Cronogramas
from .serializers import CofradiasSerializer, CofradesSerializer, BordaduriasSerializer, CronogramasSerializer


#-------------------------Cofradia Related-------------------------#
class ListaCuadrillasView(APIView):
    def get(self, request, format=None):
        cofradias = Cofradias.objects.all()
        serializer = CofradiasSerializer(cofradias, many=True)
        return Response(serializer.data)
    
class VerCuadrillaView(APIView):
    def get(self, request, id, format=None):
        cofradia = Cofradias.objects.get(id=id)
        # Update the number of visits
        cofradia.visitas += 1
        cofradia.save()
        serializer = CofradiasSerializer(cofradia)
        return Response(serializer.data)
    
class ActivarDesactivarCuadrilla(APIView):
    def post(self, request, format=None):
        cofradia = Cofradias.objects.get(id=int(request.data['id']))
        cofradia.is_live = not cofradia.is_live
        cofradia.save()
        return Response({'is_live': cofradia.is_live})
    
# -------------------------Cronogramas Related-------------------------#
class VerCronogramaView(APIView):
    def get(self, request, id, format=None):
        cronogramas = Cronogramas.objects.filter(cofradia__id=id)
        serializer = CronogramasSerializer(cronogramas, many=True)
        return Response(serializer.data)

#-------------------------Cofrades Related-------------------------#
class VerCofradesView(APIView):
    def get(self, request, id, format=None):
        cofrades = Cofrades.objects.filter(cofradia=id)
        serializer = CofradesSerializer(cofrades, many=True)
        return Response(serializer.data)
        
#-------------------------Bordadurias Related-------------------------#
class ListaBordaduriasView(APIView):
    def get(self, request, format=None):
        bordadurias = Bordadurias.objects.all()
        serializer = BordaduriasSerializer(bordadurias, many=True)
        return Response(serializer.data)

class VerBordaduriaView(APIView):
    def get(self, request, id, format=None):
        bordaduria = Bordadurias.objects.get(id=id)
        serializer = BordaduriasSerializer(bordaduria)
        return Response(serializer.data)
    
#-------------------------Coordenadas Related-------------------------#
class ActualizarCoordenadasView(APIView):
    def post(self, request, format=None):
        cofradia = Cofradias.objects.get(id=int(request.data['id']))
        # Check if the coordinates already exist, if not, create them
        try:
            ubicacion = request.data['ubicacion']
            if "Maps:" in ubicacion:
                ubicacion = ubicacion.split('Maps:')
                ubicacion = ubicacion[1].split(' ')[1]
                cofradia.ubicacion = ubicacion
                cofradia.save()
                return Response({'ubicacion': cofradia.ubicacion})
            elif "https:" in ubicacion and "Maps" not in ubicacion:
                ubicacion= ubicacion.replace(' ', '')
                cofradia.ubicacion = ubicacion
                cofradia.save()
                return Response({'ubicacion': cofradia.ubicacion})
            else:
                cofradia.ubicacion = '' 
                cofradia.save()
        except:
            return Response({'ubicacion': 'No se pudo actualizar la ubicación'})
        return Response({'ubicacion': cofradia.ubicacion})
    
class EnviarCoordenadasView(APIView):
    def get(self, request, id, format=None):
        coordenadas = Coordenadas.objects.get(cofradia=id)
        return Response({'latitud': coordenadas.latitud, 'longitud': coordenadas.longitud})