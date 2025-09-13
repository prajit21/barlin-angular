import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import { project, ProjectLists } from '../../../shared/data/project/project';

@Component({
  selector: 'app-project-list',
  imports: [FeatherIcon, CommonModule, RouterModule],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.scss'],
})
export class ProjectList {
  public active: number = 1;
  public openTab: string = 'All';
  public ProjectLists = ProjectLists;
  public filterData: project[] = this.ProjectLists;

  public tabbed(val: string) {
    this.openTab = val;
    this.filterData =
      val !== 'All'
        ? this.ProjectLists.filter((data: project) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectLists;
  }
}
