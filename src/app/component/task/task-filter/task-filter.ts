import { CommonModule } from '@angular/common';
import { Component, input, output, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import * as data from '../../../shared/data/data/tasks';
import { ClickOutsideDirective } from '../../../shared/directive/click-outside.directive';
import { AddTask } from '../widgets/add-task/add-task';
import { CreateTag } from '../widgets/create-tag/create-tag';

@Component({
  selector: 'app-task-filter',
  imports: [ClickOutsideDirective, CommonModule, FeatherIcon],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.scss',
})
export class TaskFilter {
  public statusData: boolean;
  readonly data = input<data.tasks[]>();
  public isOpen: boolean = false;
  readonly selectedId = output<number>();

  ngOnInit() {
    let trueData = this.data()?.filter(x => x.status == true);
    this.statusData = trueData![0]?.status;
  }

  private modalService = inject(NgbModal);

  changeData(list: data.tasks) {
    const getId = this.data()?.filter(x => x.title_id == list.title_id);
    this.selectedId.emit(getId![0].title_id);
  }

  newTasks() {
    this.modalService.open(AddTask, {
      size: 'lg',
    });
  }

  createTasks() {
    this.modalService.open(CreateTag, {
      size: 'lg',
    });
  }
}
