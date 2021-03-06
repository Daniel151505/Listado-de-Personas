import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  //Variables
  nombreInput: string='';
  apellidoInput: string='';  

  //llamando servicios
  constructor(private loggingService:LoggingService,
    private personaService:PersonasService){}

  //Metodo Agregar Persona
  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaService.agregarPersona(persona1);
  }

}