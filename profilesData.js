const profilesData = [
  {
    name: `The Ex`,
    bio: `I found someone better than you`,
      photoURL: `https://freedesignfile.com/upload/2016/03/Lovers-silhouette-with-moon-and-tree-vector-06.jpg`,
    posts: `46`
  },
  {
    name: `Neighbor's doggo`,
    bio: `Mlem`,
    photoURL: `./assets/doggo.jpeg`,
    posts: ``
  },
  {
    name: `New Yorker`,
    bio: `Hey I'm walking here!`,
    photoURL: `./assets/pedestrian.png`,
    posts: `88`
  },
  {
    name: `Cat`,
    bio: `Henlo, you STINKY DOG. go eat bone you UGLY`,
    photoURL: `./assets/kitty.jpeg`,
    posts: `4`
  },
  {
    name: `Emma`,
    bio: `I don't understand coding..`,
    photoURL: `./assets/confused-emma.jpg`,
    posts: `10000`
  },
  {
    name: `That bitch from 7th grade`,
    bio: `I'm a drug addict now`,
      photoURL: `https://i.pinimg.com/originals/b9/9e/41/b99e4134b7db91032c2f000255c46f14.jpg`,
    posts: `99`
  },
  {
    name: `Traveler`,
      bio: `It's pronounced Barthelona`,
    photoURL: `./assets/traveler.jpg`,
    posts: `98327487236`    
  },
  {
    name: `Confused`,
    bio: `What`,
      photoURL: `https://dazedimg-dazedgroup.netdna-ssl.com/786/azure/dazed-prod/1240/8/1248573.jpg`,
    posts: ``
  }
];


// localStorage.setItem('profiles', JSON.stringify(profiles));

// localStorage.clear('profiles');

let profiles = JSON.parse(localStorage.getItem('profiles')) || profilesData;


