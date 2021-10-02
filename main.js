(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("main"),e.appendChild(t);const n=document.createElement("div");n.classList.add("greeting"),t.appendChild(n);const a=document.createElement("div");a.classList.add("header"),n.appendChild(a),a.textContent="Welcome to Gaijin Sushi";const c=document.createElement("div");c.classList.add("text"),n.appendChild(c),c.innerHTML='At Gaijin Sushi, <br> we offer authentic japanese cuisine all made by a renowned "gaijin" chef.<br>Every dish is made with ingredients imported from the city of fukushima.<br>"fresh and non-radioactive"<br>We guarentee you an immersive experience!<br>arigatou gozaimasu.'}function t(){const e=document.querySelector("#content"),t=document.createElement("nav");t.classList.add("nav"),e.appendChild(t);const n=document.createElement("div");n.classList.add("logo");const a=document.createElement("img");a.setAttribute("src","./images/sushi.png"),a.setAttribute("alt","japan flag");const c=document.createElement("div");c.textContent="gaijin sushi",n.appendChild(a),n.appendChild(c),t.appendChild(n);const d=document.createElement("div"),i=document.createElement("ul");i.classList.add("links"),d.appendChild(i),t.appendChild(d),[{text:"Home",href:"#",id:"home"},{text:"Menu",href:"#",id:"menu"},{text:"Contact",href:"#",id:"contact"}].forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");t.appendChild(n),i.appendChild(t),n.classList.add("tab"),n.setAttribute("href",e.href),n.textContent=e.text,n.setAttribute("id",e.id)}))}function n(){const e=document.querySelector("#content"),t=document.createElement("footer");e.appendChild(t);const n=document.createElement("div");t.appendChild(n),n.innerHTML="created with <span>&hearts;</span> by Khunhour";const a=document.createElement("a");a.setAttribute("href","https://github.com/khunhour/restaurant"),t.appendChild(a);const c=document.createElement("img");c.setAttribute("src","./images/github.png"),c.setAttribute("alt","github logo"),a.appendChild(c);const d=document.createElement("div");d.classList.add("ref"),t.appendChild(d);const i=document.createElement("p");d.appendChild(i);const s=document.createTextNode("Animated Photoes Created By "),o=document.createElement("a");o.setAttribute("href","https://slimu.tumblr.com/search/sushi"),o.textContent="Slimu",i.appendChild(s),i.appendChild(o);const r=document.createElement("p");r.innerHTML='<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>',d.appendChild(r)}function a(a){document.querySelector("#content").textContent="",t(),document.querySelector(`#${a.target.id}`).classList.add("underline"),c(),"home"===a.target.id?e():"menu"===a.target.id?function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menu"),e.appendChild(t);const n=document.createElement("div");n.classList.add("redBackground"),t.appendChild(n);const a=document.createElement("div");a.classList.add("menuHeader");const c=document.createElement("div");c.classList.add("cardContainer"),n.appendChild(a),n.appendChild(c),a.textContent="Sushi Menu",[{src:"./images/egg.webp",name:"Egg Sushi",price:"150yen"},{src:"./images/ikura.webp",name:"salmon roe sushi",price:"150yen"},{src:"./images/octopus.webp",name:"octopus Sushi",price:"150yen"},{src:"./images/salmon.webp",name:"salmon sushi",price:"150yen"},{src:"./images/scallop.webp",name:"scallop Sushi",price:"150yen"},{src:"./images/shrimp.webp",name:"shrimp sushi",price:"150yen"},{src:"./images/uni.webp",name:"sea urchin Sushi",price:"150yen"},{src:"./images/yellow.webp",name:"yellowtail sushi",price:"150yen"},{src:"./images/tuna.webp",name:"tuna Sushi",price:"150yen"},{src:"./images/sushiRolls.webp",name:"salmon sushi rolls",price:"150yen"}].forEach((e=>{const t=document.createElement("div");t.classList.add("card"),c.appendChild(t);const n=document.createElement("img");n.setAttribute("src",e.src),t.appendChild(n);const a=document.createElement("div");a.classList.add("cardText"),t.appendChild(a);const d=document.createElement("div");d.classList.add("info"),d.textContent=e.name,a.appendChild(d);const i=document.createElement("div");i.classList.add("info"),i.textContent=e.price,a.appendChild(i)}))}():"contact"===a.target.id&&function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contact"),e.appendChild(t);const n=document.createElement("div");n.classList.add("redBackground"),t.appendChild(n);const a=document.createElement("div");a.classList.add("contactHeader"),a.textContent="Contact Us",n.appendChild(a);const c=document.createElement("img");c.setAttribute("src","./images/dog.webp"),c.classList.add("contactImage"),n.appendChild(c);const d=document.createElement("div");d.classList.add("text"),d.textContent="TEL : 012-345-6789",n.appendChild(d);const i=document.createElement("div");i.classList.add("text"),i.textContent="Address:   131-0045, 1-chome-1-2 Oshiage, Sumida City, Tokyo",n.appendChild(i)}(),n()}function c(){document.querySelectorAll(".tab").forEach((e=>{e.addEventListener("click",a)}))}t(),e(),n(),c(),document.querySelector("#home").classList.add("underline")})();