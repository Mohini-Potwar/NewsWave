import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/login'; // Spring Boot endpoint

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    const loginData = { email, password };

    return this.http.post<{ success: boolean }>(this.loginUrl, loginData).pipe(
      map(response => response.success),
      catchError(() => of(false)) // Return false on error
    );
  }
}