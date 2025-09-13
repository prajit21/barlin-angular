import { Injectable } from '@angular/core';

export interface Config {
  settings: setting;
  color: colors;
}

interface setting {
  layout_type: string;
  mix_layout: string;
  sidebar_type: string;
  icon: string;
}

interface colors {
  primary_color: string | null;
  secondary_color: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public isOpen: boolean = false;

  public config: Config = {
    settings: {
      layout_type: 'ltr',
      mix_layout: 'light',
      sidebar_type: 'compact-wrapper',
      icon: 'fill-svg',
    },
    color: {
      primary_color: '#2A5699',
      secondary_color: '#EA6F4E',
    },
  };
}
