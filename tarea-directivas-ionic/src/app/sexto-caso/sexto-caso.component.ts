import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTitle, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-sexto-caso',
  templateUrl: './sexto-caso.component.html',
  styleUrls: ['./sexto-caso.component.scss'],
  standalone: true,
  imports:[IonButton, IonTitle, CommonModule]
})
export class SextoCasoComponent  {
  colorButton: string='';
  constructor() {
    this.assignRandomColor();
  }
  private assignRandomColor() {
    const colors = ['primary', 'dark', 'danger'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.colorButton = colors[randomIndex];
  }
}
