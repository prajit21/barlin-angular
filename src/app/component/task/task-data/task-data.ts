import { Component, SimpleChanges, input } from '@angular/core';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import * as data from '../../../shared/data/data/tasks';

@Component({
  selector: 'app-task-data',
  imports: [FeatherIcon],
  templateUrl: './task-data.html',
  styleUrl: './task-data.scss',
})
export class TaskData {
  public getTaskData: data.tasks;
  readonly selectedId = input<number>();
  readonly data = input<data.tasks[]>();

  ngOnInit() {
    this.data()?.map(data => {
      if (data.status) {
        this.getTaskData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedId']?.currentValue;
    this.data()?.map(data => {
      if (data.title_id === id) {
        this.getTaskData = data;
      }
    });
  }
}
