# Backend para la Aplicación de los Negritos 
El objetivo es crear todos los servicios y funcionalidades necesarias para poder interactuar con el Front y también alguna que otra cosa extra como lo son los dashboards

## Aplicaciones
El servidor se trabajará con Django, las aplicaciones principales serán:
- Cuentas (El único uso de esto es que los representantes de las cofradias puedan transmitir su ubicación)
- Cuadrillas (También tiene datos de las bordadurias, me dio flojera crear otra app para eso)
- Denuncias (Permite registrar las denuncias por tipo y con una foto y descripción)
- datadash (Los cuadros para sacar información pseudo-relevante de la aplicación)

## Para Iniciar a Chambear en el Backend
Crear su entorno virtual (con nombre "venv", por favor) en la carpeta general luego de clonar
- python3.11 -m venv venv
Luego activarlo
- ./venv/Scripts/activate // Windows
- source venv/bin/activate // Linux
### Instalar dependencias:
pip install -r requirements.txt

## Manejo de la DB
La base de datos está siendo hosteada en Heroku. Todo está guardado en variables de entorno, si quieren copiar la BD con datos pre-cargados, usen los archivos json
### Exportar toda la data de la BD
- python manage.py dumpdata > data.json 
### Importar toda la data
- python manage.py loaddata data.json

