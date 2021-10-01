

function displayHome (){
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.classList.add("main");
    content.appendChild(main);

    const greeting = document.createElement('div');
    greeting.classList.add("greeting");
    main.appendChild(greeting);

    const header = document.createElement('div');
    header.classList.add("header");
    greeting.appendChild(header);
    header.textContent = "Welcome to Gaijin Sushi";

    const text = document.createElement('pre');
    text.classList.add("text");
    greeting.appendChild(text);
    text.textContent = 'At Gaijin Sushi, \nwe offer authentic japanese cuisine all made by a renowned "gaijin" chef.\nEvery dish is made with ingredients imported from the city of fukushima.\n"fresh and non-radioactive"\nWe guarentee you an immersive experience!\narigatou gozaimasu.';

}

function displayNav(){
    const content = document.querySelector('#content');
    const nav = document.createElement('nav');
    nav.classList.add("nav");
    content.appendChild(nav);

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const logoIcon = document.createElement('img');
    logoIcon.setAttribute('src', './dist/images/japan.png');
    logoIcon.setAttribute('alt', 'japan flag');

    const logoText = document.createElement('div');
    logoText.textContent = "gaijin sushi";

    logo.appendChild(logoIcon);
    logo.appendChild(logo.text);
    nav.appendChild(logo);

    const listContainer = document.createElement('div');
    const ul = document.createElement('ul');
    ul.classList.add('links');
    listContainer.appendChild(ul);
    nav.appendChild(listContainer);

    let listInfo = [
        {text: "Home", href: "#"},
        {text: "Menu", href: "#"},
        {text: "Contact Us", href: "#"}
    ];

    listInfo.forEach((element) =>{
        const list = document.createElement('li');
        const link = document.createElement('a');
        list.appendChild(link);
        ul.appendChild(list);
        link.setAttribute('href', element.href);
        link.textContent = element.text;
    });
}

function displayFooter(){
    const content = document.querySelector('#content');
    const footer = document.createElement('footer');
    content.appendChild(footer);

    const span = document.createElement('span');
    span.textContent = "&hearts;";

    const div = document.createElement('div');
    footer.appendChild(div);
    div.textContent = `created with ${span} by Khunhour`;

    const github = document.createElement('a');
    github.setAttribute("href", "https://github.com/khunhour/restaurant");
    footer.appendChild(github);

    const img = document.createElement('img');
    img.setAttribute("src", ".dist/images/github.png");
    img.setAttribute("alt", "github logo");
    github.appendChild(img);

    const p = document.createElement('p');
    footer.appendChild('p');

    const a = document.createElement('a');
    a.setAttribute("href", "https://slimu.tumblr.com/search/sushi");
    a.textContent = "Slimu";
    p.textContent = `Animited Photoes Created By ${a}`;
}