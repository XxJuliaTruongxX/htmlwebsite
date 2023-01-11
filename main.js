function animation() {}


const divs = document.querySelectorAll(".changingwidth");
for(let i = 0; i < divs.length; i++){
    const borderDiv = divs[i]; 
    borderDiv.style.width = "25%";
}