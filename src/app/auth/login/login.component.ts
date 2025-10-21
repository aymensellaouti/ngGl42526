import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CredentialsDto } from '../dto/credentials.dto';
import { ROUTES, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastr = inject(ToastrService);

  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        // Todo : migrate to service
        localStorage.setItem('token', response.id);
        this.toastr.success(`Bienvenu chez vous :)`);
        this.router.navigate(['cv']);
      },
      error: (error) => {
        this.toastr.error('Veuillez vérifier vos credentials');
      },
    });
  }
}
