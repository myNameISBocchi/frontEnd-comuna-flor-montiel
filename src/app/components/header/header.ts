import { Component } from '@angular/core';

import { Router, RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  
  constructor(private router: Router) {}

  logout() {
  console.log("Destruyendo sesión de Alfonso...");
  
 
  localStorage.clear(); 
  sessionStorage.clear();

  
  this.router.navigate(['/login'], { replaceUrl: true });
}
}