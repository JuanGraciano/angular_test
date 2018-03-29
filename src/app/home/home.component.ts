import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectionStrategy  } from '@angular/core';
import { InfoBarService } from '../services/info-bar.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { Sorter } from '../services/sort.service';
import { UserItem } from '../shared/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  private users$: Observable<any[]>;

  @Input() users: UserItem[];

  constructor(private nameBar: InfoBarService, 
    // private sorter: Sorter,
    private userService: UserService) { }

  ngOnInit() {
    this.nameBar.setNameBar("listado de comentarios");
    this.users$ = this.userService.getUsers();
  }

  createUser(user) {
    console.log(user);
    this.userService.createNewUser(user);
    
  }

  // sortArray(key: string, $event: any) {
  //   if ($event) {
  //     $event.preventDefault();
  //   }
  //   this.sorter.sort(key, this.users);
  // }
}
