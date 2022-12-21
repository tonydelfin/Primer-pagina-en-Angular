import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()


export class DbzService{

    private _personaje: Personaje[] = [
        {
          nombre: "Goku",
          poder: 11545
        },
    
        {
          nombre: "Vegeta",
          poder: 444
        }
      ];

    get personajes():Personaje[] {
        return [...this._personaje];
    }

    constructor(){}

    agreagarPersonaje(personaje:Personaje){
        this._personaje.push(personaje);
    }

}