import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ServiceComics } from './services/service.comics';
import { appRoutingProvider, routing } from './app.routing';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesapiComponent } from './components/cochesapi/cochesapi.component';
import { ServiceCoches } from './services/service.coches';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { SerciceEmpleados } from './services/service.empleados';
import { SelectmultipleComponent } from './components/selectmultiple/selectmultiple.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    HomeComponent,
    MenuComponent,
    PersonasapiComponent,
    CochesapiComponent,
    EmpleadosComponent,
    SelectmultipleComponent
  ],
  imports: [HttpClientModule, BrowserModule, FormsModule, routing],
  providers: [ServiceComics,ServicePersonas,ServiceCoches, SerciceEmpleados,appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
