import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CdkTableModule } from '@angular/cdk/table';
import { DatePipe, SlicePipe } from '@angular/common';

import { DataTableComponent } from './data-table.component';
import { TextCellComponent } from './text-cell/text-cell.component';
import {
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSortModule,
  MatPaginatorModule,
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MatTableModule,
    MatFormFieldModule,
    RouterModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    CdkTableModule
  ],
  declarations: [
    DataTableComponent,
    TextCellComponent
  ],
  providers: [ DatePipe, SlicePipe ],
  exports: [
    DataTableComponent,
  ]
})
export class DataTableModule {
}
