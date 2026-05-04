import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private authService = inject(Auth);
  private router = inject(Router);


  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }
}