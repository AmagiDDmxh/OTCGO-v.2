import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./playground.routes";

import {
  ContentElementDialog,
  DialogDemo,
  IFrameDialog,
  JazzDialog
} from "./+dialog-demo/dialog-demo";
import { PlaygroundComponent } from "./playground.component";
import { HeroChildComponent } from "./CI/hero-child-component";
import { HeroParentComponent } from "./CI/hero-parent.component";
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PlaygroundComponent,
    DialogDemo,
    JazzDialog,
    IFrameDialog,
    ContentElementDialog,
    HeroChildComponent,
    HeroParentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    JazzDialog,
    IFrameDialog,
    ContentElementDialog
  ]
})
export class PlaygroundModule {
  constructor () {

  }
}