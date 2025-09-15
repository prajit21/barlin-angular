import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-unique-toast",
  imports: [CommonModule],
  templateUrl: "./unique-toast.html",
  styleUrls: ["./unique-toast.scss"],
})
export class UniqueToast {
  public isShow: boolean = true;

  close() {
    this.isShow = false;
  }
}
