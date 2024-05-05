import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTitle, IonLabel, IonInput, IonItem } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tercer-caso',
  templateUrl: './tercer-caso.component.html',
  styleUrls: ['./tercer-caso.component.scss'],
  standalone: true,
  imports:[IonTitle, IonLabel,IonItem, IonInput,CommonModule,FormsModule]
})
export class TercerCasoComponent{
  phoneNumber: string = '';
  constructor() { }
  checkNumber(event: KeyboardEvent) {
    const pattern = /[0-9]/; 
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }
}
