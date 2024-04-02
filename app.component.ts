import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterOutlet, RouterLink, Router} from "@angular/router";
//import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
//import { RouterOutlet } from '@angular/router';
import { ElementRef } from '@angular/core';

//import '../assets/js/slideshow.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet,RouterLink],
  styleUrl: './app.component.css',

})

export class AppComponent {
  title="Npa";
  
  constructor(private elementRef: ElementRef, private router: Router) {}


  scrollToAbout() {
      const aboutSection = this.elementRef.nativeElement.querySelector('#aboutSection');
      if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
}
  }

  goToApplicant() {
    console.log('Метод goToServices() вызван');
    this.router.navigate(["/applicant"]);
  }
}
import { HostListener } from '@angular/core';

  

