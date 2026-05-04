import { Component, inject } from "@angular/core"; 
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Auth } from "../../services/auth"; 
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css' 
})
export class Login {
  loginForm: FormGroup;


  private authService = inject(Auth);
  private router = inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('¡Login exitoso!', response);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error en el login:', err);
          alert('Credenciales incorrectas o error de conexión con el servidor.');
        }
      });
    } else {
      this.loginForm.markAllAsTouched(); 
    }
  }

  isFieldInvalid(field: string) {
    const control = this.loginForm.get(field);
    return control ? control.invalid && control.touched : false;
  }
}