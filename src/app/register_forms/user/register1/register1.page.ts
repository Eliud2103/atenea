import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonCol, IonGrid, IonRow, IonInput } from '@ionic/angular/standalone';
import { NavbarFormsComponent } from 'src/app/components/navbar-forms/navbar-forms.component';
import { AuthService } from 'src/app/services/auth.service';  // Importa AuthService

@Component({
  selector: 'app-register1',
  templateUrl: './register1.page.html',
  styleUrls: ['./register1.page.scss'],
  standalone: true,
  imports: [IonInput, IonRow, IonGrid, IonCol, IonLabel, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarFormsComponent]
})
export class Register1Page implements OnInit {
  // Datos del formulario
  user = {
    fullName: '',
    lastNameFather: '',
    lastNameMother: '',
    email: '',
    password: ''
  };

  // Inyectar AuthService
  constructor(private authService: AuthService) { }

  ngOnInit() { }

  // Método para registrar al usuario
  register() {
    this.authService.register(this.user).subscribe({
      next: (res) => {
        console.log('Usuario registrado:', res);
        alert('Registro exitoso');
      },
      error: (err) => {
        console.error('Error al registrar usuario:', err);
        alert('Error al registrar usuario');
      }
    });
  }
}
