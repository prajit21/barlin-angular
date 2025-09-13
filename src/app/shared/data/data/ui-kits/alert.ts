export interface commonAlert {
  data1: data[];
  data2: data[];
}

export interface data {
  title: string;
  alertClass: string;
  textClass: string;
}

export interface outLinedAlert {
  class: string;
  textColor: string;
  text: string;
  icon: string;
}

export interface alertIconTextAlert {
  class: string;
  textColor: string;
  text: string;
  icon: string;
  buttonText: string;
}

export const darkThemeAlertData = [
  {
    data: [
      {
        type: 'primary',
        title: 'Primary Alert',
        alert: 'alert-primary',
      },
      {
        type: 'secondary',
        title: 'Secondary Alert',
        alert: 'alert-secondary',
      },
      {
        type: 'success',
        title: 'Success Alert',
        alert: 'alert-success',
      },
      {
        type: 'info',
        title: 'Info Alert',
        alert: 'alert-info',
      },
    ],
  },
  {
    data: [
      {
        type: 'warning',
        title: 'Warning Alert',
        alert: 'alert-warning',
      },
      {
        type: 'danger',
        title: 'Danger Alert',
        alert: 'alert-danger',
      },
      {
        type: 'light',
        title: 'Light Alert',
        alert: 'alert-light',
        textDark: true,
      },
      {
        type: 'dark',
        title: 'Dark Alert',
        alert: 'alert-dark',
      },
    ],
  },
];

export const linkColorLightTheme = [
  {
    data: [
      {
        type: 'light-primary',
        title: 'Primary Light Alert',
        alert: 'alert-light-primary',
        class: 'txt-primary',
      },
      {
        type: 'light-secondary',
        title: 'Secondary Light Alert',
        alert: 'alert-light-secondary',
        class: 'txt-secondary',
      },
      {
        type: 'light-success',
        title: 'Success Light Alert',
        alert: 'alert-light-success',
        class: 'txt-success',
      },
      {
        type: 'light-info',
        title: 'Info Light Alert',
        alert: 'alert-light-info',
        class: 'txt-info',
      },
    ],
  },
  {
    data: [
      {
        type: 'light-warning',
        title: 'Warning Light Alert',
        alert: 'alert-light-warning',
        class: 'txt-warning',
      },
      {
        type: 'light-danger',
        title: 'Danger Light Alert',
        alert: 'alert-light-danger',
        class: 'txt-danger',
      },
      {
        type: 'light-light',
        title: 'Light Light Alert',
        alert: 'alert-light-light',
        class: 'txt-dark',
        textDark: true,
      },
      {
        type: 'light-dark',
        title: 'Dark Light Alert',
        alert: 'alert-light-dark',
        class: 'txt-dark',
      },
    ],
  },
];

export const iconsWithAlerts = [
  {
    data: [
      {
        icon_class: 'stroke-primary',
        class: 'alert-primary',
        icons: 'bar-chart-2',
      },
      {
        icon_class: 'stroke-secondary',
        class: 'alert-secondary',
        icons: 'layers',
      },
      {
        icon_class: 'stroke-warning',
        class: 'alert-warning',
        icons: 'alert-triangle',
      },
      {
        icon_class: 'stroke-success',
        class: 'alert-success',
        icons: 'check-square',
      },
    ],
  },
  {
    data: [
      {
        icon_class: 'stroke-danger',
        class: 'alert-danger',
        icons: 'alert-circle',
      },
      {
        icon_class: 'stroke-info',
        class: 'alert-info',
        icons: 'octagon',
      },
      {
        icon_class: 'stroke-dark',
        class: 'alert-light',
        icons: 'thumbs-up',
        textDark: true,
      },
      {
        icon_class: 'stroke-dark',
        class: 'alert-dark',
        icons: 'loader',
      },
    ],
  },
];

export const additionalContentData = [
  {
    colorClass: 'primary',
    title: 'Please! Check your notifications',
    desc: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
    text: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
  },
  {
    colorClass: 'secondary',
    title: 'Something went wrong! Please, chrome update.',
    desc: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
    text: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
  },
  {
    colorClass: 'success',
    title: 'Please! Hidden cameras were not installed.',
    desc: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
    text: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
  },
];
