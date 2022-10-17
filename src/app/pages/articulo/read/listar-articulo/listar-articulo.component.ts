import { Component, OnInit, AfterViewInit, ViewChild, EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ArticuloModel } from 'src/app/interfaces/articulo-model';

@Component({
  selector: 'app-listar-articulo',
  templateUrl: './listar-articulo.component.html',
  styleUrls: ['./listar-articulo.component.css'],
})
export class ListarArticuloComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['codBarras', 'idClasif', 'descripcion', 'desCorta', 'precio', 'stock', 'artDisp', 'acciones'];
  dataSource = new MatTableDataSource<ArticuloModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: ArticuloModel[] = [
  {
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 1',
    descripcion_corta: 'Sud1',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000010',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 2',
    descripcion_corta: 'Sud2',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000011',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 3',
    descripcion_corta: 'Sud3',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 4',
    descripcion_corta: 'Sud4',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 5',
    descripcion_corta: 'Sud5',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 6',
    descripcion_corta: 'Sud6',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 7',
    descripcion_corta: 'Sud7',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 8',
    descripcion_corta: 'Sud8',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },{
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 9',
    descripcion_corta: 'Sud9',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 10',
    descripcion_corta: 'Sud10',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
  {
    cod_barras: '700000000000001',
    id_clasificacion: 17,
    descripcion: 'Sudadera Said 11',
    descripcion_corta: 'Sud11',
    precio: 589.99,
    stock: 8,
    iva: 16,
    articulo_dispobible: true,
    imagen:
      'https://raw.githubusercontent.com/eduardrivs/Resources/main/Pos-movilRS/articulos/SudaderaBakugou.jpg',
  },
];
