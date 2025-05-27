var popoverlay = document.querySelector(".overlay");
var popupbox = document.querySelector(".popbox");
var addpopbutton = document.getElementById("show-pop");
var cancelbutton = document.getElementById("cancel-pop");
var addbutton = document.getElementById("add-pop");
var maincontainer = document.querySelector(".container");
var bookname = document.getElementById("bookname");
var bookauthor = document.getElementById("bookauthor");
var description = document.getElementById("description");
var cancel = document.getElementById("cancel");

addpopbutton.addEventListener("click", function() {
    popoverlay.style.display = "block";
    popupbox.style.display = "block";
});

function def(event) {
    event.preventDefault();
}

cancelbutton.addEventListener("click", function() {
    popoverlay.style.display = "none";
    popupbox.style.display = "none";
});

addbutton.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "containerbox");
    div.innerHTML = `
        <h2>${bookname.value}</h2>
        <h3>${bookauthor.value}</h3>
        <p>${description.value}</p>
        <button id="cancel" onclick="disappear(event)">delete</button>
    `;
    maincontainer.appendChild(div);
    popoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function disappear(event) {
    event.target.parentElement.remove();
}
