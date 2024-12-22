import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8080/api/register'; // Replace with your Spring Boot API endpoint

  constructor(private http: HttpClient) {}

  registerUser(userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
