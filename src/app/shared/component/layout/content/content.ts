import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HideScrollNavService } from '../../../service/hidescrollnav.service';
import { LayoutService } from '../../../service/layout.service';
import { NavigationService } from '../../../service/navigation.service';
import { Breadcrumb } from '../../breadcrumb/breadcrumb';
import { Customiser } from '../../customiser/customiser';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Sidebar } from '../../sidebar/sidebar';

@Component({
  selector: 'app-content',
  imports: [Header, Sidebar, Breadcrumb, Footer, RouterModule, CommonModule, Customiser],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
  public navigationService = inject(NavigationService);
  public hideScrollNavService = inject(HideScrollNavService);
  public layoutService = inject(LayoutService);

  public footerFix = false;
  public footerLight = false;
  public footerDark: boolean = false;
  public innerWidth: number;

  ngOnInit() {
    if (localStorage.getItem('mode') == 'dark-only') {
      document.body?.classList.add('dark-only');
    }
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: Event) {
    if (window.innerWidth < 1200) {
      this.layoutService.config.settings.sidebar_type = 'page-wrapper compact-wrapper';
    }
  }

  ngDoCheck() {
    if (window.location.pathname == '/page-layout/footer-dark') {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
    } else if (window.location.pathname == '/page-layout/footer-light') {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
    } else if (window.location.pathname == '/page-layout/footer-fixed') {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
    }
  }

  ngOnDestroy() {
    this.footerDark = false;
    this.footerLight = false;
    this.footerDark = false;
  }
}
