import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './mock-data';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserItem } from '../shared/user.model';


@Injectable()
export class UserService {

  private usersSubject = new BehaviorSubject([]);
  private users: UserItem[];
  private actualUser: UserItem;

  constructor() {
    this.loadDummyData();
  }

  getUsers(): Observable<UserItem[]>{
    return this.usersSubject;
  }

  private refresh(){
    this.usersSubject.next(this.users);
  }

  websiteValidation(website:string): string{
    if(!website){
      website = "N/D";
    }
    return website
  }
  createNewUser(user: UserItem){
    user.website = this.websiteValidation(user.website);
    this.users = [...this.users, user];
    this.refresh();
  }

  loadDummyData(){
    this.users = CHARACTERS;
    this.refresh();
  }

  getCantUser(): number{
    return this.users.length;
  }
  
  selectedUser(index:UserItem){
    this.actualUser = index;
  }

  getActualUser():UserItem{
    return this.actualUser;
  }

  updateUser(user){
    user.website = this.websiteValidation(user.website);
    console.log(user.id.toString());
    console.log(user);
    this.users[user.id.toString()]
    this.refresh();
  }

}
