import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExportModule } from 'src/app/shared/material.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialExportModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule
  ]
})
export class HomePageModule { }
