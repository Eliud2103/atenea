import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';

@Component({
  selector: 'app-lab-register3',
  templateUrl: './lab-register3.page.html',
  styleUrls: ['./lab-register3.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonLabel, IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarFormsComponent]
})
export class LabRegister3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
