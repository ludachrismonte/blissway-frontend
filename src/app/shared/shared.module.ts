import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BodyComponent } from "./components/body/body.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchComponent } from "./components/search/search.component";

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    BodyComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SearchComponent
  ]
})
export class SharedModule { }
