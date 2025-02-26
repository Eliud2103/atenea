import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonButton, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonLabel,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class UserRegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombreC: ['', Validators.required],
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerUser() {
    if (this.registerForm.valid) {
      console.log('Formulario enviado', this.registerForm.value);
      // Redirigir a la siguiente página después del registro
      this.router.navigate(['/next-page']);
    } else {
      console.log('Formulario no válido');
    }
  }

  isFormInvalid(): boolean {
    return !this.registerForm.valid;
  }
}
