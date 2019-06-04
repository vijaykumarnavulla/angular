import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'myUnsafe'
})
export class MyUnsafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  public transform(url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
