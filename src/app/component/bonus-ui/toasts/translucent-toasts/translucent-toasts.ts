import { Component } from "@angular/core";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";
import { translucentToastsData } from "../../../../shared/data/data/bonus-ui/toastr";

@Component({
  selector: "app-translucent-toasts",
  imports: [FeatherIcon],
  templateUrl: "./translucent-toasts.html",
  styleUrls: ["./translucent-toasts.scss"],
})
export class TranslucentToasts {
  public translucentToastsData = translucentToastsData;
  public isShow: boolean = true;

  close(id: number) {
    this.translucentToastsData.filter((data) => {
      if (data.id === id) {
        return (data.show = false);
      }
      return;
    });
  }
}
