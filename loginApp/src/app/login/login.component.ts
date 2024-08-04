import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../authService';
import { AuthResponse } from '../services/auth-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router:Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(form.value.username, form.value.password).subscribe(
        (response: AuthResponse) => {
          console.log('Login successful', response);
          this.authService.saveToken(response.token);
          // Optionally handle user information
          console.log('User ID:', response.user.id);
          console.log('Username:', response.user.username);
          // Redirect to home page or another protected route
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.error('Login failed', error);
          // Handle login failure
        }
      );
    }
  }
}








