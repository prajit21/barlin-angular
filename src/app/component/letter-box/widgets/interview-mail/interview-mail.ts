import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Editor, NgxEditorModule } from 'ngx-editor';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';
import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-interview-mail',
  imports: [
    CommonSvgIcons,
    NgbTooltipModule,
    NgxEditorModule,
    FormsModule,
    FeatherIcon,
    ClickOutsideDirective,
  ],
  templateUrl: './interview-mail.html',
  styleUrl: './interview-mail.scss',
})
export class InterviewMail {
  readonly open = input<boolean>();
  readonly close = output<boolean>();
  public isBookmark: boolean = false;
  public isReply: boolean = false;
  public html = '';
  public editor: Editor;

  ngOnInit(): void {
    this.editor = new Editor();
  }

  clickValue(value: boolean) {
    value = false;
    this.close.emit(value);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
