from dashboards.dashboard import Dashboard
from dashboards.component import Text, Chart
from dashboards.registry import registry

from .data import CofradiaData

class Cofradias(Dashboard):
    cofradias = Chart(defer=CofradiaData.get_cofradias_data, grid_css_classes='span-12')
    denuncias_tipo = Chart(defer=CofradiaData.get_denuncias_data)
    denuncias_cofradia = Chart(defer=CofradiaData.cofradias_with_more_denuncias)
    denuncias_tipo_cofradia = Chart(defer=CofradiaData.denuncias_inside_cofradia)

    class Meta:
        name = 'Datos varios'

registry.register(Cofradias) 