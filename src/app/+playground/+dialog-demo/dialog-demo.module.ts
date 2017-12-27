import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { routes } from "./dialog-demo.routes";
import {
  ContentElementDialog,
  DialogDemo,
  IFrameDialog,
  JazzDialog
} from "./dialog-demo";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ContentElementDialog,
    DialogDemo,
    IFrameDialog,
    JazzDialog
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class DialogDemoModule {
  public static routes = routes;
}
