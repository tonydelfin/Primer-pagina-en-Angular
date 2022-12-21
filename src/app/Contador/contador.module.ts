import {NgModule} from '@angular/core'
import { ListadoComponent } from '../Heroes/listado/listado.component';
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],

    imports:[
        CommonModule        
    ]

})

export class ContadorModule{}