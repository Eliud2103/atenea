import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonButton, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Agregar ReactiveFormsModule

@Component({
  selector: 'app-hospital-register',
  templateUrl: './hospital-register.page.html',
  styleUrls: ['./hospital-register.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule  // Importar ReactiveFormsModule
  ]
})
export class HospitalRegisterPage implements OnInit {

  registerForm!: FormGroup;  // Declarar la variable para el formulario reactivo

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    // Inicializar el formulario reactivo con validadores
    this.registerForm = this.formBuilder.group({
      nombreC: ['', Validators.required],
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],  // Validar teléfono de 10 dígitos
    });
  }

  // Función para verificar si el formulario es válido antes de enviar
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario enviado', this.registerForm.value);
      // Aquí puedes redirigir a otra página si es necesario
      this.router.navigate(['/hospital-register2']);
    } else {
      console.log('Formulario no válido');
    }
  }

  // Función para verificar si el formulario es inválido y deshabilitar el botón
  isFormInvalid(): boolean {
    return !this.registerForm.valid;
  }
}
