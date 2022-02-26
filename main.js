let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let logoContent = document.querySelector(".logo_content");

btn.onclick = () => {
    sidebar.classList.toggle("active");
}

btn.addEventListener('click', () => {
    btn.classList.toggle('bx-menu');
    btn.classList.toggle('bx-left-indent');
})
