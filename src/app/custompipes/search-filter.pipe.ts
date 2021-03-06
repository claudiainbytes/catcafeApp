import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(value: any, search: string): any {
         if  (!search) {return value; }
         let solution = value.filter(v => {  
            if ( !v.name ) {return;}
           return  v.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return solution;
    }
}