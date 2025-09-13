import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-java-script-behavior',
  imports: [NgbNavModule],
  templateUrl: './java-script-behavior.html',
  styleUrls: ['./java-script-behavior.scss'],
})
export class JavaScriptBehavior {
  public active = 'home';
}
