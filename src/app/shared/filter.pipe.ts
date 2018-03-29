import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { UserItem } from './user.model';

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: UserItem[], field: UserItem): UserItem[] {

    if (!field || !items) {
      return items;
    }
    
    return items.filter((item: UserItem) =>
    this.applyFilter(item, field));
  }

  applyFilter(user: UserItem, filter: UserItem): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (user[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (user[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }

}