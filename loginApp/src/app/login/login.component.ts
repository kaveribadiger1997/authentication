import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { AuthService } from '../authService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginRequest: LoginRequest = {
    username: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginRequest: LoginRequest = {
        username: form.value.username,
        password: form.value.password
      };

      this.authService.login(loginRequest).subscribe(
        (response: LoginResponse) => {
          console.log('Login successful', response);
          this.authService.saveToken(response.token);
          // Redirect to home page or another protected route
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid username or password. Please try again.'; // Set the error message
          // Handle login failure
        }
      );
    }
  }
}








