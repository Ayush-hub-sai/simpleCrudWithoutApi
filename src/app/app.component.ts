import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crudWithSimple';
  userRecord: any = []
  id: number = 0
  name: string = ''
  phone: string = ''
  email: string = ''
  address: string = ''
  editRecord: boolean = false
  userId: number = 0
  searchQuery = ''
  staticUser: any = []

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userRecord = this._userService.users
    this.staticUser = this._userService.users
    this.id = this.userRecord[0].id
  }

  search() {
    if (this.searchQuery === '') {
      this.userRecord = this.staticUser;
    } else {
      this.userRecord = this.staticUser.filter((user: any) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  enterAllField() {
    if (this.name == '' || this.phone == '' || this.email == '' || this.address == '') {
      alert("Enter all field")
      return
    }
  }

  resetForm() {
    this.name = ''
    this.phone = ''
    this.email = ''
    this.address = ''
  }

  addUser() {
    this.enterAllField()
    this.id = this.id + 1
    this._userService.createUser(this.id, this.name, this.phone, this.email, this.address)
    this.resetForm()
  }

  editUser(item: any) {
    this.editRecord = true
    this.userId = item.id
    this.name = item.name
    this.phone = item.phone
    this.email = item.email
    this.address = item.address
  }

  updateRecord() {
    this.enterAllField()
    let user = {
      id: this.userId,
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address
    }

    this._userService.updateUser(user)
    this.editRecord = false
    this.resetForm()
  }

  cancel() {
    this.editRecord = false
    this.resetForm()
  }

  deleteUSer(item: any) {
    this._userService.delete(item)
    this.resetForm()
  }

}
