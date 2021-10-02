import { displayHome } from "./home";

function displayMenu(){
    //sushi name and image src and prices
    let sushiInfo = [
        {
            src: "./images/egg.webp",
            name: "Egg Sushi",
            price: "150yen"
        },
        {
            src: "./images/ikura.webp",
            name: "salmon roe sushi",
            price: "150yen"
        },
        {
            src: "./images/octopus.webp",
            name: "octopus Sushi",
            price: "150yen"
        },
        {
            src: "./images/salmon.webp",
            name: "salmon sushi",
            price: "150yen"
        },
        {
            src: "./images/scallop.webp",
            name: "scallop Sushi",
            price: "150yen"
        },
        {
            src: "./images/shrimp.webp",
            name: "shrimp sushi",
            price: "150yen"
        },
        {
            src: "./images/uni.webp",
            name: "sea urchin Sushi",
            price: "150yen"
        },
        {
            src: "./images/yellow.webp",
            name: "yellowtail sushi",
            price: "150yen"
        },
        {
            src: "./images/tuna.webp",
            name: "tuna Sushi",
            price: "150yen"
        },
        {
            src: "./images/sushiRolls.webp",
            name: "salmon sushi rolls",
            price: "150yen"
        }
    ];

    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);

    const redBackground = document.createElement('div');
    redBackground.classList.add('redBackground');
    menu.appendChild(redBackground);

    const menuHeader = document.createElement('div');
    menuHeader.classList.add("menuHeader");
    const cardContainer = document.createElement('div');
    cardContainer.classList.add("cardContainer");
    redBackground.appendChild(menuHeader);
    redBackground.appendChild(cardContainer);

    menuHeader.textContent = "Sushi Menu";

    sushiInfo.forEach((sushi) => {
        const card = document.createElement('div');
        card.classList.add("card");
        cardContainer.appendChild(card);

        const img = document.createElement('img');
        img.setAttribute('src', sushi.src);
        card.appendChild(img);

        const info = document.createElement('div');
        info.classList.add("info");
        info.textContent = sushi.name;
        card.appendChild(info);

        const price = document.createElement('div');
        price.classList.add('info');
        price.textContent = sushi.price;
        card.appendChild(price);
    });
}
export {displayMenu}; 

{/* <div class="menu">
            <div class="redBackground">
                <div class="menuHeader">Sushi Menu</div>
                <div class="cardContainer">
                    <div class="card">
                        <img src="./images/egg.webp">
                        <div class="info">
                            Egg sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/ikura.webp">
                        <div class="info">
                            Salmon roe sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/octopus.webp">
                        <div class="info">
                            octopus sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/salmon.webp">
                        <div class="info">
                            Salmon sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/scallop.webp">
                        <div class="info">
                            Scallop sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/shrimp.webp">
                        <div class="info">
                            Shrimp sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/uni.webp">
                        <div class="info">
                            Sea urchin sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/yellow.webp">
                        <div class="info">
                            yellowtail sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/tuna.webp">
                        <div class="info">
                            Salmon roe sushi
                        </div>
                        <div class="info">150yen</div>
                    </div>
                    <div class="card">
                        <img src="./images/sushiRolls.webp">
                        <div class="info">
                            salmon sushi rolls
                        </div>
                        <div class="info">150yen</div>
                    </div>
                </div>
            </div>
        </div> */}