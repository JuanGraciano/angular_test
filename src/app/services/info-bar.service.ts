import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class InfoBarService {

  public nameBar: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor() { 
  }

  getNameBar(){
    return this.nameBar;
  }

  setNameBar(name:string){
    this.nameBar.next(name);
  }

}
