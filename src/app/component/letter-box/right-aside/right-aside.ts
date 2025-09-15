import { CommonModule } from "@angular/common";
import { Component, SimpleChanges, input } from "@angular/core";

import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonSvgIcons } from "../../../shared/component/common-svg-icons/common-svg-icons";
import {
  letterBox,
  letterBoxdata,
  letterBoxFilter,
  tabData,
} from "../../../shared/data/data/email";
import { ClickOutsideDirective } from "../../../shared/directive/click-outside.directive";
import { InterviewMail } from "../widgets/interview-mail/interview-mail";

@Component({
  selector: "app-right-aside",
  imports: [
    CommonModule,
    CommonSvgIcons,
    NgbPaginationModule,
    ClickOutsideDirective,
    InterviewMail,
  ],
  templateUrl: "./right-aside.html",
  styleUrl: "./right-aside.scss",
})
export class RightAside {
  readonly selectedId = input<number>();
  public filterData = letterBoxFilter;
  public pageSize = 8;
  public currentPage = 1;
  public isShow: boolean = false;
  public isOpne: boolean = false;
  public openTab: string = "promotion";
  public tabData = tabData;
  public getEmailData: letterBox;

  ngOnInit() {
    this.filterData.map((data) => {
      if (data.status) {
        this.getEmailData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filterData.map((data) => {
      if (data.id === changes["selectedId"].currentValue) {
        this.getEmailData = data;
      }
    });
  }

  tabActive(value: string) {
    this.openTab = value;
  }

  deleteEmail(item: letterBoxdata, name: string) {
    this.filterData.forEach((data) => {
      if (data.id === this.getEmailData.id) {
        data.data = data.data.filter(
          (element) => element.name !== name || element.id !== item.id,
        );
      }
    });
  }

  bookMark(id: number) {
    this.filterData.forEach((list) => {
      list.data.forEach((items) => {
        if (items.id === id) {
          items.active = !items.active;
          items.isOpens = !items.isOpens;
        }
      });
    });
  }

  isFalse(value: boolean) {
    this.isOpne = value;
  }
}
