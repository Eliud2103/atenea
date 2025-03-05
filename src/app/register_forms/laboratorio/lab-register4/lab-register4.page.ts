import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonCol, IonRow, IonGrid, IonLabel } from '@ionic/angular/standalone';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';

@Component({
  selector: 'app-lab-register4',
  templateUrl: './lab-register4.page.html',
  styleUrls: ['./lab-register4.page.scss'],
  standalone: true,
  imports: [IonLabel, IonGrid, IonRow, IonCol, IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarFormsComponent]
})
export class LabRegister4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
