const background = document.querySelector(".bg");


for(let i = 0; i < 49; i++){
  const box = document.createElement("div");
  background.appendChild(box);
}

for(let i = 0; i < 49; i++){
  if(i === 8 || i === 10 || i === 12 || i == 22 || i === 24 || i === 26 || i == 36 || i === 38 || i === 40){
  var hardbox = document.querySelectorAll(".bg div")[i]
  hardbox.classList.add("hardbox")
  }
}


const boxOne = document.querySelectorAll(".bg div")[1];
const player = document.createElement("div");
player.classList.add("character")
boxOne.appendChild(player);


