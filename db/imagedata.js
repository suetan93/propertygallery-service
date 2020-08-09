const faker = require('faker')

let images = [
  [
    {
    _id: 1,
    url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/AreaRoom1.jpg',
    caption: 'Sleep on a cloud! King bed is suspended from the ceiling.',
    verified: faker.random.boolean()
    },
    {
      _id: 2,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/AreaRoom2.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 3,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Bathroom1.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 4,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Bathroom2.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 5,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Bed1.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 6,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Outside1.jpg',
      caption: 'Enjoy the feeling of being in the country and yet you are right downtown in Hilo',
      verified: faker.random.boolean()
    },
    {
      _id: 7,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Hawaii+Set+1/Patio1.jpg',
      caption: '',
      verified: faker.random.boolean()
    }
  ],

  [
    {
      _id: 8,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/Couch1.jpg',
      caption: 'Couch converts into an extra bed',
      verified: faker.random.boolean()
    },
    {
      _id: 9,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/Kitchen1.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 10,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/LivingArea1.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 11,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/LivingArea2.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 12,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/PoolArea1.jpg',
      caption: 'Take a swim!',
      verified: faker.random.boolean()
    },
    {
      _id: 13,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/PoolArea2.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 14,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/WindowView1.jpg',
      caption: 'Goregous ocean view',
      verified: faker.random.boolean()
    }
  ],

  [
    {
      _id: 15,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/bedroom.jpg',
      caption: 'Master bedroom',
      verified: faker.random.boolean()
    },
    {
      _id: 16,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/bedroom2.jpg',
      caption: '',
      verified: faker.random.boolean()
    },

    {
      _id: 17,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/terrace.jpg',
      caption: 'Sunset views from the terrace',
      verified: faker.random.boolean()
    },
    {
      _id: 18,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/Jamaica/terrace2.jpg',
      caption: 'Uptown Studio Suite',
      verified: faker.random.boolean()
    }
  ],

  [
    {
      _id: 19,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/bedroom1.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 20,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/bedroom2.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 21,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/livingroom.jpg',
      caption: 'Living Room',
      verified: faker.random.boolean()
    },
    {
      _id: 22,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/bathroom.jpg',
      caption: 'Bathroom',
      verified: faker.random.boolean()
    },
    {
      _id: 23,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/outsideview.jpg',
      caption: '',
      verified: faker.random.boolean()
    },
    {
      _id: 24,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/roofterrace.jpg',
      caption: 'Rooftop Terrace',
      verified: faker.random.boolean()
    },
    {
      _id: 25,
      url: 'https://propertygallery.s3-us-west-1.amazonaws.com/newyork/lobbybar.jpg',
      caption: 'Lobby Bar',
      verified: faker.random.boolean()
    }
  ]
]

module.exports = images