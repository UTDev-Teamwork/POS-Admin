import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarArticuloComponent } from './read/listar-articulo/listar-articulo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ListarArticuloComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MaterialModule],
  exports: [ListarArticuloComponent],
})
export class ArticuloModule {}
