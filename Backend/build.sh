#!usr/bin/env bash
# exit or error

set -o errexit

pip install -r requirements.txt

# run the application
python manage.py collectstatic --no-input
python manage.py makemigrations Cuentas Cuadrillas Denuncias 
python manage.py migrate
python manage.py loaddata cuadrillas_data.json