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
    photoURL: ``,
    posts: `88`
  },
  {
    name: `Cat`,
    bio: `Henlo, you STINKY DOG. go eat bone you UGLY`,
    photoURL: ``,
    posts: `4`
  },
  {
    name: `Emma`,
    bio: `I don't understand coding..`,
    photoURL: ``,
    posts: `10000`
  },
  {
    name: `That bitch from 7th grade`,
    bio: `I'm a drug addict now`,
    photoURL: ``,
    posts: `99`
  },
  {
    name: `Traveler`,
    bio: `It's called Barthelona`,
    photoURL: ``,
    posts: `98327487236`
  },
  {
    name: `Confused`,
    bio: `What`,
    photoURL: ``,
    posts: ``
  }
];


// localStorage.setItem('profiles', JSON.stringify(profiles));

// localStorage.clear('profiles');

let profiles = JSON.parse(localStorage.getItem('profiles')) || profilesData;


