const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/"
const container = document.querySelector("#container")

for (let i = 1; i < 1000; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("pokemon")
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`;
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;
    newDiv.appendChild(newImg)
    newDiv.appendChild(newSpan)
    container.appendChild(newDiv);
}