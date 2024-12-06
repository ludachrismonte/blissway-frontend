import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { ViolationsComponent } from "./violations/violations.component";

import { routes } from './pages.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AboutComponent,
    FaqsComponent,
    ViolationsComponent,
  ],
  exports: [
    AboutComponent,
    FaqsComponent,
    ViolationsComponent,
  ]
})
export class PagesModule { }
