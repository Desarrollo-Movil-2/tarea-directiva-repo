import { Component} from '@angular/core';
import { IonTitle, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quinto-caso',
  templateUrl: './quinto-caso.component.html',
  styleUrls: ['./quinto-caso.component.scss'],
  standalone: true,
  imports:[ IonTitle, IonLabel,CommonModule ]
})
export class QuintoCasoComponent {
  textColor: string = '#2aff2b';
  constructor() { }
}
