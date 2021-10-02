

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

    const text = document.createElement('div');
    text.classList.add("text");
    greeting.appendChild(text);
    text.innerHTML = 'At Gaijin Sushi, <br> we offer authentic japanese cuisine all made by a renowned "gaijin" chef.<br>Every dish is made with ingredients imported from the city of fukushima.<br>"fresh and non-radioactive"<br>We guarentee you an immersive experience!<br>arigatou gozaimasu.';
}

function displayNav(){
    const content = document.querySelector('#content');
    const nav = document.createElement('nav');
    nav.classList.add("nav");
    content.appendChild(nav);

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const logoIcon = document.createElement('img');
    logoIcon.setAttribute('src', './images/sushi.png');
    logoIcon.setAttribute('alt', 'japan flag');

    const logoText = document.createElement('div');
    logoText.textContent = "gaijin sushi";

    logo.appendChild(logoIcon);
    logo.appendChild(logoText);
    nav.appendChild(logo);

    const listContainer = document.createElement('div');
    const ul = document.createElement('ul');
    ul.classList.add('links');
    listContainer.appendChild(ul);
    nav.appendChild(listContainer);

    let listInfo = [
        {text: "Home", href: "#", id: "home"},
        {text: "Menu", href: "#", id: "menu"},
        {text: "Contact", href: "#", id: "contact"}
    ];

    listInfo.forEach((element) =>{
        const list = document.createElement('li');
        const link = document.createElement('a');
        list.appendChild(link);
        ul.appendChild(list);
        link.classList.add("tab");
        link.setAttribute('href', element.href);
        link.textContent = element.text;
        link.setAttribute('id', element.id);
    });
}

function displayFooter(){
    const content = document.querySelector('#content');
    const footer = document.createElement('footer');
    content.appendChild(footer);

    const div = document.createElement('div');
    footer.appendChild(div);
    div.innerHTML = `created with <span>&hearts;</span> by Khunhour`;

    const github = document.createElement('a');
    github.setAttribute("href", "https://github.com/khunhour/restaurant");
    footer.appendChild(github);

    const img = document.createElement('img');
    img.setAttribute("src", "./images/github.png");
    img.setAttribute("alt", "github logo");
    github.appendChild(img);

    const ref = document.createElement('div');
    ref.classList.add("ref");
    footer.appendChild(ref);

    //slimu photo attribution
    const p = document.createElement('p');
    ref.appendChild(p);

    const photo = document.createTextNode("Animated Photoes Created By ");
    const a = document.createElement('a');

    a.setAttribute("href", "https://slimu.tumblr.com/search/sushi");
    a.textContent = "Slimu";
    
    p.appendChild(photo);
    p.appendChild(a);

    //freepik icon attribution
    const freepik = document.createElement('p');
    freepik.innerHTML = '<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>';
    ref.appendChild(freepik)
}
{/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
export {displayNav, displayHome, displayFooter};

{/* <nav class="nav">
            <div class="logo">
                <img src="images/japan.png" alt="sumo">
                <div>gaijin sushi</div>
            </div>
            <div>
                <ul class="links">
                    <li><a class="home" href="#">Home</a></li>
                    <li><a class="home" href="#">Menu</a></li>
                    <li><a class="home" href="#">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        <div class="main">
            <div class="greeting">
                <div class="header">Welcome to Gaijin Sushi</div>
                <div class="text">At Gaijin Sushi, <br>
                    we offer authentic japanese cuisine all made by a renowned "gaijin" chef.<br>
                    Every dish is made with ingredients imported from the city of fukushima.<br>
                    "fresh and non-radioactive" <br>
                    We guarentee you an immersive experience!<br>
                    arigatou gozaimasu.
                </div>
            </div>
        </div>
        <footer>
            <div>created with <span>&hearts;</span> by khunhour</div>
            <a href="https://github.com/khunhour/restaurant">
                <img src="images/github.png" alt="github icon">
            </a>
            <div class="ref">
                <p>Animated Photos created by <a href="https://slimu.tumblr.com/search/sushi">Slimu</a></p>
                <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</p>
            </p>

        </footer> */}