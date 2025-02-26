import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonCol, IonGrid, IonRow, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hospital-register3',
  templateUrl: './hospital-register3.page.html',
  styleUrls: ['./hospital-register3.page.scss'],
  standalone: true,
  imports: [
    IonTextarea, IonRow, IonGrid, IonCol, IonLabel, IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule
  ]
})
export class HospitalRegister3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerHospital() {
    // Aquí puedes agregar la lógica para el registro del hospital
  }
}
