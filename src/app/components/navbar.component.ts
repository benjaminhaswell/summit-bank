import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a class="logo" routerLink="/">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="50" height="50" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" viewBox="0 0 6.827 6.827"><defs><style>.fil1{fill:#fffffe;fill-rule:nonzero}</style></defs><path style="fill:#0043C6" d="M0 0h6.827v6.827H0z"/><g id="Layer_x0020_1"><path class="fil1" d="M3.9 2.505 2.696 4.907h3.062l-.946-1.778-.272.258a.107.107 0 0 1-.171-.035L3.9 2.505zm-1.472 2.46L3.796 2.24a.107.107 0 0 1 .193-.013l-.094.051.093-.05.505.912.266-.252a.106.106 0 0 1 .176.02l1.09 2.048a.107.107 0 0 1-.09.165h-3.41a.107.107 0 0 1-.097-.154z"/><path class="fil1" d="M3.227 3.387a.106.106 0 0 0 .149.151L3.62 3.3l.071.113.09-.057-.09.057a.107.107 0 0 0 .173.01l.144-.157.096.158a.107.107 0 0 0 .182 0l.159-.21a.106.106 0 0 0-.17-.128l-.07.093-.088-.141a.107.107 0 0 0-.171-.02l-.15.163-.064-.102a.107.107 0 0 0-.168-.023l.075.076-.075-.075-.337.33zM2.717 3.512a.106.106 0 0 0 .149-.152l-.205-.2-.074.076.074-.076a.107.107 0 0 0-.167.023l-.057.09-.136-.149a.107.107 0 0 0-.172.02l-.067.109-.065-.111a.106.106 0 0 0-.184.108l.153.257a.107.107 0 0 0 .186.007l.087-.142.13.142a.106.106 0 0 0 .174-.01l-.09-.057.09.057.063-.1.11.108z"/><path class="fil1" d="M1.996 3.252a.107.107 0 0 0-.182-.112l-.08.13-.061-.082a.106.106 0 0 0-.17.128l.15.199a.107.107 0 0 0 .182 0l.16-.263z"/><path class="fil1" d="M3.004 3.906a.106.106 0 0 0 .19-.095l-.91-1.813-.094.048.095-.048a.107.107 0 0 0-.195.009L.797 4.587v-.001a.107.107 0 0 0 .097.154h1.811a.107.107 0 0 0 0-.213h-1.64L2.19 2.283l.814 1.623z"/><path style="fill:none" d="M0 0h6.827v6.827H0z"/></g></svg>
        <span>Summit Bank</span>
      </a>

      <ul class="nav-links">
        <li><a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a></li>
        <li><a routerLink="/about"  routerLinkActive="active" ariaCurrentWhenActive="page">About</a></li>
        <li><a routerLink="/contact">Community</a></li>
        <li><a routerLink="/contact">Blog</a></li>
        <li><a routerLink="/contact" class="register"><span style="color: white;">Register Now &#8594;</span></a></li>
      </ul>
      <div class="menu-toggle" (click)="toggleMenu()">
        &#9776;
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      background-color: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 75px;
      color: #black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    }

    .logo {
      display: flex;
      color: #424242;
      align-items: center;
      gap: 10px;
      font-size: 1.5em;
      padding : 0 20px;
      font-weight: bold;
      white-space: nowrap;
      text-decoration: none;
    }

    .nav-links {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0 40px;
    }

    .nav-links li {
      margin-left: 20px;
    }

    .nav-links a {
      color: black;
      text-decoration: none;
      font-size: 1em;
    }

    .menu-toggle {
      display: none;
      font-size: 1.5em;
      cursor: pointer;
      padding : 0 20px;
    }

    @media (max-width: 800px) {
      .nav-links {
        display: none;
        position: absolute;
        top: 65px;
        left: 0;
        width: 90vw;
        padding-bottom: 20px;
        background-color: white;
        flex-direction: column;
        align-items: center;
      }

      .nav-links li {
        margin: 10px 0;
      }

      .nav-links.active {
        display: flex;
      }

      .menu-toggle {
        display: block;
      }
    }
  `]
})
export class NavbarComponent {
  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('active');
    }
  }
}
