import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Funciones } from 'src/app/models/funciones';
import { SerciceEmpleados } from 'src/app/services/service.empleados';
import { Plantilla } from 'src/app/models/plantilla';


@Component({
  selector: 'app-selectmultiple',
  templateUrl: './selectmultiple.component.html',
  styleUrls: ['./selectmultiple.component.css']
})
export class SelectmultipleComponent implements OnInit {
  public funciones!: Array<string>;
  public empleados!: Array<Plantilla>;
  @ViewChild("cajaseleccionado") cajaseleccionadoRef!:ElementRef;
  constructor(private _servicePlantilla:SerciceEmpleados){}
  ngOnInit():void{
    this._servicePlantilla.getFuncionesPlantilla().subscribe(response=>{
      console.log(response);
      this.funciones = response;
    })
  }
  mostrarEmpleados():void{
    this._servicePlantilla.getEmpleadosFunciones(this.funciones).subscribe(response=>{
      console.log(response);
       this.empleados=response;
      
    })
  }

}
