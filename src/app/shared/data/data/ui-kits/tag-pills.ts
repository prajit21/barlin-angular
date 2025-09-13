export interface commonTagPills {
  id: number;
  header: string;
  desc: string;
  data: data[];
}

export interface data {
  class: string;
  text?: string;
  icon?: string;
}

export const commonTagPillsData: commonTagPills[] = [
  {
    id: 1,
    header: 'Badges contextual variations',
    desc: 'Use<code> badge </code>class to make more badges.',
    data: [
      {
        class: 'badge badge-primary',
        text: 'Primary',
      },
      {
        class: 'badge badge-secondary',
        text: 'Secondary',
      },
      {
        class: 'badge badge-success',
        text: 'Success',
      },
      {
        class: 'badge badge-info',
        text: 'Info',
      },
      {
        class: 'badge badge-warning',
        text: 'Warning',
      },
      {
        class: 'badge badge-danger',
        text: 'Danger',
      },
      {
        class: 'badge badge-light text-dark',
        text: 'Light',
      },
      {
        class: 'badge badge-dark tag-pills-sm-mb',
        text: 'Dark',
      },
    ],
  },
  {
    id: 2,
    header: 'Badges Outline Contextual Variations',
    desc: 'Use<code> badge </code>class to make more badges.',
    data: [
      {
        class: 'badge badge-b-primary txt-primary',
        text: 'Primary',
      },
      {
        class: 'badge badge-b-secondary txt-secondary',
        text: 'Secondary',
      },
      {
        class: 'badge badge-b-success txt-success',
        text: 'Success',
      },
      {
        class: 'badge badge-b-info txt-info',
        text: 'Info',
      },
      {
        class: 'badge badge-b-warning txt-warning',
        text: 'Warning',
      },
      {
        class: 'badge badge-b-danger txt-danger',
        text: 'Danger',
      },
      {
        class: 'badge badge-b-light txt-dark',
        text: 'Light',
      },
      {
        class: 'badge badge-b-dark txt-dark',
        text: 'Dark',
      },
    ],
  },
  {
    id: 3,
    header: 'Pill Contextual Variations',
    desc: 'Use<code> rounded-pill</code>class to make badges with background (badge-*) more rounded with a larger <code>border-radius</code>.',
    data: [
      {
        class: 'badge rounded-pill badge-primary',
        text: 'Primary',
      },
      {
        class: 'badge rounded-pill badge-secondary',
        text: 'Secondary',
      },
      {
        class: 'badge rounded-pill badge-success',
        text: 'Success',
      },
      {
        class: 'badge rounded-pill badge-info',
        text: 'Info',
      },
      {
        class: 'badge rounded-pill badge-warning',
        text: 'Warning',
      },
      {
        class: 'badge rounded-pill badge-danger',
        text: 'Danger',
      },
      {
        class: 'badge rounded-pill badge-light text-dark',
        text: 'Light',
      },
      {
        class: 'badge rounded-pill badge-dark  tag-pills-sm-mb',
        text: 'Dark',
      },
    ],
  },
  {
    id: 4,
    header: 'Pill Outline Variations',
    desc: 'Use<code> rounded-pill</code> class to make badges with background (badge-b-*) more rounded with a larger <code>border-radius</code>.',
    data: [
      {
        class: 'badge rounded-pill txt-primary badge-b-primary',
        text: 'Primary',
      },
      {
        class: 'badge rounded-pill txt-secondary badge-b-secondary',
        text: 'Secondary',
      },
      {
        class: 'badge rounded-pill txt-success badge-b-success',
        text: 'Success',
      },
      {
        class: 'badge rounded-pill txt-info badge-b-info',
        text: 'Info',
      },
      {
        class: 'badge rounded-pill txt-warning badge-b-warning',
        text: 'Warning',
      },
      {
        class: 'badge rounded-pill txt-danger badge-b-danger',
        text: 'Danger',
      },
      {
        class: 'badge rounded-pill txt-dark badge-b-light',
        text: 'Light',
      },
      {
        class: 'badge rounded-pill txt-dark badge-b-dark',
        text: 'Dark',
      },
    ],
  },
  {
    id: 5,
    header: 'Number Of Badges',
    desc: 'Use<code> badge</code> class to make square badges with numbers.',
    data: [
      {
        class: 'badge badge-primary',
        text: '1',
      },
      {
        class: 'badge badge-secondary',
        text: '2',
      },
      {
        class: 'badge badge-success',
        text: '3',
      },
      {
        class: 'badge badge-info',
        text: '4',
      },
      {
        class: 'badge badge-warning',
        text: '5',
      },
      {
        class: 'badge badge-danger',
        text: '6',
      },
      {
        class: 'badge badge-light text-dark',
        text: '7',
      },
      {
        class: 'badge badge-dark',
        text: '8',
      },
    ],
  },
  {
    id: 6,
    header: 'Number Of Pill Badges',
    desc: 'Use<code> rounded-circle</code> class to make rounded badges with numbers.',
    data: [
      {
        class: 'badge rounded-circle badge-p-space badge-primary',
        text: '1',
      },
      {
        class: 'badge rounded-circle badge-p-space badge-secondary',
        text: '2',
      },
      {
        class: 'badge rounded-circle badge-p-space badge-success',
        text: '3',
      },
      {
        class: 'badge rounded-circle badge-p-space badge-info',
        text: '4',
      },
      {
        class: 'badge rounded-circle badge-p-space badge-warning',
        text: '5',
      },
      {
        class: 'badge rounded-circle badge-p-space badge-danger',
        text: '6',
      },
      {
        class: 'badge rounded-circle badge-p-space badge-light text-dark',
        text: '7',
      },
      {
        class: 'badge rounded-circle badge-p-space badge-dark',
        text: '8',
      },
    ],
  },
  {
    id: 7,
    header: 'Badge Tag With Icons',
    desc: 'Use<code> badge </code> class to make square badges with icons.',
    data: [
      {
        class: 'badge b-ln-height badge-primary',
        icon: 'dollar-sign',
      },
      {
        class: 'badge b-ln-height badge-secondary',
        icon: 'headphones',
      },
      {
        class: 'badge b-ln-height badge-success',
        icon: 'link',
      },
      {
        class: 'badge b-ln-height badge-info',
        icon: 'github',
      },
      {
        class: 'badge b-ln-height badge-warning',
        icon: 'award',
      },
      {
        class: 'badge b-ln-height badge-danger',
        icon: 'activity',
      },
      {
        class: 'badge b-ln-height badge-light text-dark',
        icon: 'heart',
      },
      {
        class: 'badge b-ln-height badge-dark',
        icon: 'mail',
      },
    ],
  },
  {
    id: 8,
    header: 'Rounded Pills with Icons',
    desc: 'Use<code> rounded-circle </code> class to make rounded badges with icons.',
    data: [
      {
        class: 'badge rounded-circle p-2 badge-primary',
        icon: 'dollar-sign',
      },
      {
        class: 'badge rounded-circle p-2 badge-secondary',
        icon: 'headphones',
      },
      {
        class: 'badge rounded-circle p-2 badge-success',
        icon: 'link',
      },
      {
        class: 'badge rounded-circle p-2 badge-info',
        icon: 'github',
      },
      {
        class: 'badge rounded-circle p-2 badge-warning',
        icon: 'award',
      },
      {
        class: 'badge rounded-circle p-2 badge-danger',
        icon: 'activity',
      },
      {
        class: 'badge rounded-circle p-2 badge-light text-dark',
        icon: 'heart',
      },
      {
        class: 'badge rounded-circle p-2 badge-dark tag-pills-sm-mb',
        icon: 'mail',
      },
    ],
  },
];

