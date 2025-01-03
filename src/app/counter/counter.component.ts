import { Component } from '@angular/core';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {SideBarComponent} from "../side-bar/side-bar.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count : number = 0;
  add(){
    this.count++;
  }
  sub(){
    this.count--;
  }
  reset(){
    this.count = 0;
  }
}
