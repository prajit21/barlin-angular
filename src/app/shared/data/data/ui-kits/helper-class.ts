export interface commonHelperClasses {
  header: string;
  desc: string;
  titleData: titleData[];
}

export interface titleData {
  title: string;
  colClass: string;
  divClass: string;
  data: data[];
}

export interface data {
  text: string;
  textClass: string;
  textC?: string;
}

export interface images {
  img: string;
  imgClass: string;
  alt: string;
}

export interface commonSide {
  header: string;
  desc: string;
  title: TitleData[];
}

export interface TitleData {
  title: string;
  colClass: string;
  item: Data[];
}

export interface Data {
  text: string;
}

export const StyleBorderData: commonHelperClasses[] = [
  {
    header: 'Styled Borders',
    desc: 'Use different styles of borders, like <code>border radius, border-color, and border-width</code> use of any components.',
    titleData: [
      {
        title: 'Custom Border-radius Class',
        colClass: 'col-xxl-3 col-sm-6',
        divClass: 'border-wrapper h-100 alert-light-light dark-helper',
        data: [
          {
            text: 'b-r-0',
            textClass: 'helper-box b-r-0 bg-light border',
          },
          {
            text: 'b-r-1',
            textClass: 'helper-box b-r-1 bg-light border',
          },
          {
            text: 'b-r-2',
            textClass: 'helper-box b-r-2 bg-light border',
          },
          {
            text: 'b-r-3',
            textClass: 'helper-box b-r-3 bg-light border',
          },
          {
            text: 'b-r-4',
            textClass: 'helper-box b-r-4 bg-light border',
          },
          {
            text: 'b-r-5',
            textClass: 'helper-box b-r-5 bg-light border',
          },
          {
            text: 'b-r-6',
            textClass: 'helper-box b-r-6 bg-light border',
          },
          {
            text: 'b-r-7',
            textClass: 'helper-box b-r-7 bg-light border',
          },
          {
            text: 'b-r-8',
            textClass: 'helper-box b-r-8 bg-light border',
          },
          {
            text: 'b-r-9',
            textClass: 'helper-box b-r-9 bg-light border',
          },
          {
            text: 'b-r-10',
            textClass: 'helper-box b-r-10 bg-light border',
          },
        ],
      },
      {
        title: 'Border Color',
        colClass: 'col-xxl-3 col-sm-6',
        divClass: 'border-wrapper h-100 alert-light-light dark-helper',
        data: [
          {
            text: 'border-primary',
            textClass: 'helper-box border-primary border',
          },
          {
            text: 'border-secondary',
            textClass: 'helper-box border-secondary border',
          },
          {
            text: 'border-success',
            textClass: 'helper-box border-success border',
          },
          {
            text: 'border-danger',
            textClass: 'helper-box border-danger border',
          },
          {
            text: 'border-warning',
            textClass: 'helper-box border-warning border',
          },
          {
            text: 'border-info',
            textClass: 'helper-box border-info border',
          },
          {
            text: 'border-dark',
            textClass: 'helper-box border-dark border',
          },
        ],
      },
      {
        title: 'Border Width',
        colClass: 'col-xxl-3 col-sm-6',
        divClass: 'border-wrapper h-100 alert-light-light dark-helper',
        data: [
          {
            text: 'border-1',
            textClass: 'helper-box border-1 border',
          },
          {
            text: 'border-2',
            textClass: 'helper-box border-2 border',
          },
          {
            text: 'border-3',
            textClass: 'helper-box border-3 border',
          },
          {
            text: 'border-4',
            textClass: 'helper-box border-4 border',
          },
          {
            text: 'border-5',
            textClass: 'helper-box border-5 border',
          },
          {
            text: 'border-6',
            textClass: 'helper-box border-6 border',
          },
          {
            text: 'border-7',
            textClass: 'helper-box border-7 border',
          },
          {
            text: 'border-8',
            textClass: 'helper-box border-8 border',
          },
          {
            text: 'border-9',
            textClass: 'helper-box border-9 border',
          },
          {
            text: 'border-10',
            textClass: 'helper-box border-10 border',
          },
        ],
      },
      {
        title: 'Text Colors',
        colClass: 'col-xxl-3 col-sm-6',
        divClass: 'border-wrapper alert-light-light h-100 dark-helper',
        data: [
          {
            text: 'txt-primary',
            textClass: 'helper-box helper-text border txt-primary',
            textC: 'C',
          },
          {
            text: 'txt-secondary',
            textClass: 'helper-box helper-text border txt-secondary',
            textC: 'C',
          },
          {
            text: 'txt-success',
            textClass: 'helper-box helper-text border txt-success',
            textC: 'C',
          },
          {
            text: 'txt-danger',
            textClass: 'helper-box helper-text border txt-danger',
            textC: 'C',
          },
          {
            text: 'txt-warning',
            textClass: 'helper-box helper-text border txt-warning',
            textC: 'C',
          },
          {
            text: 'txt-info',
            textClass: 'helper-box helper-text border txt-info',
            textC: 'C',
          },
          {
            text: 'txt-dark',
            textClass: 'helper-box helper-text border txt-dark',
            textC: 'C',
          },
          {
            text: 'txt-light',
            textClass: 'helper-box helper-text border txt-light bg-dark',
            textC: 'C',
          },
        ],
      },
    ],
  },
];

