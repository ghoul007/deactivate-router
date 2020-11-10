import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
