import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router'; // 1. Añadimos RouterModule
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule], // 2. Lo agregamos aquí también
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private authService = inject(Auth);
  private router = inject(Router);

  // Esta es la función que ya tienes y que sí funciona con tu backend
  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }
}