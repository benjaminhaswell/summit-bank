import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to the Home Page!</h1>
    <p>This is the home component.</p>
  `,
  styles: [`
    h1 {
      color: #369;
    }
  `]
})
export class HomeComponent {
  // Component logic goes here
}