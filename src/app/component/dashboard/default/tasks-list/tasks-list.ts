import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Dropdown } from '../../../../shared/component/dropdown/dropdown';
import { tasksList } from '../../../../shared/data/data/dashboard';

@Component({
  selector: 'app-tasks-list',
  imports: [Dropdown, CommonModule, RouterModule],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.scss',
})
export class TasksList {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
  public tasksList = tasksList;
}
