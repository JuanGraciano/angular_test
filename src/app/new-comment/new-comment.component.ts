import { Component, OnInit } from '@angular/core';
import { InfoBarService } from '../services/info-bar.service';
import { UserItem } from '../shared/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  constructor(private nameBar: InfoBarService,
    private userService: UserService) { }

  ngOnInit() {
    this.nameBar.setNameBar("Creacion de comentarios");
  }

  createUser(nombre, email, websitem, comentario) {
    this.userService.createNewUser(new UserItem(this.userService.getCantUser() + 1,  nombre, email, websitem, comentario));
  }

}
