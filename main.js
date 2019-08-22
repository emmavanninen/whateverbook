const stalkersButton = document.querySelector("#stalkers");
const stalkersList = document.querySelector(".stalkers-list");
const stalkingButton = document.querySelector("#stalking");
const stalkingList = document.querySelector(".stalking-list");
const menuBar = document.querySelector(".menubar");
const menuLinks = document.querySelector(".links");
const ul = document.querySelector("ul");
const stalkButton = document.querySelector("#wannastalk-icon");
const photo = document.querySelectorAll(".photo img");


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
    li.addEventListener('click', function(){
      openProfile();
    });
    let info = profiles[i];
  }
}


menuBar.addEventListener("click", function() {
  if (menuLinks.style.display === "inline") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "inline";
  }
});


const profileWindow = document.querySelector('.profile-window');
const nickname = document.querySelector('h2');
const bio = document.querySelector('.biography');
const profilePic = document.querySelector('.profile-picture');



function findTarget (findMatch){
  for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].name === findMatch.innerText) {
      const targetProfile = profiles[i];
      // console.log(targetProfile);
      return targetProfile;
    }
  }
}

function openProfile() {


  while (profilePic.hasChildNodes()) {
    profilePic.firstChild.remove();
    nickname.innerText = ``;
    bio.innerText = ``;
  }


  const img = document.createElement('img');
  profilePic.appendChild(img);
  let targetProfile = findTarget(event.target);



  img.src = targetProfile.photoURL;
  nickname.innerText = targetProfile.name;
  bio.innerText = 'Bio: ' + targetProfile.bio;
  
  if (profileWindow.style.display === "inline") {
    profileWindow.style.display = "none";
  } else {
    profileWindow.style.display = "inline";
  }

};





// stalkButton.addEventListener("click", function() {
//   photo.classList.toggle("no-blur");
// });