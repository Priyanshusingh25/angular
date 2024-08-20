import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
