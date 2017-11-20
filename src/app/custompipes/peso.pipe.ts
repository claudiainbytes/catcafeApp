import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peso'
})
export class PesoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const peso = '$' + value;
    return peso;
  }

}
