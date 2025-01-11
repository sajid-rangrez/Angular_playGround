import { Routes } from '@angular/router';
import {WeatherComponent} from "./weather/weather.component";
import {CounterComponent} from "./counter/counter.component";
import {TodoComponent} from "./todo/todo.component";

export const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'todo', component: TodoComponent }
];
