/*import { Injectable } from "@angular/core";

import { User } from "../app/user";
import { USERS as MOCK_USERS } from "../../src/app/core/mocks/users.mock";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUser(userId: number) : Promise<User> {
        return new Promise((resolve) => {
            resolve(MOCK_USERS.find(u => u.id == userId));       
        });
    }

    getUserForUsername(name: string) : Promise<User> {
        return new Promise((resolve) => {
            resolve(MOCK_USERS.find(u => u.name.toLocaleLowerCase() === name.toLocaleLowerCase()));
        });
    }

    getUsers() : Promise<User[]> {
        return new Promise((resolve) => {
            resolve(MOCK_USERS);
        });
    }

    getTopUsers() : Promise<User[]> {
        return new Promise((resolve) => {
            resolve([MOCK_USERS[0], MOCK_USERS[6], MOCK_USERS[7]]);
        });
    }
}*/