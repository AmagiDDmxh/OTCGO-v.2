/**
 * Angular 2 decorators and services
 */
import { Component, OnInit } from "@angular/core";
import { AppState } from "./app.service";

import "jquery"; // Import jQuery
import "fullpage.js"; // Import fullpage.js

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <otcgo-header [isScroll]="isScroll"></otcgo-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {

  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
