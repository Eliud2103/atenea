import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';  // URL del backend

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
