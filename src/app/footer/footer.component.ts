import { Component, OnInit } from '@angular/core';
import { InfoBarService } from '../services/info-bar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(private nameBar: InfoBarService) { 
  }

  ngOnInit() {
    this.nameBar.setNameBar("footer");
  }


}
