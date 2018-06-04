import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){

  }

  transform(value: string): any {

    let url: string ='https://www.youtube.com/embed/';

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
