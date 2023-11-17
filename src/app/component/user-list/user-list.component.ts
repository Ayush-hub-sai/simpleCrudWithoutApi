import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userRecord: any = []

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userRecord = this._userService.users
  }

  getDetails(item: any) {
    this._userService.getUserDetails(item);
  }
}