export const BorderAndDisplayData: commonHelperClasses[] = [
  {
    header: 'Variation Of Borders And Displays',
    desc: "Use border utilities to add or remove an element's borders.",
    titleData: [
      {
        title: 'Additive Border',
        colClass: 'col-xl-4 col-sm-6',
        divClass: 'border-wrapper h-100 border',
        data: [
          {
            text: 'border',
            textClass: 'helper-box bg-light border',
          },
          {
            text: 'border-top',
            textClass: 'helper-box bg-light border-top',
          },
          {
            text: 'border-bottom',
            textClass: 'helper-box bg-light border-bottom',
          },
          {
            text: 'border-start',
            textClass: 'helper-box bg-light border-start',
          },
          {
            text: 'border-end',
            textClass: 'helper-box bg-light border-end',
          },
        ],
      },
      {
        title: 'Subtractive Border',
        colClass: 'col-xl-4 col-sm-6',
        divClass: 'border-wrapper h-100 border',
        data: [
          {
            text: 'border-0',
            textClass: 'helper-box bg-light border border-0',
          },
          {
            text: 'border-top-0',
            textClass: 'helper-box bg-light border border-top-0',
          },
          {
            text: 'border-end-0',
            textClass: 'helper-box bg-light border border-end-0',
          },
          {
            text: 'border-bottom-0',
            textClass: 'helper-box bg-light border border-bottom-0',
          },
          {
            text: 'border-start-0',
            textClass: 'helper-box bg-light border border-start-0',
          },
        ],
      },
      {
        title: 'Additive Radius',
        colClass: 'col-xl-4 col-sm-12',
        divClass: 'border-wrapper h-100 border',
        data: [
          {
            text: 'rounded',
            textClass: 'helper-radius radius-wrapper rounded',
          },
          {
            text: 'rounded-top',
            textClass: 'helper-radius radius-wrapper rounded-top',
          },
          {
            text: 'rounded-end',
            textClass: 'helper-radius radius-wrapper rounded-end',
          },
          {
            text: 'rounded-bottom',
            textClass: 'helper-radius radius-wrapper rounded-bottom',
          },
          {
            text: 'rounded-start',
            textClass: 'helper-radius radius-wrapper rounded-start',
          },
          {
            text: 'rounded-pill',
            textClass: 'helper-radius radius-wrapper rounded-pill',
          },
          {
            text: 'rounded-circle',
            textClass: 'helper-radius radius-wrapper rounded-circle',
          },
          {
            text: 'rounded-0',
            textClass: 'helper-radius radius-wrapper rounded-0',
          },
        ],
      },
    ],
  },
];

