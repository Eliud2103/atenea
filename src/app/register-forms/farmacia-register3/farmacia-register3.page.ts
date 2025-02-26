import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonCol, IonGrid, IonRow, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-farmacia-register3',
  templateUrl: './farmacia-register3.page.html',
  styleUrls: ['./farmacia-register3.page.scss'],
  standalone: true,
  imports: [
    IonTextarea,
    IonRow,
    IonGrid,
    IonCol,
    IonLabel,
    IonInput,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FarmaciaRegister3Page implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      descripcionF: ['', [Validators.required, Validators.minLength(10)]],  // Validación: mínimo 10 caracteres
    });
  }

  registerFarmacia() {
    if (this.registerForm.valid) {
      console.log('Farmacia registrada:', this.registerForm.value);
      // Aquí puedes hacer la lógica para guardar la información
    } else {
      console.log('Formulario no válido');
    }
  }

  isFormInvalid(): boolean {
    return !this.registerForm.valid;
  }
}
