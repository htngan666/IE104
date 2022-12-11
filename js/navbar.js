const btnMore = document.querySelector(".showNav span");
const more = document.querySelector(".gap");
btnMore.addEventListener("click", function () {
    if (document.querySelector(".hide-mobile")) more = more.classList.remove("hide-mobile");
    else more = more.classList.add("hide-mobile");
});