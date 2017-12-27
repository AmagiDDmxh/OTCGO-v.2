import { Component, Inject, Input } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DOCUMENT } from "@angular/common";
import { LoginComponent } from "./login";
import {
  FullscreenOverlayContainer,
  OverlayContainer
} from "@angular/cdk/overlay";

@Component({
  selector: 'otcgo-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer }
  ]
})
export class HeaderComponent {
  @Input() isScroll;

  constructor (public dialog: MatDialog, @Inject(DOCUMENT) doc: any) {

  }

  openLogin () {
    this.dialog.open(LoginComponent, {
      height: '400px',
      width: '500px'
    } as MatDialogConfig)
  }

  openCreateWallet () {
    // this.dialog.open()
  }
}
