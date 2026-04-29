import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router'; 
import { HeaderComponent } from './components/header/header';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  constructor(public router: Router) {} 
}