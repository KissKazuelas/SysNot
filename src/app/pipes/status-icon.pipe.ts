import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(value: boolean , ...args: unknown[]): unknown {
    return (value) ? 'Activo' : 'Inactivo';
  }

}
