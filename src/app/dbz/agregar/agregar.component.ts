import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {

  @Input() nuevo :Personaje ={
    nombre: "",
    poder: 0,
  }

  // @Output() onNuevoPerosanaje: EventEmitter<Personaje> = new EventEmitter();

   constructor(private dbzService: DbzService){}
   

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return ;}

    // this.onNuevoPerosanaje.emit(this.nuevo);

    this.dbzService.agreagarPersonaje(this.nuevo);    

    this.nuevo = {
      nombre: "", 
      poder: 0, 
    }
    
  }

}
