import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import {WeatherComponent} from "./weather/weather.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {SideBarComponent} from "./side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <app-nav-bar/>
    <router-outlet/>
  `
  ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rest_test';
}
