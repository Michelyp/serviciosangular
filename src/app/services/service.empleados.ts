import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable()
export class SerciceEmpleados{
    constructor(private _http:HttpClient){
    }
        getFuncionesPlantilla():Observable<any>{
        var request= "/api/plantilla/funciones";
        var url = environment.urlApiPlantilla + request;
            
        return this._http.get(url);
    }

    getEmpleadosFuncion(funcion:string):Observable<any>{
        var request="/api/Plantilla/PlantillaFuncion/" +funcion;
        var url = environment.urlApiPlantilla +request;
        return this._http.get(url);
    }
    getEmpleadosFunciones(funciones:Array<string>):Observable<any>{
        var cadena = funciones.join("&funcion=");
        var request="/api/Plantilla/PlantillaFunciones?funcion="+ cadena;
        var url = environment.urlApiPlantilla +request;
        console.log(url);
        console.log(request);
        
        
        return this._http.get(url);
    }

}