export const backgroundColorsData: commonHelperClasses[] = [
  {
    header: 'Background Colors',
    desc: 'Use any component in a theme, use the colors <code>bg-* </code>and <code>alert-light-*.</code>',
    titleData: [
      {
        title: 'Dark Background',
        colClass: 'col-xl-4 col-sm-6',
        divClass: 'border-wrapper h-100 border',
        data: [
          {
            text: 'bg-primary',
            textClass: 'helper-box bg-primary',
          },
          {
            text: 'bg-secondary',
            textClass: 'helper-box bg-secondary',
          },
          {
            text: 'bg-success',
            textClass: 'helper-box bg-success',
          },
          {
            text: 'bg-danger',
            textClass: 'helper-box bg-danger',
          },
          {
            text: 'bg-warning',
            textClass: 'helper-box bg-warning',
          },
          {
            text: 'bg-info',
            textClass: 'helper-box bg-info',
          },
          {
            text: 'bg-dark',
            textClass: 'helper-box bg-dark',
          },
          {
            text: 'bg-light',
            textClass: 'helper-box bg-light',
          },
        ],
      },
      {
        title: 'Light Backgrounds',
        colClass: 'col-xl-4 col-sm-6',
        divClass: 'border-wrapper h-100 border',
        data: [
          {
            text: 'alert-light-primary',
            textClass: 'helper-box alert-light-primary',
          },
          {
            text: 'alert-light-secondary',
            textClass: 'helper-box alert-light-secondary',
          },
          {
            text: 'alert-light-success',
            textClass: 'helper-box alert-light-success',
          },
          {
            text: 'alert-light-danger',
            textClass: 'helper-box alert-light-danger',
          },
          {
            text: 'alert-light-warning',
            textClass: 'helper-box alert-light-warning',
          },
          {
            text: 'alert-light-info',
            textClass: 'helper-box alert-light-info',
          },
          {
            text: 'alert-light-dark',
            textClass: 'helper-box alert-light-dark',
          },
          {
            text: 'alert-light-light',
            textClass: 'helper-box alert-light-light',
          },
        ],
      },
      {
        title: 'Extended Background Colors',
        colClass: 'col-xl-4 col-sm-12',
        divClass: 'border-wrapper h-100 border',
        data: [
          {
            text: 'light-card',
            textClass: 'helper-box light-card',
          },
          {
            text: 'light-background',
            textClass: 'helper-box light-background border',
          },
        ],
      },
    ],
  },
];

