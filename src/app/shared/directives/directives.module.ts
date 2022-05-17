import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneFormatDirective } from "./phone-format/phone-format.directive";
import { TextBgModificatorDirective } from "./text-bg-modificator/text-bg-modificator.directive";

@NgModule({
  declarations: [PhoneFormatDirective, TextBgModificatorDirective],
  imports: [CommonModule],
  exports: [PhoneFormatDirective, TextBgModificatorDirective],
})
export class DirectivesModule {}
