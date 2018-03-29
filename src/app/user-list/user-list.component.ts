import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserItem } from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // filterText: UserItem = new UserItem();
  @Input() users;
  constructor(private userSelected: UserService) { }

  ngOnInit() {
  }

  setActualUser(user){
    this.userSelected.selectedUser(user);
  }

}
