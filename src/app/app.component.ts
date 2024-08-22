import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive , ContainerComponent, NavComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my 1st project with angular';
  message = "This is my first Angular App .I am excited to learn more about it"
  // date = new Date();

// constructor(){
//   console.log("C Called");
//   this.doSomething('priyanshu')
// }

// doSomething(val:string):void {
//   val = "exhaust";
// }

}
