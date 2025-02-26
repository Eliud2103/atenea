import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-farmacia-register',
  templateUrl: './farmacia-register.page.html',
  styleUrls: ['./farmacia-register.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonButton,
    IonLabel,
    IonInput,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule  // Importar ReactiveFormsModule para formularios reactivos
  ]
})
export class FarmaciaRegisterPage implements OnInit {

  registerForm!: FormGroup;  // Declarar el formulario reactivo

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    // Inicializar el formulario reactivo con validaciones
    this.registerForm = this.formBuilder.group({
      nombreFarmacia: ['', Validators.required],
      propietario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],  // Validación para un número de 10 dígitos
    });
  }

  // Verifica si el formulario es inválido para deshabilitar el botón
  isFormInvalid(): boolean {
    return !this.registerForm.valid;
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario enviado', this.registerForm.value);
      this.router.navigate(['/farmacia-register2']);  // Redirigir a la siguiente página
    } else {
      console.log('Formulario no válido');
    }
  }
}