export const borderColor: data[] = [
  {
    text: 'b-primary',
    textClass: 'b-primary',
  },
  {
    text: 'b-t-primary',
    textClass: 'b-t-primary',
  },
  {
    text: 'b-b-primary',
    textClass: 'b-b-primary',
  },
  {
    text: 'b-l-primary',
    textClass: 'b-l-primary',
  },
  {
    text: 'b-r-primary',
    textClass: 'b-r-primary',
  },
  {
    text: 'b-secondary',
    textClass: 'b-secondary',
  },
  {
    text: 'b-t-secondary',
    textClass: 'b-t-secondary',
  },
  {
    text: 'b-b-secondary',
    textClass: 'b-b-secondary',
  },
  {
    text: 'b-l-secondary',
    textClass: 'b-l-secondary',
  },
  {
    text: 'b-r-secondary',
    textClass: 'b-r-secondary',
  },
  {
    text: 'b-success',
    textClass: 'b-success',
  },
  {
    text: 'b-t-success',
    textClass: 'b-t-success',
  },
  {
    text: 'b-b-success',
    textClass: 'b-b-success',
  },
  {
    text: 'b-l-success',
    textClass: 'b-l-success',
  },
  {
    text: 'b-r-success',
    textClass: 'b-r-success',
  },
  {
    text: 'b-danger',
    textClass: 'b-danger',
  },
  {
    text: 'b-t-danger',
    textClass: 'b-t-danger',
  },
  {
    text: 'b-b-danger',
    textClass: 'b-b-danger',
  },
  {
    text: 'b-l-danger',
    textClass: 'b-l-danger',
  },
  {
    text: 'b-r-danger',
    textClass: 'b-r-danger',
  },
  {
    text: 'b-warning',
    textClass: 'b-warning',
  },
  {
    text: 'b-t-warning',
    textClass: 'b-t-warning',
  },
  {
    text: 'b-b-warning',
    textClass: 'b-b-warning',
  },
  {
    text: 'b-l-warning',
    textClass: 'b-l-warning',
  },
  {
    text: 'b-r-warning',
    textClass: 'b-r-warning',
  },
  {
    text: 'b-info',
    textClass: 'b-info',
  },
  {
    text: 'b-t-info',
    textClass: 'b-t-info',
  },
  {
    text: 'b-b-info',
    textClass: 'b-b-info',
  },
  {
    text: 'b-l-info',
    textClass: 'b-l-info',
  },
  {
    text: 'b-r-info',
    textClass: 'b-r-info',
  },
  {
    text: 'b-dark',
    textClass: 'b-dark',
  },
  {
    text: 'b-t-dark',
    textClass: 'b-t-dark',
  },
  {
    text: 'b-b-dark',
    textClass: 'b-b-dark',
  },
  {
    text: 'b-l-dark',
    textClass: 'b-l-dark',
  },
  {
    text: 'b-r-dark',
    textClass: 'b-r-dark',
  },
  {
    text: 'b-light',
    textClass: 'b-light',
  },
  {
    text: 'b-t-light',
    textClass: 'b-t-light',
  },
  {
    text: 'b-b-light',
    textClass: 'b-b-light',
  },
  {
    text: 'b-l-light',
    textClass: 'b-l-light',
  },
  {
    text: 'b-r-light',
    textClass: 'b-r-light',
  },
];

export const imageSizeData: images[] = [
  {
    imgClass: 'img-30 img-h-30',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-30',
  },
  {
    imgClass: 'img-40 img-h-40',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-40',
  },
  {
    imgClass: 'img-50 img-h-50',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-50',
  },
  {
    imgClass: 'img-60 img-h-60',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-60',
  },
  {
    imgClass: 'img-70 img-h-70',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-70',
  },
  {
    imgClass: 'img-80 img-h-80',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-80',
  },
  {
    imgClass: 'img-90 img-h-90',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-90',
  },
  {
    imgClass: 'img-100 img-h-100',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-100',
  },
];

export const imageSizeDataRounded: images[] = [
  {
    imgClass: 'img-30 img-h-30 b-r-4',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-30',
  },
  {
    imgClass: 'img-40 img-h-40 rounded',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-40',
  },
  {
    imgClass: 'img-50 img-h-50 rounded-1',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-50',
  },
  {
    imgClass: 'img-60 img-h-60 rounded-2',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-60',
  },
  {
    imgClass: 'img-70 img-h-70 rounded-3',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-70',
  },
  {
    imgClass: 'img-80 img-h-80 rounded-4',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-80',
  },
  {
    imgClass: 'img-90 img-h-90 rounded-5',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-90',
  },
  {
    imgClass: 'img-100 img-h-100 rounded-pill',
    img: 'assets/images/blog/comment.jpg',
    alt: 'img-size-100',
  },
];

