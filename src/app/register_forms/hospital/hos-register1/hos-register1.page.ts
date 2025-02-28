import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonRow, IonCol, IonGrid } from '@ionic/angular/standalone';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';

@Component({
  selector: 'app-hos-register1',
  templateUrl: './hos-register1.page.html',
  styleUrls: ['./hos-register1.page.scss'],
  standalone: true,
  imports: [IonGrid, IonCol, IonRow, IonLabel, IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarFormsComponent]
})
export class HosRegister1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
