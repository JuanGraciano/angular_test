import { Component, OnInit } from '@angular/core';
import { InfoBarService } from '../services/info-bar.service';
import { UserService } from '../services/user.service';
import { UserItem } from '../shared/user.model';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  private user:UserItem;

  constructor(private nameBar: InfoBarService, 
    private userService:UserService) 
    {
      this.user = userService.getActualUser();
    }

  ngOnInit() {
    this.nameBar.setNameBar("Edicion de comentarios");
  }

  updateUser(user){
    this.user.nombre = user.nombre;
    this.user.email = user.email;
    this.user.website = user.website;
    this.user.comentario = user.comentario;
    this.userService.updateUser(this.user);
  }

}
