import { Component } from "@angular/core";

@Component({
  selector: "app-live-toast",
  imports: [],
  templateUrl: "./live-toast.html",
  styleUrls: ["./live-toast.scss"],
})
export class LiveToast {
  public topRightShow: boolean = false;
  public bottomRightShow: boolean = false;
  public topLeftShow: boolean = false;
  public bottomLeftShow: boolean = false;

  topRight() {
    this.topRightShow = true;
  }

  topRightClose() {
    this.topRightShow = false;
  }

  bottomRight() {
    this.bottomRightShow = true;
  }

  topBottomClose() {
    this.bottomRightShow = false;
  }

  topLeft() {
    this.topLeftShow = true;
  }

  topLeftClose() {
    this.topLeftShow = false;
  }

  bottomLeft() {
    this.bottomLeftShow = true;
  }

  bottomLeftClose() {
    this.bottomLeftShow = false;
  }
}
