import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'playground',
  template: `
    <hero-parent></hero-parent>
  `
})
export class PlaygroundComponent implements OnInit {
  ngOnInit () {
    console.log(module.id)
  }
}