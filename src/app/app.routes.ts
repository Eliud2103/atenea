import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login-form',
    loadComponent: () => import('./auth/login-form/login-form.page').then( m => m.LoginFormPage)
  },

  {
    path: 'user-register',
    loadComponent: () => import('./register-forms/user-register/user-register.page').then( m => m.UserRegisterPage)
  },
  {
    path: 'hospital-register',
    loadComponent: () => import('./register-forms/hospital-register/hospital-register.page').then( m => m.HospitalRegisterPage)
  },
  {
    path: 'farmacia-register',
    loadComponent: () => import('./register-forms/farmacia-register/farmacia-register.page').then( m => m.FarmaciaRegisterPage)
  },

  {
    path: 'farmacia-register2',
    loadComponent: () => import('./register-forms/farmacia-register2/farmacia-register2.page').then( m => m.FarmaciaRegister2Page)
  },
  {
    path: 'farmacia-register3',
    loadComponent: () => import('./register-forms/farmacia-register3/farmacia-register3.page').then( m => m.FarmaciaRegister3Page)
  },
  {
    path: 'hospital-register2',
    loadComponent: () => import('./register-forms/hospital-register2/hospital-register2.page').then( m => m.HospitalRegister2Page)
  },
  {
    path: 'hospital-register3',
    loadComponent: () => import('./register-forms/hospital-register3/hospital-register3.page').then( m => m.HospitalRegister3Page)
  },
];
