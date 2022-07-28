import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ListaPaisComponent } from './pais/lista-pais/lista-pais.component';
import { DetallePaisComponent } from './pais/detalle-pais/detalle-pais.component';
@NgModule({
  declarations: [AppComponent, ListaPaisComponent, DetallePaisComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
