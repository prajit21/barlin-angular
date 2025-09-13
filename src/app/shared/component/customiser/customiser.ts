import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ColorLayout } from './color-layout/color-layout';
import { DarkLayout } from './dark-layout/dark-layout';
import { LayoutType } from './layout-type/layout-type';
import { LightLayout } from './light-layout/light-layout';
import { MixLayout } from './mix-layout/mix-layout';
import { SidebarIcon } from './sidebar-icon/sidebar-icon';
import { SidebarType } from './sidebar-type/sidebar-type';
import { Config, LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-customiser',
  imports: [LayoutType, SidebarType, SidebarIcon, ColorLayout, MixLayout, LightLayout, DarkLayout],
  templateUrl: './customiser.html',
  styleUrl: './customiser.scss',
})
export class Customiser {
  public layoutService = inject(LayoutService);
  public modalService = inject(NgbModal);

  openModal(popup: TemplateRef<NgbModal>) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }

  copyText(data: Config) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
