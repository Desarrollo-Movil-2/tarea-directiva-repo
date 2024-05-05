import { Component } from '@angular/core';
import { IonTitle,  IonButton, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-primer-caso',
  templateUrl: './primer-caso.component.html',
  styleUrls: ['./primer-caso.component.scss'],
  standalone:true,
  imports:[IonTitle,  IonButton, IonItem]
})
export class PrimerCasoComponent   {
  contador: number = 0;

  constructor() {}

  incrementarContador() {
    this.contador++;
  }
}
