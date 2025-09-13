import { Routes } from '@angular/router';

import { ApexCharts } from './apex-charts/apex-charts';
import { ChartJSChart } from './chart-js-chart/chart-js-chart';
import { ChartLisChart } from './chart-lis-chart/chart-lis-chart';
import { GoogleChart } from './google-chart/google-chart';

export default [
  {
    path: 'apex-chart',
    component: ApexCharts,
    data: {
      title: 'Apex Chart',
      breadcrumb: 'Apex Chart',
    },
  },
  {
    path: 'google-chart',
    component: GoogleChart,
    data: {
      title: 'Google Chart',
      breadcrumb: 'Google Chart',
    },
  },
  {
    path: 'chartjs-chart',
    component: ChartJSChart,
    data: {
      title: 'ChartJS Chart',
      breadcrumb: 'ChartJS Chart',
    },
  },
  {
    path: 'chartist-chart',
    component: ChartLisChart,
    data: {
      title: 'Chartist Chart',
      breadcrumb: 'Chartist Chart',
    },
  },
] as Routes;
