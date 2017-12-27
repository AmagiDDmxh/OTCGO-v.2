import { Component, Input, OnInit } from "@angular/core";
import { MnFullpageOptions, MnFullpageService } from "ngx-fullpage";
import { Logger } from "../logger.service";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public isScroll = false

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    keyboardScrolling: true
  })

  constructor(
    public fullpageService: MnFullpageService,
    private logger: Logger
  ) {}

  public ngOnInit() {
    this.logger.log("On init")
  }

  public onLeave (i, n, d) {
    if (i === 1 && d === 'down')
      this.isScroll = true
    else if (i === 2 && d === 'up')
      this.isScroll = false
  }

}
