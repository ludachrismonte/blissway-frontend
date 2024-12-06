import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { AboutComponent } from "./about/about.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { ViolationsComponent } from "./violations/violations.component";

import { routes } from './pages.routes';

@NgModule({
  declarations: [
    AboutComponent,
    FaqsComponent,
    ViolationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: []
})
export class PagesModule { }
