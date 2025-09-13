import { Component } from '@angular/core';

import { TaskData } from './task-data/task-data';
import { TaskFilter } from './task-filter/task-filter';
import * as data from '../../shared/data/data/tasks';

@Component({
  selector: 'app-task',
  imports: [TaskData, TaskFilter],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  public selectedId: number;
  public taskData = data.taskData;

  getId(id: number) {
    this.selectedId = id;
  }
}
