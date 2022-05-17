import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appTextBgModificator]",
})
export class TextBgModificatorDirective {
  @Input() selectedColor: string;
  constructor() {}

  @HostBinding("style.backgroundColor") bgColor: string;

  @HostListener("mouseenter") mouseover(event: Event) {
    console.log("event", event);
    this.bgColor = "red";
  }

  @HostListener("mouseleave") mouseleave(event: Event) {
    console.log("event", event);
    this.bgColor = this.selectedColor;
  }
}
