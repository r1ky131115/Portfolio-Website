let body = document.querySelector("body"),
    home = document.querySelector("#home"),
    image = document.querySelector(".image img"),
    sidebar = document.querySelector("#sidebar"),
    btnToggle = document.querySelector("#btn"),
    languageSwitch = document.querySelector("#mode-language"),
    themeSwitch = document.querySelector("#mode-theme"),
    textTheme = document.querySelector("#text-theme"),
    textLenguage = document.querySelector("#text-language");

var options = {
    strings: ["Ricardo Aguirre"],
    typeSpeed: 75,
    startDelay: 300,
    showCursor: false
}

const typed = new Typed('.typed', options);

themeSwitch.addEventListener("click", () => {
    body.classList.toggle('ligth');
    
    if(body.classList.contains('ligth')) {
        textTheme.innerHTML = 'Ligth Mode';
        image.src = "/images/Logo_fondo_ligth.png";
        localStorage.setItem('Ligth-mode', 'true');
    } else {
        textTheme.innerHTML = 'Dark Mode';
        image.src = "/images/Logo_fondo_dark.png";
        localStorage.setItem('Ligth-mode', 'false');
    }
})

const textsToChanche = document.querySelectorAll('[data-section]');

const changeLanguaje = async (language) => {
    const requestJson = await fetch(`./lenguajes/${language}.json`);
    const texts = await requestJson.json();
    
    for(const textToChanche of textsToChanche) {
        const section = textToChanche.dataset.section;
        const value = textToChanche.dataset.value;
        
        textToChanche.innerHTML = texts[section][value];
    }
}

languageSwitch.addEventListener("click", () => {
    body.classList.toggle('spain');
    
    if(body.classList.contains('spain')) {
        textLenguage.innerHTML = 'Español';
        changeLanguaje('es');
    } else {
        textLenguage.innerHTML = 'English';
        changeLanguaje('en');
    }
})

if ((window.innerWidth - 300) > 400) {
    btnToggle.addEventListener("click", () => {
        sidebar.classList.toggle('close');
    })
} else {
    sidebar.classList.add('close');
}


if (localStorage.getItem('Ligth-mode') === 'true') {
    body.classList.add('ligth');
    image.src = "/images/Logo_fondo_ligth.png";
    textTheme.innerHTML = 'Ligth Mode';
} else {
    body.classList.remove('ligth');
    image.src = "/images/Logo_fondo_dark.png";
    textTheme.innerHTML = 'Dark Mode';
}


const skills = document.querySelectorAll('div.card div.content i.bx');

skills.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('bx-tada')) {
            e.classList.remove('bx-tada')
        } else {
            e.classList.add('bx-tada')
        }
    })
});

