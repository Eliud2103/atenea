import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonCol, IonRow, IonGrid, IonButton } from '@ionic/angular/standalone';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';

@Component({
  selector: 'app-hos-register2',
  templateUrl: './hos-register2.page.html',
  styleUrls: ['./hos-register2.page.scss'],
  standalone: true,
  imports: [IonButton, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarFormsComponent]
})
export class HosRegister2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
