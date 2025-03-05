import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonButton, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';

@Component({
  selector: 'app-far-register4',
  templateUrl: './far-register4.page.html',
  styleUrls: ['./far-register4.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonButton, IonInput, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarFormsComponent]
})
export class FarRegister4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
