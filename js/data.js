export const header = {
  navigation: [
    {
      name: 'Download',
      key:'#download',
    },
    {
      name: 'Warranty',
      key:'#warranty',
    },
    {
      name: 'Care',
      key:'#care',
    },
    {
      name: 'Cashback',
      key:'#cashback',
    },
    {
      name: 'Clients',
      key:'#clients',
    },
  ],  
  langs: [
    {
      value: 'en',
      name:'EN',
    },
    {
      value: 'ru',
      name:'RU',
    },
  ],  
};

export const download = {
  title: 'Title text',
  texts: ['Paragraph 1'],
  links: [
    {
      name: 'apple',
      url: 'https://apple.com',
    },
    {
      name: 'google',
      url: 'https://google.com',
    },
  ],
  image: {
    source: './assets/images/1.jpg',
    description: 'Bag and divice',
  },
};

export const warranty = {
  title: 'Title text',
  texts: ['Paragraph 1', 'Paragraph 2'],
  image: {
    source: './assets/images/2.jpg',
    description: 'Basket',
  },
};

export const care = {
  title: 'Title text',
  texts: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
  image: {
    source: './assets/images/3.jpg',
    description: 'Card',
  },
};

export const cashback = {
  title: 'Title text',
  texts: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
  buttonText: 'Order a consultation',
};

export const clients = {
  brands: [
    {
      lightSource: './assets/brands/light/1.svg',
      darkSource: './assets/brands/dark/1.svg',
      description: 'Rosegal',
    },
    {
      lightSource: './assets/brands/light/2.svg',
      darkSource: './assets/brands/dark/2.svg',
      description: 'Allegro',
    },
    {
      lightSource: './assets/brands/light/3.svg',
      darkSource: './assets/brands/dark/3.svg',
      description: 'Booking.com',
    },
    {
      lightSource: './assets/brands/light/4.svg',
      darkSource: './assets/brands/dark/4.svg',
      description: 'Rtveuroagd',
    },
    {
      lightSource: './assets/brands/light/5.svg',
      darkSource: './assets/brands/dark/5.svg',
      description: 'Gearbest',
    },
    {
      lightSource: './assets/brands/light/6.svg',
      darkSource: './assets/brands/dark/6.svg',
      description: 'Aliexpress',
    },
    {
      lightSource: './assets/brands/light/7.svg',
      darkSource: './assets/brands/dark/7.svg',
      description: 'Mediamarkt',
    },
    {
      lightSource: './assets/brands/light/8.svg',
      darkSource: './assets/brands/dark/8.svg',
      description: 'Groupon',
    },
  ],
};

export const footer = {
  columns: [
    {
      title: 'Title learn',
      links: [
        {
          url: 'https://example.com',
          name:'Help center',
        },
        {
          url: 'https://example.com',
          name:'Join ZEN team',
        },
        {
          url: 'https://example.com',
          name:'Privacy Policy',
        },
        {
          url: 'https://example.com',
          name:'Cookies',
        },
        {
          url: 'https://example.com',
          name:'Terms of use',
        },
      ],
    },
    {
      title: 'Title discover',
      links: [
        {
         url: 'https://example.com',
          name:'For developers',
        },
        {
          url: 'https://example.com',
          name:'Apple pay',
        },
        {
          url: 'https://example.com',
          name:'Google Pay',
        },
      ],
    },  
    {
      title: 'Title offer',
      links: [
        {
          url: 'https://example.com',
          name:'Business',
        },
        {
          url: 'https://example.com',
          name:'Personal',
        },
      ],
    },
    {
      title: 'Title language',
      links: [
        {
          url: 'https://example.com',
          name:'English',
        },
        {
          url: 'https://example.com',
          name:'Polish',
        },
      ],
    },
    {
      title: 'Title follow us',
      links: [
        {
          url: 'https://example.com',
          source: './assets/icons/in.svg',
          description: 'Linkedin icon',
        },
      ],
    },
    {
      title: 'Title contact',
      links: [
        {
          url: 'mailto:hello@zen.com',
        },
      ],
    },
  ],
  info: {
    texts: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4' ,'Paragraph 5', 'Paragraph 6'],
    developer: {
      url:'https://example.com',
      source: '../assets/icons/developer.svg',
      description: 'Pci icon',
    },
  },
};
