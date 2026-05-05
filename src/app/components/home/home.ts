import { Component, inject, OnInit, ChangeDetectorRef, HostListener, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { Person } from '../../services/person';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  private authService = inject(Auth);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private eRef = inject(ElementRef);

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
        if (response && response.results) {
          this.userData = response.results;
          this.cdr.detectChanges();
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