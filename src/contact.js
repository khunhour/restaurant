function displayContact(){
    const content = document.querySelector('#content');
    
    const contact = document.createElement('div');
    contact.classList.add("contact");
    content.appendChild(contact);

    const redBackground = document.createElement('div');
    redBackground.classList.add("redBackground");
    contact.appendChild(redBackground);

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contactHeader');
    contactHeader.textContent = "Contact Us";
    redBackground.appendChild(contactHeader);

    const img = document.createElement("img");
    img.setAttribute("src", "./images/dog.webp");
    img.classList.add('contactImage');
    redBackground.appendChild(img);

    const tel = document.createElement("div");
    tel.classList.add("text");
    tel.textContent = "TEL : 012-345-6789";
    redBackground.appendChild(tel);

    const address = document.createElement('div');
    address.classList.add("text");
    address.textContent = "Address:   131-0045, 1-chome-1-2 Oshiage, Sumida City, Tokyo";
    redBackground.appendChild(address);
}
export {displayContact};

//html version of the above
        // <div class="contact">
        //     <div class="redBackground">
        //         <div class="contactHeader">Contact Us</div>
        //         <img class="contactImage" src="images/dog.webp">
        //         <div class="text">Tel :  012-3456-789</div>
        //         <div class="text">Address:   131-0045, 1-chome-1-2 Oshiage, Sumida City, Tokyo</div>
        //     </div>
        // </div>