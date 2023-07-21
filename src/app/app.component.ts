import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    SidebarComponent,
    RouterModule
  ],
  template: `
  <main>
    <div class="header">
      <a [routerLink]="['/']">
        <header class="title">
           Eric's Task Organizer
        </header>
      </a>
      <a [routerLink]="['/login']">
        <p>
          Log In/Sign Up
        </p>
      </a>
    </div>
    <section class="nav">
      <app-sidebar></app-sidebar>
    </section>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fuck';
}
