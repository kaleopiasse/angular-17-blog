import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { HomeContentComponent } from './components/home-content/home-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeContentComponent, HomeTitleComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-blog';
}
