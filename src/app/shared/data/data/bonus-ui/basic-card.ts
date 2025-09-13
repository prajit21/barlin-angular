export interface card {
  headingClass?: string;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  textClass?: string;
  textClassHeading?: String;
  heading: string;
  title: string;
  desc: string;
}
export interface absoluteCard {
  bgColor: string;
  img: string;
  text: string;
}

export const commonInfoColorCardData: card[] = [
  {
    headerClass: 'bg-info',
    headingClass: 'text-white',
    heading: 'Info Color Header',
    title: 'Web Designer',
    desc: "By following instructions and adding your own unique twist and style, you may apply your imagination as a web designer. The majority of the tasks you'll be assigned will have a specific due date and work description, but the reason you were employed was because they need a specialist to inject some much-needed creativity.",
  },
  {
    bodyClass: 'bg-info',
    textClassHeading: 'text-white',
    heading: 'Info Color Body',
    title: 'UX Designer',
    desc: 'It is the responsibility of the UX designer to make a product or service useful, pleasurable, and accessible. The word "user experience" is used by various industries, although it is most frequently related to digital design for websites and mobile applications.There is no need for coding in user experience design.',
  },
  {
    headerClass: 'pb-0',
    footerClass: 'bg-info',
    heading: 'Info Color Footer',
    textClass: 'text-white',
    title: 'Web Developer',
    desc: 'A programmer who uses the client-server architecture to create World Wide Web applications is known as a web developer. The apps generally employ any general-purpose programming language on the server and HTML, CSS, and JavaScript on the client.',
  },
];

export const commonAbsoluteCardData: absoluteCard[] = [
  {
    bgColor: 'bg-primary',
    img: 'assets/images/blog/img.png',
    text: '<p class="mb-xl-0 mb-sm-4">Absolute Card is made by using <em class="txt-danger">flex-shrink-0, flex-grow-1 & card-absolute </em> classes. you can do any of your designs using these classes. Subtracting the total size of all the flex items from the size of the flex container yields the leftover space.</p>',
  },
  {
    bgColor: 'bg-secondary',
    img: 'assets/images/blog/blog.jpg',
    text: '<p class="mb-xl-0 mb-sm-4">Absolute Card is made by using <em class="txt-danger">flex-shrink-0, flex-grow-1 & card-absolute </em> classes. you can do any of your designs using these classes. Subtracting the total size of all the flex items from the size of the flex container yields the leftover space.</p>',
  },
];
