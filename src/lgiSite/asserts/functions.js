function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    documet.getElementById("modal").style.display = "none";
}

function currentSlide(n) {


}

window.scroll({
    top: 2500,
    left: 0,
    behavior: "smooth"
});

windows.scrollBy({
    top:100,
    left: 0,
    behavior: "smooth"
});

document.querySelector('.header').scrollIntoView({
    behavior: 'smooth'
});