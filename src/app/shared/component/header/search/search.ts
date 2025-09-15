import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ClickOutsideDirective } from "../../../directive/click-outside.directive";
import { Menu, NavigationService } from "../../../service/navigation.service";
import { CommonSvgIcons } from "../../common-svg-icons/common-svg-icons";
import { SvgIcon } from "../../svg-icon/svg-icon";

@Component({
  selector: "app-search",
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    CommonSvgIcons,
    SvgIcon,
    ClickOutsideDirective,
  ],
  templateUrl: "./search.html",
  styleUrl: "./search.scss",
})
export class Search {
  public navService = inject(NavigationService);

  public open = false;
  public isOpen: boolean = false;
  public text: string = "";
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public item: Menu[] = [];
  public menuItems: Menu[] = [];

  constructor() {
    this.navService.items.subscribe(
      (menuItems: Menu[]) => (this.item = menuItems),
    );
  }

  openSearch() {
    this.open = !this.open;
    this.searchResult = false;
  }

  searchTerm(term: string) {
    term ? this.addFix() : this.removeFix();
    if (!term) return (this.menuItems = []);
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.item.forEach((data) => {
      if (data.title?.toLowerCase().includes(term) && data.type === "link") {
        items.push(data);
      }
      data.children?.filter((subItems) => {
        if (
          subItems.title?.toLowerCase().includes(term) &&
          subItems.type === "link"
        ) {
          subItems.icon = data.icon;
          items.push(subItems);
        }
        subItems.children?.filter((suSubItems) => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = data.icon;
            items.push(suSubItems);
          }
        });
        return;
      });
      this.checkSearchResultEmpty(items);
      this.menuItems = items;
    });
    return;
  }

  clickOutside(): void {
    this.text = "";
    this.open = false;
    this.searchResult = false;
    this.searchResultEmpty = false;
    document.body.classList.remove("offcanvas");
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add("offcanvas");
  }

  removeFix() {
    this.text = "";
    this.searchResult = false;
    document.body.classList.remove("offcanvas");
  }
}
