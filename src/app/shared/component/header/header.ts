import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClickOutsideDirective } from '../../directive/click-outside.directive';
import { LayoutService } from '../../service/layout.service';
import { Menu, NavigationService } from '../../service/navigation.service';
import { CommonSvgIcons } from '../common-svg-icons/common-svg-icons';
import { SvgIcon } from '../svg-icon/svg-icon';
import { Bookmark } from './bookmark/bookmark';
import { Cart } from './cart/cart';
import { Language } from './language/language';
import { Message } from './message/message';
import { Notifications } from './notifications/notifications';
import { Profile } from './profile/profile';
import { Search } from './search/search';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    Cart,
    Bookmark,
    CommonModule,
    FormsModule,
    ClickOutsideDirective,
    Notifications,
    Message,
    Profile,
    CommonSvgIcons,
    SvgIcon,
    Language,
    Search,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public layout = inject(LayoutService);
  public navigationService = inject(NavigationService);

  public isOpen: boolean = false;
  public dark: boolean = this.layout.config.settings.mix_layout == 'dark-only' ? true : false;
  public text: string = '';
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public menuItems: Menu[] = [];
  public item: Menu[] = [];
  public open = false;
  public isSearch: boolean = false;

  constructor() {
    this.navigationService.items.subscribe((menuItems: Menu[]) => (this.item = menuItems));
  }

  layoutToggle() {
    const isDarkOnly = document.body.classList.contains('dark-only');
    this.dark = !isDarkOnly;
    if (this.dark) {
      document.body.classList.add('dark-only');
    } else {
      document.body.classList.remove('dark-only');
    }
    this.layout.config.settings.mix_layout = this.dark ? 'dark-only' : 'light';
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
    this.item.forEach(data => {
      if (data.title?.toLowerCase().includes(term) && data.type === 'link') {
        items.push(data);
      }
      data.children?.filter(subItems => {
        if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = data.icon;
          items.push(subItems);
        }
        subItems.children?.filter(suSubItems => {
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
    this.open = false;
    this.searchResult = false;
    this.searchResultEmpty = false;
    this.text = '';
    this.isSearch = false;
    document.body.classList.remove('offcanvas');
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add('offcanvas');
  }

  removeFix() {
    this.searchResult = false;
    this.text = '';
    document.body.classList.remove('offcanvas');
  }
}
