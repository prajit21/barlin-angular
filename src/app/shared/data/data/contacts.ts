export interface contacts {
  id: number;
  title: string;
  value?: string;
  type: string;
  totalContact?: number;
  data?: contactDetails[];
}

export interface contactDetails {
  id: number;
  active: boolean;
  img: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob?: string;
  personality?: string;
  city?: string;
  mobile?: string;
  email: string;
  website?: string;
  interest?: string;
}

export const contactData: contacts[] = [
  {
    id: 1,
    title: "Personal",
    value: "personal",
    type: "views",
    totalContact: 5,
    data: [
      {
        id: 1,
        active: true,
        img: "assets/images/user/2.png",
        firstName: "Bucky",
        lastName: "Barnes",
        email: "barnes@gmail.com",
        gender: "Male",
        dob: "18 May 1994",
        personality: "Cool",
        city: "moline acres",
        mobile: "+0 1800 76855",
        website: "www.test.com",
        interest: "photography",
      },
      {
        id: 2,
        active: false,
        img: "assets/images/user/8.jpg",
        firstName: "Comeren",
        lastName: "Diaz",
        email: "comeren@gmail.com",
        gender: "Female",
        dob: "7 Feb 1995",
        personality: "Cool",
        city: "Delhi",
        mobile: "+0 1800 55812",
        website: "www.cometest@.com",
        interest: "sports",
      },
      {
        id: 3,
        active: false,
        img: "assets/images/user/1.jpg",
        firstName: "Issa",
        lastName: "Bell",
        email: "issabell@gmail.com",
        gender: "Male",
        dob: "20 Jul 1993",
        personality: "Cool",
        city: "Mumbai",
        mobile: "+0 1800 87412",
        website: "www.belltest@.com",
        interest: "cooking",
      },
      {
        id: 4,
        active: false,
        img: "assets/images/user/14.png",
        firstName: "Andew",
        lastName: "Jon",
        email: "andewjon@gmail.com",
        gender: "Male",
        dob: "25 Aug 1996",
        personality: "Cool",
        city: "Amreli",
        mobile: "+0 1800 79877",
        website: "www.test@.com",
        interest: "photography",
      },
      {
        id: 5,
        active: false,
        img: "assets/images/user/5.jpg",
        firstName: "Jason",
        lastName: "Borne",
        email: "jasonb@gmail.com",
        gender: "Male",
        mobile: "+0 1800 11547",
        personality: "Cool",
        city: "Delhi",
        website: "www.jason@.com",
        interest: "photography",
      },
      {
        id: 6,
        active: false,
        img: "assets/images/avtar/11.jpg",
        firstName: "Monty",
        lastName: "Carlo",
        email: "monty@gmail.com",
        gender: "Male",
        dob: "12 Nov 1994",
        personality: "Cool",
        city: "Amreli",
        mobile: "+0 1800 87944",
        website: "www.mon@.com",
        interest: "sports",
      },
      {
        id: 7,
        active: false,
        img: "assets/images/avtar/16.jpg",
        firstName: "Brock",
        lastName: "Lee",
        email: "lee@gmail.com",
        gender: "Male",
        dob: "8 Dec 1992",
        personality: "Cool",
        city: "Ahemdabad",
        mobile: "+0 1800 58712",
        website: "www.lee.com",
        interest: "photography",
      },
    ],
  },
  {
    id: 2,
    title: "Organization",
    value: "organization",
    totalContact: 10,
    type: "tag",
    data: [
      {
        id: 1,
        active: true,
        img: "assets/images/user/user.png",
        firstName: "Mark",
        lastName: "jecno",
        gender: "Male",
        email: "markjecno@gmail.com",
      },
      {
        id: 2,
        active: false,
        img: "assets/images/user/3.jpg",
        firstName: "Jason",
        lastName: "Borne",
        gender: "Female",
        email: "jasonb@gmail.com",
      },
      {
        id: 3,
        active: false,
        img: "assets/images/user/4.jpg",
        firstName: "Sarah",
        lastName: "Loren",
        gender: "Female",
        email: "barnes@gmail.com",
      },
      {
        id: 4,
        active: false,
        img: "assets/images/user/10.jpg",
        firstName: "Andew",
        lastName: "Jon",
        gender: "Female",
        email: "andrewj@gmail.com",
      },
    ],
  },
  {
    id: 3,
    totalContact: 10,
    type: "tag",
    title: "Follow Up",
  },
  {
    id: 4,
    totalContact: 10,
    type: "tag",
    title: "Favorites",
  },
  {
    id: 5,
    totalContact: 10,
    type: "tag",
    title: "Ideas",
  },
  {
    id: 6,
    totalContact: 10,
    type: "tag",
    title: "Important",
  },
  {
    id: 7,
    totalContact: 10,
    type: "tag",
    title: "Business",
  },
  {
    id: 8,
    totalContact: 10,
    type: "tag",
    title: "Holidays",
  },
];