export const SidePadding: commonSide[] = [
  {
    header: 'Only One Side Padding',
    desc: 'Use padding classes like: <code>p-l-* / p-r-* / p-t-* / p-b-*</code>.',
    title: [
      {
        title: 'Padding Left',
        colClass: 'col-xxl-3 col-sm-6',
        item: [
          {
            text: 'p-l-10',
          },
          {
            text: 'p-l-15',
          },
          {
            text: 'p-l-20',
          },
          {
            text: 'p-l-25',
          },
          {
            text: 'p-l-30',
          },
          {
            text: 'p-l-35',
          },
          {
            text: 'p-l-40',
          },
          {
            text: 'p-l-45',
          },
          {
            text: 'p-l-50',
          },
        ],
      },
      {
        title: 'Padding Right',
        colClass: 'col-xxl-3 col-sm-6',
        item: [
          {
            text: 'p-r-10',
          },
          {
            text: 'p-r-15',
          },
          {
            text: 'p-r-20',
          },
          {
            text: 'p-r-25',
          },
          {
            text: 'p-r-30',
          },
          {
            text: 'p-r-35',
          },
          {
            text: 'p-r-40',
          },
          {
            text: 'p-r-45',
          },
          {
            text: 'p-r-50',
          },
        ],
      },
      {
        title: 'Padding Top',
        colClass: 'col-xxl-3 col-sm-6',
        item: [
          {
            text: 'p-t-10',
          },
          {
            text: 'p-t-15',
          },
          {
            text: 'p-t-20',
          },
          {
            text: 'p-t-25',
          },
          {
            text: 'p-t-30',
          },
          {
            text: 'p-t-35',
          },
          {
            text: 'p-t-40',
          },
          {
            text: 'p-t-45',
          },
          {
            text: 'p-t-50',
          },
        ],
      },
      {
        title: 'Padding Bottom',
        colClass: 'col-xxl-3 col-sm-6',
        item: [
          {
            text: 'p-b-10',
          },
          {
            text: 'p-b-15',
          },
          {
            text: 'p-b-20',
          },
          {
            text: 'p-b-25',
          },
          {
            text: 'p-b-30',
          },
          {
            text: 'p-b-35',
          },
          {
            text: 'p-b-40',
          },
          {
            text: 'p-b-45',
          },
          {
            text: 'p-b-50',
          },
        ],
      },
    ],
  },
];

export const SideMargin: commonSide[] = [
  {
    header: 'Just One Side Margin',
    desc: 'Use all around margin classes like: <code>m-l-* / m-r-* / m-t-* / m-b-*</code>.',
    title: [
      {
        title: 'Margin Left',
        colClass: 'col-xxl-3 col-sm-6',
        item: [
          {
            text: 'm-l-10',
          },
          {
            text: 'm-l-15',
          },
          {
            text: 'm-l-20',
          },
          {
            text: 'm-l-25',
          },
          {
            text: 'm-l-30',
          },
          {
            text: 'm-l-35',
          },
          {
            text: 'm-l-40',
          },
          {
            text: 'm-l-45',
          },
          {
            text: 'm-l-50',
          },
        ],
      },
      {
        title: 'Margin Right',
        colClass: 'col-xxl-3 col-sm-6',
        item: [
          {
            text: 'm-r-10',
          },
          {
            text: 'm-r-15',
          },
          {
            text: 'm-r-20',
          },
          {
            text: 'm-r-25',
          },
          {
            text: 'm-r-30',
          },
          {
            text: 'm-r-35',
          },
          {
            text: 'm-r-40',
          },
          {
            text: 'm-r-45',
          },
          {
            text: 'm-r-50',
          },
        ],
      },
      {
        title: 'Margin Top',
        colClass: 'col-xxl-3 col-sm-6',
        item: [
          {
            text: 'm-t-10',
          },
          {
            text: 'm-t-15',
          },
          {
            text: 'm-t-20',
          },
          {
            text: 'm-t-25',
          },
          {
            text: 'm-t-30',
          },
          {
            text: 'm-t-35',
          },
          {
            text: 'm-t-40',
          },
          {
            text: 'm-t-45',
          },
          {
            text: 'm-t-50',
          },
        ],
      },
      {
        title: 'Margin Bottom',
        colClass: 'col-xxl-3 col-sm-6',
        item: [
          {
            text: 'm-b-10',
          },
          {
            text: 'm-b-15',
          },
          {
            text: 'm-b-20',
          },
          {
            text: 'm-b-25',
          },
          {
            text: 'm-b-30',
          },
          {
            text: 'm-b-35',
          },
          {
            text: 'm-b-40',
          },
          {
            text: 'm-b-45',
          },
          {
            text: 'm-b-50',
          },
        ],
      },
    ],
  },
];

