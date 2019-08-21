
const addProfileButton = document.querySelector(".add-profile-button");
const usernameInput = document.querySelector(".username");
const bioInput = document.querySelector(".bio");
const photoInput = document.querySelector(".photourl");



// Add new profile
addProfileButton.addEventListener("click", function () {
    let newUsername = usernameInput.value;
    let newBio = bioInput.value;
    let newPhoto = photoInput.value;
    let newProfileObject = { name: newUsername, bio: newBio, photoURL: newPhoto, posts: ``,}
    console.log(newProfileObject);

    profiles.unshift(newProfileObject);
});

