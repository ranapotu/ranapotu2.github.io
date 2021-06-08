import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

const materialComponents = [MatTableModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}
