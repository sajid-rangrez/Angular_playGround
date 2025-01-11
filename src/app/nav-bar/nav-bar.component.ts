import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styles: ''
})
export class NavBarComponent {
  appName: string = `My App`;
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
