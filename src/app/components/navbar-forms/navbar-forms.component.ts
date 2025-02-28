import { Component, OnInit } from '@angular/core';
import {  IonHeader } from '@ionic/angular/standalone';
@Component({
  selector: 'app-navbar-forms',
  imports:[IonHeader],
  templateUrl: './navbar-forms.component.html',
  styleUrls: ['./navbar-forms.component.scss'],
})
export class NavbarFormsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
