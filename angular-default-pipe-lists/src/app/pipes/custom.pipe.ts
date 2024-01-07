import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, a:number, b:number): any {
    const message = "Belirtilen aralıktaki karakterler kesilir.";
    const parca = value.slice(a,b);
    return  message + " " + parca;
  }

}
