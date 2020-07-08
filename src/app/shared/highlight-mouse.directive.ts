import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background',
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background',
    //   'white'
    // );
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor() {
    //Codigo extra
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor() {} // private _renderer: Renderer2 // private _elementRef: ElementRef,
}
