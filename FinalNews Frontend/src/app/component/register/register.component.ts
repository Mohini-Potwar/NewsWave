import { CommonModule } from '@angular/common';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterLink, RouterLinkActive } from '@angular/router';

import { RegistrationService } from '../../registration.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,
    RouterLink,RouterLinkActive,HttpClientModule,
    RegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[RegistrationService],
})
export class RegisterComponent {
  fullName: string = '';
  emailAddress: string = '';
  userPassword: string = '';
  confirmUserPassword: string = '';
  message: string = '';

  constructor(private registrationService: RegistrationService,private httpClient:HttpClient,private router:Router) {}

  submitRegistration() {
    if (this.userPassword !== this.confirmUserPassword) {
      this.message = "Passwords do not match";
      return;
    }

    const userData = {
      name: this.fullName,
      email: this.emailAddress,
      password: this.userPassword
    };

    this.registrationService.registerUser(userData).subscribe(
      response => {
        this.message = "User registered successfully!";
        this.router.navigate(['/news']);
      },
      error => {
        this.message = "Registration failed: " + error.message;
      }
    );
  }
}