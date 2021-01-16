import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { PersonasService } from './persona.service';
import { LoggingService } from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggingService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
