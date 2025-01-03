import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import {WeatherComponent} from "./weather/weather.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeatherComponent,NavBarComponent],
  template: `
    <app-nav-bar/>
    <app-weather/>

  `
  ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rest_test';
}
