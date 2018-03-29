import { Component, OnInit } from '@angular/core';
import { InfoBarService } from '../services/info-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  infoBar:string;

  constructor(private nameBar: InfoBarService) { 
  }

  ngOnInit() {
    this.nameBar.nameBar.subscribe((val: string) => {
      this.infoBar = val;
  });
  }

}
