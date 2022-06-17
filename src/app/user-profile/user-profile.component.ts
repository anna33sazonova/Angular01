import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    lastName : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',

  };

value: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  isShow = false;
  toggleDisplay() {
    this.isShow = !this.isShow
    
    }

}
