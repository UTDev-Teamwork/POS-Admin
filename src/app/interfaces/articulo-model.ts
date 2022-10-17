export interface ArticuloModel {
    cod_barras: string;
    id_clasificacion: number;
    descripcion: string;
    descripcion_corta: string;
    precio: number;
    stock: number;
    iva: number;
    articulo_dispobible: boolean;
    imagen: string;
}