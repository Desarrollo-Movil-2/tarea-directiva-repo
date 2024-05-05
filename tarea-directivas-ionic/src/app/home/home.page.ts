import { Component } from '@angular/core';
import { PrimerCasoComponent } from '../primer-caso/primer-caso.component';
import { SegundoCasoComponent } from '../segundo-caso/segundo-caso.component';
import { TercerCasoComponent } from '../tercer-caso/tercer-caso.component';
import { CuartoCasoComponent } from '../cuarto-caso/cuarto-caso.component';
import { QuintoCasoComponent } from '../quinto-caso/quinto-caso.component';
import { SextoCasoComponent } from '../sexto-caso/sexto-caso.component';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,PrimerCasoComponent,SegundoCasoComponent,TercerCasoComponent,CuartoCasoComponent,QuintoCasoComponent,SextoCasoComponent],
})
export class HomePage {
  constructor() {}
}
