import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,LoginComponent,
    RouterLink,RouterLinkActive,HttpClientModule,LoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService]
})
export class LoginComponent {
  emailAddress: string = '';
  userPassword: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  submitLogin() {
    this.authService.login(this.emailAddress, this.userPassword).subscribe(
      response => {
        if (response) {
          // Navigate to the dashboard or desired route after login success
          this.router.navigate(['/news']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      error => {
        this.errorMessage = 'Login failed. Please try again.';
      }
    );
  }
}
