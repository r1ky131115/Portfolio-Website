let btn = document.querySelector("#btn");
let btnLeft = document.querySelector(".bx-left-indent");
let sidebar = document.querySelector(".sidebar");
let logoContent = document.querySelector(".logo_content");

let btnFlyp = document.querySelector("#flip");
let contFlyp = document.querySelector("#cont-flyp");


btn.onclick = () => {
    sidebar.classList.toggle("active");
}

btn.addEventListener('click', () => {
    btn.classList.toggle('bx-menu');
    btn.classList.toggle('bx-left-indent');
})

btnFlyp.onclick = () => {
    contFlyp.classList.toggle("active");
}