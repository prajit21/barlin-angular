export interface avatar {
  title: string;
  desc: string;
  class: string;
  data: data[];
}

export interface data {
  img: string;
  imgClass: string;
  status?: string;
  text?: string;
  class?: string;
}

export const sizesAvtarData: avatar[] = [
  {
    title: "Sizes",
    desc: "Use size of avatar like <code>img-* (70/80/90/100)</code> class.",
    class: "avatar",
    data: [
      {
        img: "assets/images/avtar/3.jpg",
        imgClass: "img-100 rounded-circle",
      },
      {
        img: "assets/images/avtar/4.jpg",
        imgClass: "img-90 rounded-circle",
      },
      {
        img: "assets/images/avtar/7.jpg",
        imgClass: "img-80 rounded-circle",
      },
      {
        img: "assets/images/avtar/11.jpg",
        imgClass: "img-70 rounded-circle",
      },
    ],
  },
];

export const statusIndicatorData: avatar[] = [
  {
    title: "Status Indicator",
    desc: "Use status of avatar like<code> status-* (online/offline/dnd)</code>",
    class: "avatar",
    data: [
      {
        img: "assets/images/user/1.jpg",
        imgClass: "img-100 rounded-circle",
        status: "bg-success",
      },
      {
        img: "assets/images/avtar/16.jpg",
        imgClass: "img-90 rounded-circle",
        status: "bg-warning",
      },
      {
        img: "assets/images/avtar/7.jpg",
        imgClass: "img-80 rounded-circle",
        status: "bg-danger",
      },
      {
        img: "assets/images/avtar/3.jpg",
        imgClass: "img-70 rounded-circle",
        status: "bg-success",
      },
    ],
  },
];

export const shapeData: avatar[] = [
  {
    title: "Shapes",
    desc: "Use shapes of avatar like<code> b-r-* (8/30/35/25)</code>",
    class: "avatar",
    data: [
      {
        img: "assets/images/avtar/4.jpg",
        imgClass: "img-100 b-r-8",
      },
      {
        img: "assets/images/avtar/16.jpg",
        imgClass: "img-90 b-r-30",
      },
      {
        img: "assets/images/avtar/3.jpg",
        imgClass: "img-80 b-r-35",
      },
      {
        img: "assets/images/avtar/11.jpg",
        imgClass: "img-70 rounded-circle",
      },
    ],
  },
];

export const ratioData: avatar[] = [
  {
    title: "Ratios",
    desc: "Use shape to avatar using <code>ratio</code> and <code> img-* (50/70/80/90/100)</code> class.",
    class: "avatar ratio",
    data: [
      {
        img: "assets/images/avtar/11.jpg",
        imgClass: "b-r-8 img-100",
      },
      {
        img: "assets/images/avtar/4.jpg",
        imgClass: "b-r-8 img-90",
      },
      {
        img: "assets/images/user/1.jpg",
        imgClass: "b-r-8 img-80",
      },
      {
        img: "assets/images/avtar/16.jpg",
        imgClass: "b-r-8 img-70",
      },
      {
        img: "assets/images/avtar/7.jpg",
        imgClass: "b-r-8 img-50",
      },
    ],
  },
];

export const groupingData = [
  {
    id: 1,
    data: [
      {
        img: "assets/images/avtar/4.jpg",
        imgClass: "img-100 b-r-8",
      },
      {
        img: "assets/images/avtar/16.jpg",
        imgClass: "img-80 b-r-30",
      },
      {
        img: "assets/images/avtar/3.jpg",
        imgClass: "img-50 b-r-35",
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        img: "assets/images/avtar/16.jpg",
        imgClass: "img-60 rounded-circle",
      },
      {
        img: "assets/images/user/1.jpg",
        imgClass: "b-r-8 img-80",
      },
      {
        img: "assets/images/avtar/16.jpg",
        imgClass: "img-60 rounded-circle",
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        img: "assets/images/user/3.jpg",
        imgClass: "img-40 rounded-circle",
      },
      {
        img: "assets/images/user/5.jpg",
        imgClass: "img-40 rounded-circle",
      },
      {
        img: "assets/images/user/1.jpg",
        imgClass: "img-40 rounded-circle",
      },
    ],
  },
];

export const badgeIndicator: avatar[] = [
  {
    title: "Badge-Indicator",
    desc: "Use<code> badge </code>class with avatar to indicate and provide indication.",
    class: "avatar ratio",
    data: [
      {
        img: "assets/images/user/1.jpg",
        imgClass: "b-r-8 img-100",
        text: "A",
        class: "success",
      },
      {
        img: "assets/images/user/16.jpg",
        imgClass: "b-r-8 img-90",
        text: "B",
        class: "warning",
      },
      {
        img: "assets/images/user/7.jpg",
        imgClass: "b-r-8 img-80",
        text: "C",
        class: "danger",
      },
      {
        img: "assets/images/user/3.jpg",
        imgClass: "b-r-8 img-70",
        text: "D",
        class: "success",
      },
    ],
  },
];
