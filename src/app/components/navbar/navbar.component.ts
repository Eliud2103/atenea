import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonItem, IonLabel, IonList, IonMenu, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButtons,
    IonMenuButton,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonCardContent

  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
