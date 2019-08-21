const stalkersButton = document.querySelector("#stalkers");
const stalkersList = document.querySelector(".stalkers-list");
const stalkingButton = document.querySelector("#stalking");
const stalkingList = document.querySelector(".stalking-list");
const ul = document.querySelector("ul");

const profiles = [
    {
        name: `Stalky Stalkerson`,
        bio: `I wasn't looking..`,
        posts: `3`
    },
    {
        name: `The Ex`,
        bio: `I found someone better than you`,
        posts: `46`
    },
    {
        name: `Neighbor's doggo`,
        bio: `Mlem`,
        posts: ``
    },
    {
        name: `New Yorker`,
        bio: `Hey I'm walking here!`,
        posts: `88`
    },
    {
        name: `Cat`,
        bio: `Henlo, you STINKY DOG. go eat bone you UGLY`,
        posts: `4`
    },
    {
        name: `Emma`,
        bio: `I don't understand coding..`,
        posts: `10000`
    },
    {
        name: `That bitch from 7th grade`,
        bio: `I'm a drug addict now`,
        posts: `99`
    },
    {
        name: `Traveler`,
        bio: `It's called Barthelona`,
        posts: `98327487236`
    },
    {
        name: `Confused`,
        bio: `What`,
        posts: ``
    }
];





stalkersButton.addEventListener("click", function() {
    if (stalkersList.style.display === "inline") {
        stalkersList.style.display = "none";
    } else{
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



function printProfiles(){
    for (let i = 0; i < profiles.length; i++) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = profiles[i].name;
    }
}

