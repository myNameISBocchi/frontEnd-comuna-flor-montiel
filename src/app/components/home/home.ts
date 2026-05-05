import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { Person } from '../../services/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  private authService = inject(Auth);
  private router = inject(Router);

  private personService = inject(Person);

  public userData: any = null;
  public showDropdown: boolean = false;

  ngOnInit(): void {

    const saveId = localStorage.getItem('personId');
    if(saveId){
      this.loadUserProfile(saveId);
    }else{
      this.logout();
    }    
  }
  loadUserProfile(id: string) {
    this.personService.getPersonById(id).subscribe({
      next: (response) => {
        // Según tu controller, la respuesta viene en 'results'
        if (response && response.results) {
          this.userData = response.results;
          console.log('Datos del perfil cargados:', this.userData);
        }
      },
      error: (err) => {
        console.error('Error al obtener datos del perfil:', err);
      }
    });
  }


  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }
}