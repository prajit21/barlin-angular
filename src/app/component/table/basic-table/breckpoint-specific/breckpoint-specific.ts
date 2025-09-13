import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-breckpoint-specific',
  imports: [CommonModule],
  templateUrl: './breckpoint-specific.html',
  styleUrls: ['./breckpoint-specific.scss'],
})
export class BreckpointSpecific {
  public breckpointSpecific = data.breckpointSpecific;
}
