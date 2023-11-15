import { Component, OnInit } from '@angular/core';
import { Funciones } from 'src/app/models/funciones';
import { SerciceEmpleados } from 'src/app/services/service.empleados';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public funciones!: Array<Funciones>;
  constructor(private _servicePlantilla:SerciceEmpleados){}
  ngOnInit():void{
    this._servicePlantilla.getFuncionesPlantilla().subscribe(response=>{
      console.log(response);
      
      this.funciones = response;
    })
  }
}
