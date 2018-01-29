import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapEditorComponent } from './map-editor.component'

@NgModule({
  imports: [CommonModule],
  declarations: [MapEditorComponent],
  exports: [MapEditorComponent]
})
export class MapEditorModule { }
