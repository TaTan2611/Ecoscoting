import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-lista-pais',
  templateUrl: './lista-pais.component.html',
  styleUrls: ['./lista-pais.component.css']
})
export class ListaPaisComponent implements OnInit {

  paises: Pais[] = [];

  constructor(
    private paisService: PaisService,
    
    ) { }

  ngOnInit() {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.paisService.lista().subscribe(
      data => {
        this.paises = data;
        console.log(data)
      },
      err => {
        console.log(err);
      }
    );
  }


  }
