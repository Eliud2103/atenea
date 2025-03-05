import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonCol, IonGrid, IonRow, IonLabel } from '@ionic/angular/standalone';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';

@Component({
  selector: 'app-hos-register3',
  templateUrl: './hos-register3.page.html',
  styleUrls: ['./hos-register3.page.scss'],
  standalone: true,
  imports: [IonLabel, IonRow, IonGrid, IonCol, IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarFormsComponent]
})
export class HosRegister3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
