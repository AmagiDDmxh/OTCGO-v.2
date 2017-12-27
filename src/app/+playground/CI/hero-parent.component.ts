import { Component } from "@angular/core";

@Component({
  selector: 'hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <hero-child *ngFor="let hero of heroes"
                [hero]="hero"
                [master]="master">
    </hero-child>
  `
})
export class HeroParentComponent {
  heroes = [
    { name: 'Mr. IQ' },
    { name: '  a s ' },
    { name: ' Booosterbasto    ' },
    { name: '       ' }
  ]

  master = 'Master'
}