import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";

import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes, { useHash: true }),
    PagesModule,
    SharedModule
  ],
})
export class AppModule { }