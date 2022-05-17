import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appPhoneFormat]",
})
export class PhoneFormatDirective {
  constructor(private el: ElementRef) {}

  // @ts-ignore
  @HostListener("keyup", ["$event"]) onKeyUp(event: any) {
    const initalValue = this.el.nativeElement.value;
    const key = event.keyCode || event.charCode;
    if (key === 8 || key === 46) return false;
    this.el.nativeElement.value = this.formatValue(initalValue);
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  private formatValue(value: string): string {
    let response = "";
    let data = value.replace(/[^0-9]*/g, "").slice(0, 10); // Only numbers

    const dataSize = data.length;
    if (dataSize === 3) {
      response = `${data}-`;
    } else if (dataSize > 3 && dataSize < 6) {
      response = `${data.slice(0, 3)}-${data.slice(3, dataSize + 1)}`;
    } else if (dataSize === 6) {
      response = `${data.slice(0, 3)}-${data.slice(3, 6)}-`;
    } else if (dataSize > 6 && dataSize <= 10) {
      response = `${data.slice(0, 3)}-${data.slice(3, 6)}-${data.slice(
        6,
        dataSize + 1
      )}`;
    } else {
      response = data;
    }
    return response;
  }
}
