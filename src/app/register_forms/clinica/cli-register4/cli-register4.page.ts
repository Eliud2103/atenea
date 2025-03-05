import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonRow, IonGrid, IonCol, IonButton } from '@ionic/angular/standalone';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';

@Component({
  selector: 'app-cli-register4',
  templateUrl: './cli-register4.page.html',
  styleUrls: ['./cli-register4.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonGrid, IonRow, IonInput, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,NavbarFormsComponent]
})
export class CliRegister4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
