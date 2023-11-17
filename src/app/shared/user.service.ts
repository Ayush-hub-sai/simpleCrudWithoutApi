import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../models/user";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UserService {

    users: User[] = [
        { id: 1, name: "bishnu", phone: "45874", email: "bish@gmail.com", address: "keshpuer" }
        //    while using constructor from User.ts then then below method willl be execute
        // new User(1, "bishnu", "7845874524", "bishnu@gmail.com", "keshpur")
    ]

    getAllUser() {
        return this.users;
    }

    createUser(id: number, name: string, phone: string, email: string, address: string) {
        var data = {
            id: id,
            name: name,
            phone: phone,
            email: email,
            address: address
        }
        this.users.push(data)
        //    while using constructor from User.ts then then below method willl be execute
        // new User(id, name, phone, email, address)
    }

    updateUser(user: any) {
        this.users.forEach((item: any) => {
            if (item.id === user.id) {
                item.id = user.id
                item.name = user.name
                item.phone = user.phone
                item.email = user.email
                item.address = user.address
            }
        })
    }

    delete(user: any) {
        let findIndexValue = this.users.indexOf(user)
        this.users.splice(findIndexValue, 1)
    }

    // getDatabyServiceFromOtherComponent
    // getDetails: EventEmitter<any> = new EventEmitter<any>();

    getDetails: Subject<any> = new Subject<any>();
    getUserDetails(user: any) {
        this.getDetails.next(user);
    }
}