import { Component, Input } from "@angular/core";

@Component({
  selector: 'hero-child',
  template: `
    <h3>{{hero.name}} says</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}</p>
  `
})
export class HeroChildComponent {
  private _hero

  @Input()
  set hero (hero) {
    const name = hero && hero.name.trim() || '<no name set>'
    this._hero = { ...hero, name }
  }

  get hero () {
    return this._hero
  }

  @Input('master') masterName: string
}
