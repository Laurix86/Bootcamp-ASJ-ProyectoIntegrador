import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuitFormat'
})
export class CuitFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Eliminar caracteres no numéricos
    const numericValue = value.replace(/\D/g, '');

    // Formatear el CUIT con guiones
    return numericValue.replace(/(\d{2})(\d{8})(\d{1})/, '$1-$2-$3');
  }

}
