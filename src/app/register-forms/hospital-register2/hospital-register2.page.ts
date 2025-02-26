import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonButton, IonCol, IonRow, IonGrid, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hospital-register2',
  templateUrl: './hospital-register2.page.html',
  styleUrls: ['./hospital-register2.page.scss'],
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
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule,
    ReactiveFormsModule // Importar ReactiveFormsModule
  ]
})
export class HospitalRegister2Page implements OnInit {

  registerForm!: FormGroup; // Declarar el formulario reactivo
  tipoHospital!: string; // Variable para el tipo de hospital

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    // Inicializar el formulario reactivo
    this.registerForm = this.formBuilder.group({
      nombreH: ['', Validators.required],
      tipoHospital: ['', Validators.required],
      licenciaS: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      direccionH: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefonoH: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario enviado', this.registerForm.value);
      // Redirigir a otra página si el formulario es válido
      this.router.navigate(['/hospital-register3']);
    } else {
      console.log('Formulario no válido');
    }
  }

  isFormInvalid(): boolean {
    return !this.registerForm.valid;
  }
}
