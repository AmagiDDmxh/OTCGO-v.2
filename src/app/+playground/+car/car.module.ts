import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { routes } from "./car.routes";
import { CarComponent } from "./car.component";
import { CommonModule } from "@angular/common";

console.log('`ChildDetail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    CarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class CarModule {
  public static routes = routes;
}
