import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email = '';
  password = '';
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.email, this.password).subscribe({
      next: () => {
        this.successMessage = 'Registration successful! You can now log in.';
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Registration failed';
        this.successMessage = '';
      },
    });
  }
}
