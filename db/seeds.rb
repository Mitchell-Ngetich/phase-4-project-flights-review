Airline.destroy_all
Review.destroy_all

puts "start seeding"

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
        airline_id: 1
    },
    {
        title: 'Worse airline',
        description: 'I had an awful time',
        score: 1,
        airline_id: 6
    },
    {
        title: 'Great airline',
        description: 'I had a lovely time',
        score: 5,
        airline_id: 4
    },
    {
        title: 'Good airline',
        description: 'I had a good time',
        score: 4,
        airline_id: 5
    },
    {
        title: 'Fair airline',
        description: 'I had a nice time',
        score: 3,
        airline_id: 3
    },
    {
        title: 'bad airline',
        description: 'I had a bad time',
        score: 2,
        airline_id: 2
    }
])

#users = User.create([
  #{ 
    #username: "mitch",
    #password_digest: "Come"
  #}, 
  #{ 
    #username: "purity_k",
    #password_digest: "22G"
  #},
  #{ 
    #username: "Otieno@g",
    #password_digest: "hsjy" 
  #}, 
  #{ 
    #username: "Alice",
    #password_digest: "Alice@126" 
  #}, 
  #{ 
    #username: "polla",
    #password_digest: "Polla36" 
  #}, 
  #{ 
    #username: "fancy@jeru",
    #password_digest: "gstr@" 
  #}
#])
puts "done seeding"