// Angular
import { NgModule } from '@angular/core';

// Material
/// Iconos
import { MatIconModule } from '@angular/material/icon';
/// Cards
import { MatCardModule } from '@angular/material/card';
/// Tabs
import { MatTabsModule } from '@angular/material/tabs';
// Boton contextual
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  exports: [MatIconModule, MatTabsModule, MatCardModule, MatMenuModule],
})
export class MaterialModule {}
