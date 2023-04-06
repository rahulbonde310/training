import { Directive,  ElementRef,  HostListener, Renderer2 } from '@angular/core';
import { bindCallback } from 'rxjs';

@Directive({
  selector: '[appHightlight]'
})

export class HightlightDirective {

  constructor(private render:Renderer2, private el:ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.textColorChange('red')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.textLeaveColor('blue')
  }

  textColorChange(textColor:any){
    this.render.setStyle(this.el.nativeElement, 'color', textColor)
  }

  textLeaveColor(abccolor:any){
    this.render.setStyle(this.el.nativeElement, 'color', abccolor)
  }


  
}




