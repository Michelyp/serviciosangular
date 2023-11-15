import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//Necesitamos devolver objetos observable
//dicha librería esta dentro de rxjs
import { Observable } from "rxjs";
import { Global } from "../global";
import { environment } from "src/environments/environment.development";

@Injectable()
export class ServicePersonas{
    //En el constructor debemos de recibir el objeto HttpClient para realizar las peticiones HTTP
    constructor(private _http:HttpClient){}

    getPersonasPromesa():Promise<any>{
        var request="/api/personas/";
        var url=environment.urlApiPersonas + request;
        let promise = new Promise ((resolve)=>{
            this._http.get(url).subscribe((response)=>{
                resolve(response);
            })
        })
        return promise;
    }
    //Los metods get devolveran un observable
    getPersonas(): Observable<any>{
        var urlApiPersonas="https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        //tenemos deos formas de trabajar con los servicios y sus promesas
        //1. al gual que en vue, crear una promesa aquí en este método 
        //2. Devolver los datos que extraemos de dicha promesa
        //3.devolver directamente la promesa para que el componente se subscriba
        return this._http.get(urlApiPersonas);
    }

}