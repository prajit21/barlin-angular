import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';
import { Dropdown } from '../../../../shared/component/dropdown/dropdown';
import { visitors } from '../../../../shared/data/chart/widgets';

@Component({
  selector: 'app-visitors',
  imports: [CommonSvgIcons, Dropdown, NgApexchartsModule],
  templateUrl: './visitors.html',
  styleUrl: './visitors.scss',
})
export class Visitors {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
  public visitors = visitors;
}
