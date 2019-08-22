const stalkersButton = document.querySelector("#stalkers");
console.log(stalkersButton);
const stalkersList = document.querySelector(".stalkers-list");
const stalkingButton = document.querySelector("#stalking");
const stalkingList = document.querySelector(".stalking-list");
const menuBar = document.querySelector(".menubar");
const menuLinks = document.querySelector(".links");
const ul = document.querySelector("ul");
const stalkButton = document.querySelector("#wannastalk-icon");
const photo = document.querySelectorAll(".photo img");


const profiles = [
  {
    name: `Stalky Stalkerson`,
    bio: `I wasn't looking..`,
    photoURL: ``,
    posts: `3`

  },
  {
    name: `The Ex`,
    bio: `I found someone better than you`,
    photoURL: ``,
    posts: `46`
  },
  {
    name: `Neighbor's doggo`,
    bio: `Mlem`,
    photoURL: ``,
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




stalkersButton.addEventListener("click", function() {
  if (stalkersList.style.display === "inline") {
    stalkersList.style.display = "none";
  } else {
    stalkersList.style.display = "inline";
  }
  printProfiles();
});

stalkingButton.addEventListener("click", function() {
  if (stalkingList.style.display === "inline") {
    stalkingList.style.display = "none";
  } else {
    stalkingList.style.display = "inline";
  }
});

function printProfiles() {
  for (let i = 0; i < profiles.length; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = profiles[i].name;
  }
}



menuBar.addEventListener("click", function () {
    if (menuLinks.style.display === "inline") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "inline";
    }
});


stalkButton.addEventListener("click", function () {
  photo.classList.toggle('no-blur');
});


