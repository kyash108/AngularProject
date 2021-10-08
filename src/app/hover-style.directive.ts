import { Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input() fontWeight?: string;
  @Input() borderColor?: string;

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') hover() {
    this.hoverEffect(this.borderColor, this.fontWeight);
  }
  @HostListener('mouseleave') hoverAway() {
    this.hoverAwayEffect(this.borderColor, this.fontWeight);
  }

  hoverEffect(underLine?: string, bold?: string) {
    if (underLine) {
      this.elm.nativeElement.style.borderBottom = `5px solid ${underLine}`;
    }
    if (bold) {
      this.elm.nativeElement.style.fontWeight = bold;
    }
  }
  hoverAwayEffect(underLine?: string, bold?: string) {
    if (underLine) {
      this.elm.nativeElement.style.borderBottom = '';
    }
    if (bold) {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }

}
