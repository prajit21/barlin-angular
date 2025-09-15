export interface articlesAndVideos {
  row: number;
  class: string;
  data: data[];
}

export interface data {
  id: number;
  icon: string;
  title: string;
  desc: string;
  class: string;
}

export const articlesAndVideosData: articlesAndVideos[] = [
  {
    row: 1,
    class: "col-xl-4 col-md-6",
    data: [
      {
        id: 1,
        icon: "codepen",
        title: "Using Video",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-sm-12",
      },
      {
        id: 2,
        title: "Vel illum qu",
        icon: "codepen",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-sm-12",
      },
      {
        id: 3,
        title: "Cum sociis natoqu",
        icon: "codepen",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-sm-12",
      },
    ],
  },
  {
    row: 2,
    class: "col-xl-4 col-md-6",
    data: [
      {
        id: 4,
        title: "Donec pede justo",
        icon: "file-text",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-sm-12",
      },
      {
        id: 5,
        title: "Nam quam nunc",
        icon: "file-text",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-sm-12",
      },
      {
        id: 6,
        title: "Using Video",
        icon: "file-text",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-sm-12",
      },
    ],
  },
  {
    row: 3,
    class: "col-xl-4",
    data: [
      {
        id: 7,
        title: "Vel illum qu",
        icon: "youtube",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-xl-12 col-md-6",
      },
      {
        id: 8,
        title: "Cum sociis natoqu",
        icon: "youtube",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-xl-12 col-md-6",
      },
      {
        id: 9,
        title: "Donec pede justo",
        icon: "youtube",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        class: "col-xl-12",
      },
    ],
  },
];

export const browseArticlesData = [
  {
    colClass: "xl-50 col-md-6",
    seeMore: 40,
    title: "Any other legal pages I should know about?",
    data: [
      {
        listData: "They are best treated with common sense.",
      },
      {
        listData: "Policies have wide acceptance editors.",
      },
      {
        listData: "Guidelines are sets of practices supported.",
        tagTitle: "New",
      },
      {
        listData: "Editors should attempt to follow guidelines.",
      },
    ],
  },
  {
    colClass: "xl-50 col-md-6",
    seeMore: 90,
    title: "Does Moment have an API or automatic export?",
    data: [
      {
        listData: "API allows search and download AP Images.",
        tagTitle: "Review",
      },
      {
        listData: "API retrieve breaking news categories.",
      },
      {
        listData: "API retrieves rules for fantasy league.",
        tagTitle: "Articles",
      },
      {
        listData: "Resource API retrieves content produced business.",
      },
    ],
  },
  {
    colClass: "xl-50 col-md-6",
    seeMore: 50,
    title: "How do WordPress Site Maintenance?",
    data: [
      {
        listData: "Make a backup of your WordPress website.",
      },
      {
        listData: "Run a Wordpress security Website check.",
        tagTitle: "Closed",
      },
      {
        listData: "Monitor your search engine optimization.",
      },
      {
        listData: "Set a regular maintenance schedule.",
      },
    ],
  },
  {
    colClass: "xl-50 col-md-6",
    seeMore: 90,
    title: "Can I change my plan later?",
    data: [
      {
        listData: "When an unknown printer took a galley",
        tagTitle: "Popular",
      },
      {
        listData: "You can easily change plans at any time.",
      },
      {
        listData: "you’ll be charged a prorated cover that upgrade.",
      },
      {
        listData: "But also the leap into electronic typesetting,",
      },
    ],
  },
  {
    colClass: "xl-50 col-md-6",
    seeMore: 50,
    title: "How do I pay for Premium Plan?",
    data: [
      {
        listData: "Premium plans are billed as a single yearly payment.",
      },
      {
        listData: "Monthly plan are bill every month of signup.",
      },
      {
        listData: "You can set Monthly or Yearly for Premium plan.",
      },
      {
        listData: "unknown printer took galley.",
        tagTitle: "Closed",
      },
    ],
  },
  {
    colClass: "xl-50 col-md-6",
    seeMore: 26,
    title: "What is your Shopping Policy",
    data: [
      {
        listData: "Many new editors rely on policy interpretations.",
      },
      {
        listData: "Editor continually attempts to find a different policy.",
      },
      {
        listData: "Violation of maintain a neutral point of view.",
        tagTitle: "Article",
      },
      {
        listData: "You double check your sources.",
      },
    ],
  },
  {
    colClass: "xl-50 col-md-6",
    seeMore: 10,
    title: "How can I change the component?",
    data: [
      {
        listData: "You can modify specific component settings.",
        tagTitle: "Review",
      },
      {
        listData: "Click Apply to validate the set preferences.",
      },
      {
        listData: "Following step apply components",
        tagTitle: "Closed",
      },
      {
        listData: "To modify those specific components settings.",
      },
    ],
  },
  {
    colClass: "xl-50 col-md-6",
    seeMore: 21,
    title: "How does it work?",
    data: [
      {
        listData: "To get started with your account.",
      },
      {
        listData: "Compile your theme using gulp",
        tagTitle: "Popular",
      },
      {
        listData: "Users can browse by topic or use visually.",
        tagTitle: "Review",
      },
      {
        listData: "This works through various methods of site tracking",
      },
    ],
  },
  {
    colClass: "xl-100",
    seeMore: 34,
    title: "What is Lorem Ipsum?",
    data: [
      {
        listData: "Language regular existing languages.",
      },
      {
        listData: "Lorem has been the industry standard dummy",
      },
      {
        listData: "Language is not real even ‘Lorem’ does't exist",
      },
      {
        listData: "dummy text that is not meantanything",
        tagTitle: "On hold",
      },
    ],
  },
];
