import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTitle, IonLabel, IonInput, IonItem } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tercer-caso',
  templateUrl: './tercer-caso.component.html',
  styleUrls: ['./tercer-caso.component.scss'],
  standalone: true,
  imports:[IonTitle, IonLabel, IonInput,CommonModule]
})
export class TercerCasoComponent{
  constructor() { }
}
