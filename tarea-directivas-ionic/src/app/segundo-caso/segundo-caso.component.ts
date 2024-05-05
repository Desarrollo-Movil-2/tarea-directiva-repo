import { Component } from '@angular/core';
import { IonTitle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-segundo-caso',
  templateUrl: './segundo-caso.component.html',
  styleUrls: ['./segundo-caso.component.scss'],
  standalone: true,
  imports: [IonTitle, IonContent, IonList, IonItem]
})
export class SegundoCasoComponent {
  animals: string[] = ['León', 'Tigre', 'Elefante', 'Jirafa', 'Cebra'];
  constructor() {}
}
