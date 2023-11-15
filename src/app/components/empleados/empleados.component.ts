import { Component } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { SerciceEmpleados } from 'src/app/services/service.empleados';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  public empleados!: Array<Plantilla>;
  constructor(private _servicePlantilla:SerciceEmpleados, private _activeRoutes:ActivatedRoute ){};

  ngOnInit():void{
    this._activeRoutes.params.subscribe((params:Params)=> {
      if(params['funcion']){
        var funcion = params['funcion'];
        this._servicePlantilla.getEmpleadosFuncion(funcion).subscribe(response =>{
          this.empleados = response;
        })
      }
    })
  }
}
