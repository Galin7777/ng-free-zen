export const primaryInfo = {
  langs: [
    {
      key: 'en',
      name:'EN',
    },
    {
      key: 'ru',
      name:'RU',
    },
  ],  
  navigation: [
    {
      name: 'Download',
      key: 'download',
    },
    {
      name: 'Warranty',
      key: 'warranty',
    },
    {
      name: 'Care',
      key: 'care',
    },
    {
      name: 'Cashback',
      key: 'cashback',
    },
    {
      name: 'Clients',
      key: 'clients',
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
      name: 'Rosegal',
      logo: {
        lightSource: './assets/brands/light/1.svg',
        darkSource: './assets/brands/dark/1.svg',
      },
    },
    {
      name: 'Gearbest',
      logo: {
        lightSource: './assets/brands/light/2.svg',
        darkSource: './assets/brands/dark/2.svg',
      },
    },
    {
      name: 'Allegro',
      logo: {
        lightSource: './assets/brands/light/3.svg',
        darkSource: './assets/brands/dark/3.svg',
      },
    },
    {
      name: 'Aliexpress',
      logo: {
        lightSource: './assets/brands/light/4.svg',
        darkSource: './assets/brands/dark/4.svg',
      },
    },
    {
      name: 'Booking.com',
      logo: {
        lightSource: './assets/brands/light/5.svg',
        darkSource: './assets/brands/dark/5.svg',
      },
    },
    {
      name: 'MediaMarkt',
      logo: {
        lightSource: './assets/brands/light/6.svg',
        darkSource: './assets/brands/dark/6.svg',
      },
    },
    {
      name: 'RTVeuroAGD',
      logo: {
        lightSource: './assets/brands/light/7.svg',
        darkSource: './assets/brands/dark/7.svg',
      },
    },
    {
      name: 'Groupon',
      logo: {
        lightSource: './assets/brands/light/8.svg',
        darkSource: './assets/brands/dark/8.svg',
      },
    },
  ],
};

export const secondaryInfo = {
  categories: [
    {
      name: 'Learn',
      links: [
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Help center',
          },
        },
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Join ZEN team',
          },
        },
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Privacy Policy',
          },
        },
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Cookies',
          },
        },
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Terms of use',
          },
        },
      ],
    },
    {
      name: 'Discover',
      links: [
        {
         url: 'https://example.com',
         content: {
          type: 'text',
          data: 'For developers',
        },
        },
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Apple pay',
          },
        },
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Google Pay',
          },
        },
      ],
    },  
    {
      name: 'Offer',
      links: [
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Business',
          },
        },
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Personal',
          },
        },
      ],
    },
    {
      name: 'Language',
      links: [
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'English',
          },
        },
        {
          url: 'https://example.com',
          content: {
            type: 'text',
            data: 'Polish',
          },
        },
      ],
    },
    {
      name: 'Follow us',
      links: [
        {
          url: 'https://example.com',
          content: {
            type: 'image',
            data: './assets/icons/in.svg',
          },
        },
      ],
    },
    {
      name: 'Contact',
      links: [
        {
          url: 'mailto:hello@zen.com',
          content: {
            type: 'text',
            data: 'hello@zen.com',
          },
        },
      ],
    },
  ],
  texts: [
    'Paragraph 1',
    'Paragraph 2',
    'Paragraph 3',
    'Paragraph 4',
    'Paragraph 5',
    'Paragraph 6',
  ],
  developer: {
    url:'https://example.com',
    content:{
      type: 'image',
      data: './assets/icons/developer.svg',
    },
  },
};
