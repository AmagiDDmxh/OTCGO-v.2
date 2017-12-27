import { Component } from "@angular/core";

@Component({
  selector: 'loader',
  styleUrls: ["./loader.component.scss"],
  template: `
    <div class="loader">
      <div class="logo">
        <div class="white"></div>
        <div class="orange"></div>
        <div class="red"></div>
      </div>
      <p>Loading</p>
    </div>
  `
})
export class LoaderComponent {
}