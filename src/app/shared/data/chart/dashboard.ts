var primary_color = localStorage.getItem('primary_color') || '#2A5699';
var secondary_color = localStorage.getItem('secondary_color') || '#EA6F4E';

export let higherRevenue: any = {
  series: [
    {
      name: 'Online Sale',
      data: [120, 150, 250, 145, 130, 250, 200, 200, 300, 175, 155, 200],
    },
    {
      name: 'Marketing Sale',
      data: [80, 105, 35, 65, 110, 45, 90, 145, 45, 65, 90, 90],
    },
  ],
  colors: [primary_color, secondary_color],
  chart: {
    type: 'area',
    height: 314,
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
        pan: false,
        download: false,
      },
    },
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 7,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 8,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 9,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 10,
        fillColor: '#fff',
        strokeColor: primary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 1,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 2,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 3,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 4,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 5,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 6,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 7,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 8,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 9,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 1,
        dataPointIndex: 10,
        fillColor: '#fff',
        strokeColor: secondary_color,
        size: 3,
        shape: 'circle',
      },
    ],
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: 'stepline',
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    borderColor: ['var(--chart-border)'],
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: {
      style: {
        colors: [
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
          'var(--body-font-color)',
        ],
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ['var(--body-font-color)'],
      },
      formatter: (value: any) => {
        return `${value}$`;
      },
    },
  },
  responsive: [
    {
      breakpoint: 420,
      options: {
        series: [
          {
            name: 'Online Sale',
            data: [100, 155, 175, 160, 200, 200, 250],
          },
          {
            name: 'Marketing Sale',
            data: [45, 75, 85, 45, 145, 90, 45],
          },
        ],
      },
    },
  ],
};

export let totalSales: any = {
  series: [
    {
      name: 'Earning',
      data: [50, 40, 20, 30, 35, 60, 30, 35, 65, 25, 40, 35],
    },
    {
      name: 'Earning',
      data: [25, 20, 30, 10, 15, 10, 15, 13, 12, 10, 25, 40],
    },
  ],
  chart: {
    type: 'bar',
    height: 302,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 1,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
      e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
      columnWidth: '20%',
    },
  },
  responsive: [
    {
      breakpoint: 1199.98,
      options: {
        chart: {
          height: 320,
        },
      },
    },
  ],
  dataLabels: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    offsetX: 0,
    offsetY: 0,
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    dataLabels: {
      enabled: true,
    },
  },
  fill: {
    opacity: 1,
    colors: [primary_color, secondary_color],
  },
  legend: {
    show: false,
  },
};

