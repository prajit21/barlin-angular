import {
  facebookData,
  instagramData,
  totalProductData,
  totalProjectData,
  totalSaleData,
  twitterData,
  youtubeData,
} from '../chart/widgets';

export const transactionHistory = [
  {
    icon: 'send',
    color: 'primary',
    title: 'Receipt from Wallet',
    date_time: 'Mar 21,2024, 4:45pm',
    status: 'Completed',
    price: 248.0,
  },
  {
    icon: 'work',
    color: 'secondary',
    title: 'Process refund to',
    date_time: 'Feb 20,2024, 2:10pm',
    status: 'Pending',
    price: 548.0,
  },
  {
    icon: 'graph',
    color: 'success',
    title: 'Sending to Citizen',
    date_time: 'Jun 17,2024, 12:45pm',
    status: 'Verified',
    price: 953.0,
  },
  {
    icon: 'payment-bookmark',
    color: 'warning',
    title: 'Payment From #425',
    date_time: 'Oct 30,2024, 1:31pm',
    status: 'Rejected',
    price: 349.0,
  },
];

export const facebook = {
  image_url: 'assets/images/general-widgets/social/1.png',
  name: 'Facebook',
  friends: '12,098',
  title: 'Likes',
  count: '+22.9%',
  class: 'success',
  chart: facebookData,
};

export const instagram = {
  name: 'Instagram',
  image_url: 'assets/images/general-widgets/social/2.png',
  friends: '15,080',
  title: 'Followers',
  count: '-27.4%',
  class: 'success',
  chart: instagramData,
};

export const twitter = {
  image_url: 'assets/images/general-widgets/social/3.png',
  name: 'X (Twitter)',
  friends: '12,564',
  title: 'Followers',
  count: '+76.10%',
  class: 'success',
  chart: twitterData,
};

export const youtube = {
  image_url: 'assets/images/general-widgets/social/4.png',
  name: 'Youtube',
  friends: '12,564',
  title: 'Followers',
  count: '+62.08%',
  class: 'success',
  chart: youtubeData,
};

export const totalSale = {
  title: 'Total Sale',
  price: '$3654.00',
  chart: totalSaleData,
};

export const totalProject = {
  title: 'Total Project',
  price: '12569',
  chart: totalProjectData,
};

export const totalProduct = {
  title: 'Total Product',
  price: '93M',
  chart: totalProductData,
};
