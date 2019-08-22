const menuBar = document.querySelector(".menubar");
const menuLinks = document.querySelector(".links");
const username = document.querySelector('h1');
const bio = document.querySelector('.biography');
const profilePic = document.querySelector('.profile-picture');


menuBar.addEventListener("click", function () {
    if (menuLinks.style.display === "inline") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "inline";
    }
});


// if (profilesData[0].photoURL !== ``){

// const img = document.createElement('img');
// profilePic.appendChild(img);

// img.src = profilesData[0].photoURL;


// }




// username.innerText = profilesData[0].name;

// bio.innerText = 'Bio: ' + profilesData[0].bio;


