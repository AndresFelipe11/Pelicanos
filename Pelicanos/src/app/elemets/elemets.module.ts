import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElemetsRoutingModule } from './elemets-routing.module';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    ElemetsRoutingModule
  ]
})
export class ElemetsModule { }
