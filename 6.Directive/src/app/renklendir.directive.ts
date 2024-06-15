import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class RenklendirDirective {

  //@Input("renklendir") color: string | undefined;
  //@Input("test") name: string | undefined;

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") method1(){
    //console.log(this.color);
   // console.log(this.name);
    
    this.el.nativeElement.style = "color:red";
    //this.el.nativeElement.innerHTML = this.name;
    //console.log("Mouse elementin üzerine geldi");    
  }

  @HostListener("mouseleave") method2(){
    this.el.nativeElement.style = "color:black";
    //console.log("Mouse elementin üzerinden ayrıldı");    
  }

}
