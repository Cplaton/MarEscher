import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapEditorComponent } from './map-editor.component';
import { MapEditorService } from './providers/map-editor.service'

@NgModule({
  imports: [CommonModule],
  declarations: [MapEditorComponent],
  exports: [MapEditorComponent],
  providers: [MapEditorService]
})
export class MapEditorModule { }
