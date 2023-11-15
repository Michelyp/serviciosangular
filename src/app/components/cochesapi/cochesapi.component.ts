import { Component, OnInit } from '@angular/core';
import { Coches } from 'src/app/models/coches';
import { ServiceCoches } from 'src/app/services/service.coches';

@Component({
  selector: 'app-cochesapi',
  templateUrl: './cochesapi.component.html',
  styleUrls: ['./cochesapi.component.css']
})
export class CochesapiComponent implements OnInit{

  public coches!: Array<Coches>;
  constructor(private _serviceCoches:ServiceCoches){}

  ngOnInit(): void {
    this._serviceCoches.getCoches().subscribe(response =>{
      this.coches = response;
    })
  }
}
