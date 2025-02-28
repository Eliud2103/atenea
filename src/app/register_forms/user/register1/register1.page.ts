import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonCol, IonGrid, IonRow, IonInput } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
  standalone: true,
  imports: [IonInput, IonRow, IonGrid, IonCol, IonLabel, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarFormsComponent]
})
export class Register1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
