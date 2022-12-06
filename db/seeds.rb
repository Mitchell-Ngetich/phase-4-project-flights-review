Airline.destroy_all
Review.destroy_all

Airline.create([
  { 
    name: "United Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
  }, 
  { 
    name: "Southwest",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  { 
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
  }, 
  { 
    name: "Alaska Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
  }, 
  { 
    name: "JetBlue",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
  }, 
  { 
    name: "American Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
  }
])

reviews = Review.create([
    {
        title: 'Great airline',
        description: 'I had a lovely time',
        score: 5,
        airline: Airline.sixth
    },
    {
        title: 'Worse airline',
        description: 'I had an awful time',
        score: 1,
        airline: Airline.first
    },
    {
        title: 'Great airline',
        description: 'I had a lovely time',
        score: 5,
        airline: Airline.fifth
    },
    {
        title: 'Good airline',
        description: 'I had a good time',
        score: 4,
        airline: Airline.fourth
    },
    {
        title: 'Fair airline',
        description: 'I had a nice time',
        score: 3,
        airline: Airline.third
    },
    {
        title: 'bad airline',
        description: 'I had a lovely time',
        score: 2,
        airline: Airline.second
    }
])