import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {SideBarComponent} from "../side-bar/side-bar.component";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    FormsModule, NavBarComponent, SideBarComponent
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  weather: any
  search: string = ""
  API_KEY = "76d4ba503c462475078304a49132a939"

  private http = inject(HttpClient); // Use inject API for HttpClient

  getWeather() {
    if (!this.search) {
      alert('Please enter a location');
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.search}&appid=${this.API_KEY}&units=metric`;
    this.http.get(url).subscribe(
      (data: any) => {
        this.weather = data; // Store the API response
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
