import { Directive, Input, input, output } from "@angular/core";

import { orderTable } from "../data/data/ecommerce/order-history";

export type SortColumn = keyof orderTable | "";
export type SortDirection = "asc" | "desc" | "";
const rotate: { [key: string]: SortDirection } = {
  asc: "desc",
  desc: "",
  "": "asc",
};

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: "th[sortableOrder]",
  host: {
    "[class.asc]": 'direction === "asc"',
    "[class.desc]": 'direction === "desc"',
    "(click)": "rotate()",
  },
})
export class orderHistorySortableDirective {
  readonly sortableOrder = input<SortColumn>("");
  @Input() direction: SortDirection = "";
  readonly sort = output<SortEvent>();
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortableOrder(), direction: this.direction });
  }
}
