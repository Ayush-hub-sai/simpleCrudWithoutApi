import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  record: any

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    this._userService.getDetails.subscribe((data: any) => {
      this.record = data;
    });
  }


}
