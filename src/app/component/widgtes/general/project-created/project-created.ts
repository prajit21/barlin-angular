import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { projectCreated } from '../../../../shared/data/chart/widgets';

@Component({
  selector: 'app-project-created',
  imports: [NgApexchartsModule],
  templateUrl: './project-created.html',
  styleUrl: './project-created.scss',
})
export class ProjectCreated {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
  public projectCreated = projectCreated;
}
