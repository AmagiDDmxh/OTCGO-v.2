import { Component } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import * as webpack from "webpack";
import loaderCallback = webpack.loader.loaderCallback;

@Component({
  selector: 'loginComponent',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public uploader: FileUploader = new FileUploader({})
  public hasDropZoneOver: boolean = false
  private filename?: string = null
  private wallet
  public isValid = true
  private password?: string = ''

  public fileOverBase (e: any): void {
    this.hasDropZoneOver = e
  }

  public dropped (e: any): void {
    if (this.hasDropZoneOver) {
      this.readFile(e[0])
    }
  }

  readFile (e, fileNameField ?: any) {
    this.filename = e.name
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(event.target.result)
    }

    reader.readAsText(e)
  }

  inputPassword (p) {
    this.password = p.trim()
  }

  log (f) {
    console.log(f)
  }
}