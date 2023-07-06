import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { HeroComponent } from './Componentes/hero/hero.component';
import { BiographyComponent } from './Componentes/biography/biography.component';
import { GralgalleryComponent } from './Componentes/gralgallery/gralgallery.component';
import { SeriesComponent } from './Componentes/series/series.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { CopyrigthComponent } from './Componentes/copyrigth/copyrigth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    BiographyComponent,
    GralgalleryComponent,
    SeriesComponent,
    ContactComponent,
    CopyrigthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
