import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ["Hulk", "Batman", "SpiderMan", "BlacWidow", "Gaku"];
  HeroeBorrado: string = "";
  
  borrarHeore(){
    this.HeroeBorrado = this.heroes.shift() || "";

    
  }


}
