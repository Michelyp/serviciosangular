import { LibreriaComponent } from "./components/libreria/libreria.component";

import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { CochesapiComponent } from "./components/cochesapi/cochesapi.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";
import { SelectmultipleComponent } from "./components/selectmultiple/selectmultiple.component";
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
    {
        path:"", component:HomeComponent
    },
    {
        path:"selectmultiple", component:SelectmultipleComponent
    },
    {
        path:"comics", component:LibreriaComponent
    },
    {
        path:"personas", component:PersonasapiComponent
    },
    {
        path:"coches", component:CochesapiComponent
    },
    {
        path:"empleados/:funcion", component:EmpleadosComponent
    }
]
export const appRoutingProvider :any [] =[];
export const routing:ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);