export const badgeButtonData = [
  {
    text: 'Messages',
    colorClass: 'primary',
    icon: 'mail',
  },
  {
    text: 'Notifications',
    colorClass: 'secondary',
    icon: 'bell',
  },
  {
    text: 'Update available',
    colorClass: 'success',
    icon: 'settings',
  },
  {
    text: 'Playing Now',
    colorClass: 'info',
    icon: 'music',
  },
  {
    text: '1.2 GB Used',
    colorClass: 'warning text-dark',
    icon: 'alert-triangle',
  },
];

export const imageBadges = [
  {
    image_url: 'assets/images/dashboard/user/1.png',
    class: 'primary',
  },
  {
    image_url: 'assets/images/dashboard/user/2.png',
    class: 'secondary',
  },
  {
    image_url: 'assets/images/dashboard/user/3.png',
    class: 'success',
  },
  {
    image_url: 'assets/images/dashboard/user/4.png',
    class: 'danger',
  },
  {
    image_url: 'assets/images/dashboard/user/5.png',
    class: 'warning',
  },
  {
    image_url: 'assets/images/dashboard/user/6.png',
    class: 'info',
  },
  {
    image_url: 'assets/images/dashboard/user/7.png',
    class: 'light',
  },
  {
    image_url: 'assets/images/dashboard/user/16.png',
    class: 'dark',
  },
];

export const closeBadges = [
  {
    class: 'primary',
    iconClass: 'ms-1 stroke-primary',
  },
  {
    class: 'secondary',
    iconClass: 'ms-1 stroke-secondary',
  },
  {
    class: 'success',
    iconClass: 'ms-1 stroke-success',
  },
  {
    class: 'danger',
    iconClass: 'ms-1 stroke-danger',
  },
  {
    class: 'warning',
    iconClass: 'ms-1 stroke-warning',
  },
  {
    class: 'info',
    iconClass: 'ms-1 stroke-info',
  },
  {
    class: 'light',
    iconClass: 'ms-1 stroke-light',
  },
  {
    class: 'dark',
    iconClass: 'ms-1 stroke-dark',
  },
];

export const imageWithCloseBadges = [
  {
    class: 'primary',
    iconClass: 'stroke-primary',
    image_url: 'assets/images/dashboard-2/user/1.jpg',
  },
  {
    class: 'secondary',
    iconClass: 'stroke-secondary',
    image_url: 'assets/images/dashboard-2/user/2.jpg',
  },
  {
    class: 'success',
    iconClass: 'stroke-success',
    image_url: 'assets/images/dashboard-2/user/3.jpg',
  },
  {
    class: 'danger',
    iconClass: 'stroke-danger',
    image_url: 'assets/images/dashboard-2/user/4.jpg',
  },
  {
    class: 'warning',
    iconClass: 'stroke-warning',
    image_url: 'assets/images/dashboard-2/user/5.png',
  },
  {
    class: 'info',
    iconClass: 'stroke-info',
    image_url: 'assets/images/dashboard/user/16.png',
  },
  {
    class: 'light',
    iconClass: 'stroke-light',
    image_url: 'assets/images/dashboard/user/17.png',
  },
  {
    class: 'dark',
    iconClass: 'stroke-dark',
    image_url: 'assets/images/dashboard/user/19.png',
  },
];
