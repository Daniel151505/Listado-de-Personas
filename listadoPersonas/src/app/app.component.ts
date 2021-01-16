import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //variable
  titulo = 'Listado de Personas';

  //arreglo
  personas: Persona[] = [];

  //llamando servicios y mandando alerta
  constructor(private loggingService:LoggingService,
              private personasService: PersonasService){
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El índice es: " + (indice + 1) )
                );
              }
// igualando arreglo con el arreglo del servicio
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

}