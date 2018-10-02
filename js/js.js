
function loadPosts() {
    var posts = document.querySelector(".posts");
    var newPost;

    for (var i = postsToLoad.length - 1; i >= 0; i--) {
        newPost = document.createElement("div");
        newPost.className = "card";
        newPost.innerHTML = '<li class="card-body"><h5 class="card-title">' + postsToLoad[i].authorName + '</h5><h6 class="card-subtitle mb-2 text-muted">' + postsToLoad[i].username + '</h6><p class="card-text">' + postsToLoad[i].content + '</p><a href="#" class="card-link">Likes: ' + postsToLoad[i].likes + '</a></li>';
        posts.appendChild(newPost);
    }

}

function addMeow(content) {
    postsToLoad.push({
        "authorName": currentUser,
        "username": currentUserName,
        "content": content,
        "likes": 0,
    });
}


function loadSuggestedProfiles() {
    var suggestedProfilesList = document.querySelector("#perfilesSugeridos");
    var newItem;
    var newDiv;
    for (var i = 0; i < 3; i++) {
        newItem = document.createElement("li");
        newItem.className = "list-group-item";
        newItem.innerHTML = '<div id="suggestedProfilePic"><img src="' + suggestedProfiles[i].profilePicSrc + '"alt="profile picture"></div><span class="h6">' + suggestedProfiles[i].name + '</span> ' + suggestedProfiles[i].username;
        suggestedProfilesList.appendChild(newItem);
        newButton = document.createElement("button");
        newButton.className = "btn btn-outline-primary my-2 my-sm-0 roundedEdge"
        newButton.type = "submit";
        newButton.innerHTML = "Seguir";
        newItem.appendChild(newButton);
    }
}




function updateNewMeow() {
    var posts = document.querySelector(".posts");
    var newPost;

    newPost = document.createElement("div");
    newPost.className = "card";
    newPost.innerHTML = '<li class="card-body"><h5 class="card-title">' + postsToLoad[postsToLoad.length - 1].authorName + '</h5><h6 class="card-subtitle mb-2 text-muted">' + postsToLoad[postsToLoad.length - 1].username + '</h6><p class="card-text">' + postsToLoad[postsToLoad.length - 1].content + '</p><a href="#" class="card-link">Likes: ' + postsToLoad[postsToLoad.length - 1].likes + '</a></li>';
    // posts.appendChild(newPost);
    posts.insertBefore(newPost, posts.children[0]);
}

const form = document.querySelector("#meowForm");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var formData = new FormData(form);
    var meowContent = formData.get("Meoww");
    addMeow(meowContent);
    updateNewMeow();
});

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    var loginData = new FormData(loginForm);
    currentUserName = "@" + loginData.get("name");
    currentUser = loginData.get("name");
    $('#loginModal').modal('hide');
    updateUserNameDisplay();

});

var currentUser = "Mistery Kitten"
var currentUserName = "@Anonymus Kitten"
var currentUserPic = '<img src="icons/github-logo.png" alt="profile picture"></img>'
function updateUserNameDisplay() {
    var nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.innerHTML = currentUser;
    var userNameDisplay = document.getElementById("userNameDisplay");
    userNameDisplay.innerHTML = currentUserName;
    var currentUserProfilePic = document.getElementById("currentUserProfilePic");
    currentUserProfilePic.innerHTML = currentUserPic;
}



$(document).ready(function () {
    updateUserNameDisplay();
    $('#loginModal').modal('show');

    loadPosts();
    loadSuggestedProfiles();
});