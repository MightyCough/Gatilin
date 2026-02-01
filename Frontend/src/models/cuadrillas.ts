export class Cofradia{
    id!: number;
    nombre!: string;
    nombre_completo!: string;
    fecha_fundacion!: string;
    sede_local!: string;
    dni_representante!: string;
    nombre_representante!: string;
    telefono_representante!: string;
    distrito!: string;
    color!: string;
    cronograma!: Text;
    is_live!: boolean;
    ubicacion!: string;
}

export class Cofrades{
    cofradia!: number;
    dni_cofrade!: string;
    nombre_cofrade!: string;
    celular_cofrade!: string;
    personaje!: string;
    cargo!: string;
}

export class Bordaduria{
    id!: number;
    nombre_bordaduria!: string;
    presentacion_bordaduria!: string;
    ruc_bordaduria!: string;
    razon_soc_bordaduria!: string;
    direccion_bordaduria!: string;
    web_bordaduria!: string;
    representante_bordaduria!: string;
    celular_bordaduria!: string;
}

export class Cronograma{
    id!: number;
    fecha!: string;
    dia!: string;
    evento!: string;
    direccion!: string;
    oferente!: string;
    tipo!: string;
    hora!: string;
}
