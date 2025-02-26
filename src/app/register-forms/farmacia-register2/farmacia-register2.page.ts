import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonButton, IonCol, IonRow, IonGrid, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-farmacia-register2',
  templateUrl: './farmacia-register2.page.html',
  styleUrls: ['./farmacia-register2.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
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
export class FarmaciaRegister2Page implements OnInit {

  registerForm!: FormGroup;  // Declarar el formulario reactivo

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    // Inicializar el formulario reactivo con validaciones
    this.registerForm = this.formBuilder.group({
      nombreFarmacia: ['', Validators.required],
      tipoFarmacia: ['', Validators.required],
      licenciaSanitaria: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], // Licencia con 10 dígitos
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],  // Teléfono con 10 dígitos
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
      this.router.navigate(['/farmacia-register3']);  // Redirigir a la siguiente página
    } else {
      console.log('Formulario no válido');
    }
  }
}
