import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonLabel, IonTitle, IonItem, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cuarto-caso',
  templateUrl: './cuarto-caso.component.html',
  styleUrls: ['./cuarto-caso.component.scss'],
  standalone: true,
  imports: [IonLabel, IonTitle, IonItem, IonContent, FormsModule, CommonModule]
})
export class CuartoCasoComponent {
  calificacion: number = Math.floor(Math.random() * 101);

  constructor() {}
}
