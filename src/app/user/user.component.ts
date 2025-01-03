import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user :any
  message : any

  test : any

  // http = inject(HttpClient);
  constructor(private http: HttpClient) {

  }
  getUser() {
    // debugger
    this.http.get("http://localhost:8080/user").subscribe((res: any) => {
      this.user = res;
    })
    console.log(this.user)
  }
}
