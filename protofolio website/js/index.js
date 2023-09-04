// Style Switcher
const daynight = document.querySelector(".day-night");

daynight.addEventListener("click", () => {
    daynight.querySelector('i').classList.toggle("fa-moon");
    daynight.querySelector('i').classList.toggle("fa-sun");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        daynight.querySelector('i').classList.add('fa-sun');
    }
    else {
        daynight.querySelector('i').classList.add('fa-moon');
    }
})


// nav
var s = document.querySelectorAll('section');
var nav_element = document.getElementsByClassName("b");
console.log(nav_element);
for (var i = 0; i < nav_element.length; i++) {
    nav_element[i].addEventListener("click", function () {
        var current = document.getElementsByClassName(" active");
        console.log("the active class is: " + current[0].id);
        if (current[0].id == "home") {
            document.querySelector(".home").classList.add("hidden");
        }else if (current[0].id == "about") {
            document.querySelector(".about").classList.add("hidden");
        } else if (current[0].id == "service") {
            document.querySelector(".service").classList.add("hidden");
        } else if (current[0].id == "portfolio") {
            document.querySelector(".portfolio").classList.add("hidden");
        } else if (current[0].id == "contact") {
            document.querySelector(".contact").classList.add("hidden");
        }
        document.querySelector("." + this.id).classList.remove("hidden");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
        document.querySelector(".aside").classList.remove("open");
        aside.querySelector("span").classList.toggle("cross");
        aside.querySelector("span").classList.toggle("stright");

    })
}

var aside = document.querySelector(".nav-togle");
aside.addEventListener("click", () => {
    document.querySelector(".aside").classList.toggle("open");
    aside.querySelector("span").classList.toggle("cross");
    aside.querySelector("span").classList.toggle("stright");
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".aside").classList.contains("open")) {
        document.querySelector(".aside").classList.remove("open");
        aside.querySelector("span").classList.toggle("cross");
        aside.querySelector("span").classList.toggle("stright");
    }
})