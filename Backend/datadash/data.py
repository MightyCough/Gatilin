from Cuadrillas.models import Cofradias
from Denuncias.models import Denuncias

import json
from django.db.models import Count
import plotly.graph_objs as go
import plotly.express as px

not_null = ['null','borrar']
reemplazar = [
    'Cofradia de negritos del ',
    'Cofradía de Negritos del ',
    'Cofradia de Negritos del ',
    'Cofradia de negritos ',
    'Cofradía de negritos ',
    'Cofradia de Negritos ',
    'Cofradía de Negritos ',
    ]


class CofradiaData:
    @staticmethod
    def get_cofradias_data(request, object=None, filters=None):
        cofradias = Cofradias.objects.all()
        cofradias = [cofradia for cofradia in cofradias if cofradia.nombre_completo not in not_null]
        for i, cofradia in enumerate(cofradias):
            for r in reemplazar:
                cofradias[i].nombre_completo = cofradias[i].nombre_completo.replace(r, '')

        return json.dumps(dict(
            data=[
                dict(
                    x=[cofradia.nombre_completo for cofradia in cofradias],
                    y=[cofradia.visitas for cofradia in cofradias],
                    type='bar',
                    marker=dict(
                        color='rgb(90, 50, 255)'
                    ),
                    opacity=0.8,
                    title='Cofradías con más visitas',
                )
            ] 
        ))
    
    @staticmethod
    def get_denuncias_data(request, object=None, filters=None):
        denuncias = Denuncias.objects.all()
        data = dict(
            tipo=[denuncia.tipo for denuncia in denuncias],
            cantidad=[1 for denuncia in denuncias]
        )

        fig = px.pie(
            data,
            names='tipo',
            values='cantidad',
            title='Distribución de Tipos de Denuncias',
        )

        return fig.to_json()
    
    @staticmethod
    def cofradias_with_more_denuncias(request, object=None, filters=None):
        cofradias = Cofradias.objects.all()
        # clean the cofradias with nombre_completo in not_null
        cofradias = [cofradia for cofradia in cofradias if cofradia.nombre_completo not in not_null]
        data = dict(
            x=[cofradia.nombre_completo for cofradia in cofradias],
            cantidad=[cofradia.denuncias_set.count() for cofradia in cofradias]
        )

        fig = px.pie(
            data,
            names='x',
            values='cantidad',
            title='Cantidad de Denuncias por Cofradia',
        )

        return fig.to_json()
    
    @staticmethod
    def denuncias_inside_cofradia(request, object=None, filters=None):
        cofradias = Cofradias.objects.all()
        # clean the cofradias with nombre_completo in not_null
        cofradias = [cofradia for cofradia in cofradias if cofradia.nombre_completo not in not_null]
        data = {
            'cofradia': [],
            'tipo': [],
            'count': [],
        }

        for cofradia in cofradias:
            denuncias = cofradia.denuncias_set.values('tipo').annotate(count=Count('tipo'))
            for denuncia in denuncias:
                data['cofradia'].append(cofradia.nombre_completo)
                data['tipo'].append(denuncia['tipo'])
                data['count'].append(denuncia['count'])

        fig = px.bar(
            data,
            x='cofradia',
            y='count',
            color='tipo',
            title='Distribución de Tipo de Denuncias por Cofradia',
            labels={'count': 'Cantidad de Denuncias', 'cofradia': 'Cofradia', 'tipo': 'Denuncia Type'},
            barmode='group'
        )

        return fig.to_json()