export let learningSummary: any = {
  series: [
    {
      name: 'growth',
      type: 'line',
      data: [25, 30, 43, 25, 38, 25, 33, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 30, 41, 25, 36, 25, 31, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 29, 37, 25, 34, 25, 29, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 28, 34, 25, 32, 25, 28, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 27, 30, 25, 28, 25, 27, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 26, 24, 25, 24, 25, 24, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 26, 20, 25, 21, 25, 23, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 24, 16, 25, 18, 25, 22, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 23, 12, 25, 15, 25, 21, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 23, 10, 25, 13, 25, 19, 25],
    },
    {
      name: 'growth',
      type: 'area',
      data: [25, 28, 37, 25, 33, 25, 27, 25],
    },
  ],
  chart: {
    height: 275,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderColor: 'var(--chart-border)',
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: [
    primary_color,
    secondary_color,
    primary_color,
    secondary_color,
    primary_color,
    secondary_color,
    primary_color,
    secondary_color,
    primary_color,
    secondary_color,
    primary_color,
  ],
  stroke: {
    width: 1.5,
    curve: 'smooth',
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 0,
        fillColor: primary_color,
        strokeColor: '#fff',
        size: 6,
      },
      {
        seriesIndex: 1,
        dataPointIndex: 5,
        fillColor: primary_color,
        strokeColor: '#fff',
        size: 6,
      },
      {
        seriesIndex: 2,
        dataPointIndex: 3,
        fillColor: primary_color,
        strokeColor: '#fff',
        size: 6,
      },
    ],
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  xaxis: {
    type: 'category',
    categories: ['Sep 5', 'Sep 8', 'Sep 12', 'Sep 16', 'Sep 18', 'Sep 17', 'Sep 23', 'Sep 26'],
    tickAmount: 12,
    labels: {
      style: {
        colors: 'var(--chart-text-color)',
        fontSize: '12px',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 400,
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  fill: {
    type: [
      'solid',
      'solid',
      'solid',
      'solid',
      'solid',
      'solid',
      'solid',
      'solid',
      'solid',
      'solid',
      'gradient',
    ],
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.5,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 80, 100],
    },
  },
  yaxis: {
    min: 0,
    max: 50,
    tickAmount: 5,
    labels: {
      style: {
        colors: 'var(--chart-text-color)',
        fontSize: '12px',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 400,
      },
    },
  },
  legend: {
    show: false,
  },
};

export let onlineSales: any = {
  series: [
    {
      name: 'Activity',
      data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
    },
  ],
  chart: {
    height: 100,
    type: 'bar',
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 3,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: [
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    primary_color,
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
    '#e9f2ff',
  ],
};

export let offlineSales: any = {
  series: [
    {
      name: 'Desktops',
      data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    },
  ],
  chart: {
    type: 'area',
    offsetY: 30,
    height: 140,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      bottom: 3,
      blur: 2,
      color: secondary_color,
      opacity: 0.2,
    },
  },
  colors: [secondary_color],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: 'straight',
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 12,
        fillColor: secondary_color,
        strokeColor: '#fff',
        size: 5,
        shape: 'circle',
      },
    ],
  },
};

export let totalProfit: any = {
  series: [
    {
      name: 'Desktops',
      data: [15, 14, 11, 20, 10, 15, 11],
    },
  ],
  chart: {
    type: 'area',
    height: 123,
    offsetY: 10,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      bottom: 3,
      blur: 2,
      color: '#58b232',
      opacity: 0.2,
    },
  },
  colors: ['#58b232'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: '#58b232',
        strokeColor: '#fff',
        size: 6,
        shape: 'circle',
      },
    ],
  },
};

export let saleStatistic: any = {
  series: [
    {
      name: 'Earning',
      type: 'line',
      data: [330, 60, 370, 240, 250, 70, 280, 60, 185, 60],
    },
    {
      name: 'Order',
      type: 'line',
      data: [70, 330, 60, 200, 100, 250, 100, 350, 110, 300],
    },
  ],
  chart: {
    height: 304,
    type: 'line',
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: '#000',
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'smooth',
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '20%',
    },
  },
  colors: [primary_color, secondary_color],
  fill: {
    opacity: 1,
    type: 'solid',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  xaxis: {
    type: 'category',
    tickAmount: 8,
    tickPlacement: 'between',
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: 'var(--chart-border)',
    },
    axisTicks: {
      show: false,
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: primary_color,
        strokeColor: 'var(--white)',
        size: 6,
        sizeOffset: 2,
      },
    ],
    hover: {
      size: 6,
      sizeOffset: 0,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
    tickPlacement: 'between',
    labels: {
      formatter: function (val: any) {
        return val + 'K';
      },
      offsetX: -5,
    },
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 174,
        },
      },
    },
    {
      breakpoint: 781,
      options: {
        chart: {
          height: 235,
        },
      },
    },
  ],
};

export let goal: any = {
  series: [80],
  chart: {
    height: 345,
    type: 'radialBar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      hollow: {
        size: '78%',
        dropShadow: {
          enabled: false,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          color: primary_color,
          fontSize: '36px',
          fontWeight: '700',
          show: true,
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1551,
      options: {
        chart: {
          height: 460,
        },
      },
    },
  ],
  colors: [primary_color],
  stroke: {
    lineCap: 'round',
  },
  tooltip: {
    enabled: false,
  },
};
