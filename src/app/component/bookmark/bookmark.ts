import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BookmarkData } from './bookmark-data/bookmark-data';
import { CreateTag } from './widgets/create-tag/create-tag';
import { NewBookmarks } from './widgets/new-bookmarks/new-bookmarks';
import { FeatherIcon } from '../../shared/component/feather-icon/feather-icon';
import { bookmarkData } from '../../shared/data/data/bookmark';
import { ClickOutsideDirective } from '../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-bookmark',
  imports: [ClickOutsideDirective, FeatherIcon, BookmarkData],
  templateUrl: './bookmark.html',
  styleUrl: './bookmark.scss',
})
export class Bookmark {
  public selected_id: number;
  public isOpen: boolean = false;
  public filterData = bookmarkData;

  public modalService = inject(NgbModal);

  changeData(id: number) {
    let ids = this.filterData.filter(x => x.title_id == id);
    this.selected_id = ids[0].title_id;
  }

  newBookMark() {
    this.modalService.open(NewBookmarks, {
      size: 'lg',
    });
  }

  createTag() {
    this.modalService.open(CreateTag, {
      size: 'lg',
    });
  }
}