export const margin = [
  {
    text: 'm-10',
  },
  {
    text: 'm-15',
  },
  {
    text: 'm-20',
  },
  {
    text: 'm-25',
  },
  {
    text: 'm-30',
  },
  {
    text: 'm-35',
  },
  {
    text: 'm-40',
  },
  {
    text: 'm-45',
  },
  {
    text: 'm-50',
  },
];

export const fontSizeData: data[] = [
  {
    text: 'Font-size f-14',
    textClass: 'f-14',
  },
  {
    text: 'Font-size f-16',
    textClass: 'f-16',
  },
  {
    text: 'Font-size f-18',
    textClass: 'f-18',
  },
  {
    text: 'Font-size f-20',
    textClass: 'f-20',
  },
  {
    text: 'Font-size f-22',
    textClass: 'f-22',
  },
  {
    text: 'Font-size f-24',
    textClass: 'f-24',
  },
  {
    text: 'Font-size f-26',
    textClass: 'f-26',
  },
  {
    text: 'Font-size f-28',
    textClass: 'f-28',
  },
  {
    text: 'Font-size f-30',
    textClass: 'f-30',
  },
  {
    text: 'Font-size f-32',
    textClass: 'f-32',
  },
  {
    text: 'Font-size f-34',
    textClass: 'f-34',
  },
  {
    text: 'Font-size f-36',
    textClass: 'f-36',
  },
  {
    text: 'Font-size f-38',
    textClass: 'f-38',
  },
  {
    text: 'Font-size f-40',
    textClass: 'f-40',
  },
];

export interface BorderButton {
  label: string;
  border_style: string;
}

export interface BorderConfig {
  title: string;
  short_desc: string;
  button: BorderButton[];
}

export const dashedBorder: BorderConfig[] = [
  {
    title: 'Dashed Border',
    short_desc: 'Use<code> b-width-*</code> and <code> border-s-dashed</code> to dashed border.',
    button: [
      {
        label: 'b-width-1',
        border_style: 'border-s-dashed b-width-1',
      },
      {
        label: 'b-width-2',
        border_style: 'border-s-dashed b-width-3',
      },
      {
        label: 'b-width-3',
        border_style: 'border-s-dashed b-width-3',
      },
    ],
  },
];

export const dottedBorder: BorderConfig[] = [
  {
    title: 'Dotted Border',
    short_desc:
      'Use the<code> b-width-*</code> and <code> border-s-dotted</code> to dotted border.',
    button: [
      {
        label: 'b-width-1',
        border_style: 'border-s-dotted b-width-1',
      },
      {
        label: 'b-width-2',
        border_style: 'border-s-dotted b-width-2',
      },
      {
        label: 'b-width-3',
        border_style: 'border-s-dotted b-width-3',
      },
    ],
  },
];

export const grooveBorder: BorderConfig[] = [
  {
    title: 'Groove Border',
    short_desc:
      'Use the<code> b-width-*</code> and <code> border-s-groove</code> to groove border.',
    button: [
      {
        label: 'b-width-1',
        border_style: 'border-s-groove b-width-1',
      },
      {
        label: 'b-width-2',
        border_style: 'border-s-groove b-width-2',
      },
      {
        label: 'b-width-3',
        border_style: 'border-s-groove b-width-3',
      },
    ],
  },
];

export const ridgeBorder: BorderConfig[] = [
  {
    title: 'Ridge Border',
    short_desc: 'Use the<code> b-width-*</code> and <code> border-s-inset</code> to ridge border.',
    button: [
      {
        label: 'b-width-1',
        border_style: 'border-s-inset b-width-1',
      },
      {
        label: 'b-width-2',
        border_style: 'border-s-inset b-width-2',
      },
      {
        label: 'b-width-3',
        border_style: 'border-s-inset b-width-3',
      },
    ],
  },
];
