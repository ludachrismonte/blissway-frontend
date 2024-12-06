import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SearchComponent } from "./components/search/search.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule { }
