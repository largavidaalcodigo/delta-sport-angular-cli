import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dataFilter'
})

export class DataFilterPipe implements PipeTransform {
    transform(items: any[], query: string, key: string): any {

      if (!items) {
        return [];
      }
      if (!query) {
        return items;
      }else {
        if (query) {
          console.log('query->' + query + ' / key->' + key);
          return items.filter(row => {
            return row[key].toLowerCase().indexOf(query) > -1;
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
