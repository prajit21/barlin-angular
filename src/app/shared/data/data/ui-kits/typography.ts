export interface blockQuotes {
  desc: string;
  author: string;
  class: string;
}

export interface textColor {
  line: string;
  addClass: string;
  desc: string;
}

export interface orderList {
  dt: string;
  dd: string;
}

export interface listingTypograhyUL {
  data: string;
}

export const blockQuotesData: blockQuotes[] = [
  {
    desc: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    class: "",
  },
  {
    desc: "In this life we cannot do great things. We can only do small things with great love.",
    author: "Mother Teresa",
    class: "text-center",
  },
  {
    desc: "Live in the sunshine, swim the sea, drink the wild air.",
    author: "Ralph Waldo Emerson",
    class: "text-end",
  },
];
