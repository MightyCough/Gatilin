from django.db import models

class Cofradias(models.Model):
    nombre = models.CharField(max_length=100, null=True, blank=True)
    nombre_completo = models.CharField(max_length=200, null=True, blank=True)
    fecha_fundacion = models.DateField(null=True, blank=True)
    sede_local = models.CharField(max_length=100, null=True, blank=True)
    dni_representante = models.CharField(max_length=8, null=True, blank=True)
    nombre_representante = models.CharField(max_length=100, null=True, blank=True)
    telefono_representante = models.CharField(max_length=9, null=True, blank=True)
    distrito = models.CharField(max_length=100, null=True, blank=True)
    color = models.CharField(max_length=20, null=True, default='blue')
    ubicacion = models.CharField(max_length=300, null=True, blank=True)
    is_live = models.BooleanField(default=False)
    visitas = models.IntegerField(default=0)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f'{self.nombre_completo} - Visitas: {self.visitas} - Activo: {self.is_live}'

class Coordenadas(models.Model):
    cofradia = models.ForeignKey(Cofradias, on_delete=models.CASCADE)
    longitud = models.FloatField(default=0.0)
    latitud = models.FloatField(default=0.0)

    def __str__(self):
        return self.cofradia.nombre_completo
    
class Cofrades(models.Model):
    cofradia = models.ForeignKey(Cofradias, on_delete=models.CASCADE)
    dni_cofrade = models.CharField(max_length=8, null=True, blank=True)
    nombre_cofrade = models.CharField(max_length=150, null=True, blank=True)
    celular_cofrade = models.CharField(max_length=9, null=True, blank=True)
    personaje = models.CharField(max_length=100, null=True, blank=True)
    cargo = models.CharField(max_length=100, null=True, blank=True)
    foto = models.ImageField(upload_to='cofrades/', null=True, blank=True)

    def __str__(self):
        return self.cofradia.nombre_completo + ' - ' + self.nombre_cofrade

class Cronogramas(models.Model):
    cofradia = models.ForeignKey(Cofradias, on_delete=models.CASCADE)
    fecha = models.DateField(null=True, blank=True)
    dia = models.CharField(max_length=20, null=True, blank=True)
    evento = models.CharField(max_length=20, null=True, blank=True)
    hora = models.TimeField(null=True, blank=True)
    direccion = models.CharField(max_length=100, null=True, blank=True)
    oferente = models.CharField(max_length=350, null=True, blank=True)
    tipo_oferente = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.cofradia.nombre_completo + ' - ' + self.evento

class Bordadurias(models.Model):
    nombre_bordaduria = models.CharField(max_length=100, null=True, blank=True)
    presentacion_bordaduria = models.CharField(max_length=350, null=True, blank=True, default='No hay presentación')
    ruc_bordaduria = models.CharField(max_length=16, null=True, blank=True)
    razon_soc_bordaduria = models.CharField(max_length=200, null=True, blank=True)
    direccion_bordaduria = models.CharField(max_length=200, null=True)
    web_bordaduria = models.CharField(max_length=200, null=True, blank=True)
    representante_bordaduria = models.CharField(max_length=100, null=True)
    celular_bordaduria = models.CharField(max_length=9, null=True, blank=True)

    def __str__(self):
        return self.nombre_bordaduria