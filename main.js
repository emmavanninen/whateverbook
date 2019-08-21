const stalkersButton = document.querySelector("#stalkers");
const stalkersList = document.querySelector(".stalkers-list");
const stalkingButton = document.querySelector("#stalking");

const profiles = [
    {
        name: ``,
        bio: ``,
        posts: ``
    },
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
    }
];



stalkersButton.addEventListener("click", function() {
  stalkersList.style.display = "inline";
});

stalkingButton.addEventListener("click", function() {
  stalkersList.style.display = "inline";
});
