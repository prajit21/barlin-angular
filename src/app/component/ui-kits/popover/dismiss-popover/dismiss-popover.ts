import { Component } from '@angular/core';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dismiss-popover',
  imports: [NgbPopoverModule],
  templateUrl: './dismiss-popover.html',
  styleUrl: './dismiss-popover.scss',
})
export class DismissPopover {}
