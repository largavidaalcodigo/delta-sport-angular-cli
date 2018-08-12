import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dataFilter'
})

export class DataFilterPipe implements PipeTransform {
  transform(items: any[], query: string, key: string): any {

    //console.log('query->' + query + ' / key->' + key);
    if (!items) {
      return [];
    }
    if (!query) {
      return items;
    }else {
      if (query) {
        return items.filter(row => {
          if (typeof row[key] === 'number'){
            return row[key] === query;
          }else{
            return row[key].toLowerCase().indexOf( query.toString() ) > -1;
          }
        });

/*             return items.filter( it => {
              return it.toLowerCase().includes(query);
            });
 */
        }
      }
        //return array;
    }
}
