import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  elementRef:ElementRef;

  constructor(private el:ElementRef) {
 
  this.elementRef = el;
  el.nativeElement.style.color = 'red';
  el.nativeElement.innerHTML += "hi";
   }
   ngOnInit(){
    this.elementRef.nativeElement.innerHTML += "hi";
   }

}
