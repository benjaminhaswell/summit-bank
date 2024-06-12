import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-navbar',
    template: `
    
    <nav>
      <ul>
        <li><a routerLink="/home">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/contact">Contact</a></li>
      </ul>
    </nav>
  `,
    styles: [`
    nav {
      background-color: red;
      color: #fff;
      padding: 10px;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: inline;
      margin-right: 10px;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  `]
})
export class NavbarComponent {
}