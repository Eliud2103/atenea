import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonButton, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonButton, IonLabel, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(){

  }
}
