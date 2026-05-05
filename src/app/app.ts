import { Component, inject, OnInit, ChangeDetectorRef, HostListener, ElementRef } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { Auth } from './services/auth'; 
import { Person } from './services/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.html', 
  styleUrls: ['./app.css']
})
export class App implements OnInit {
 
  private authService = inject(Auth);
  private personService = inject(Person);
  public router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private eRef = inject(ElementRef);

  public userData: any = null;
  public showDropdown: boolean = false;

  
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  ngOnInit(): void {
    this.checkUserSession();
  }

  
  checkUserSession() {
    const saveId = localStorage.getItem('personId');
    if (saveId) {
      this.loadUserProfile(saveId);
    }
  }

  loadUserProfile(id: string) {
    this.personService.getPersonById(id).subscribe({
      next: (response) => {
        if (response && response.results) {
          this.userData = response.results;
          this.cdr.detectChanges(); 
          console.log('Perfil global cargado:', this.userData);
        }
      },
      error: (err) => {
        console.error('Error al cargar perfil global:', err);
      }
    });
  }
  
  shouldShowShell(): boolean {
    const hasToken = !!localStorage.getItem('personId');
    const isNotLogin = this.router.url !== '/login';
    return hasToken && isNotLogin;
  }

  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('personId');
  }

  logout() {
    this.authService.logout();
    this.userData = null;
    this.router.navigate(['/login']);
  }
}