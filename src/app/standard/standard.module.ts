import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StandardMessageComponent } from "../standard-message/standard-message.component";

@NgModule({
  declarations: [StandardMessageComponent],
  imports: [CommonModule],
  exports: [StandardMessageComponent],
})
export class StandardModule { }