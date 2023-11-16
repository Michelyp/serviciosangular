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
  public funcionesSeleccionadas!: Array<string>;
  @ViewChild("cajaseleccionado") cajaseleccionadoRef!:ElementRef;
  constructor(private _servicePlantilla:SerciceEmpleados){}
  ngOnInit():void{
    this._servicePlantilla.getFuncionesPlantilla().subscribe(response=>{
      console.log(response);
      this.funciones = response;
    })
  }


  mostrarEmpleados():void{
    console.log("sdsd");
    this.funcionesSeleccionadas = new Array<string>;
    for(var options of this.cajaseleccionadoRef.nativeElement.options){
      if(options.selected == true){
        this.funcionesSeleccionadas.push(options.value);
      
      }
    }
    console.log(this.funcionesSeleccionadas);
    
    this._servicePlantilla.getEmpleadosFunciones(this.funcionesSeleccionadas).subscribe(response=>{
      console.log(response);
       this.empleados=response;
      
    })
  }

 


}
