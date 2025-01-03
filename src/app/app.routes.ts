import { Routes } from '@angular/router';
import {WeatherComponent} from "./weather/weather.component";
import {CounterComponent} from "./counter/counter.component";

export const routes: Routes = [
  { path: 'weather',
  component: WeatherComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  }
];
