import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternateCase',
})
export class AlternateCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Transformation de la chaîne
    return value
      .split('')
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join('');
  }
}
