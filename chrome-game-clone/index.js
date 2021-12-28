// alert("Welcome !");

var character = document.getElementById("character");

document.addEventListener("click", jump);

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(removeJump, 300);
}

function removeJump() {
  character.classList.remove("animate");
}

var block = document.getElementById("block");

// start counter

window.onload = function() {
  var mytimer = setInterval(mycounter, 1000);
};
var c = 0;
function mycounter() {
  c = c + 1;
}

function checkDead() {
  let charTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  //   check if character top if more than 130 and block is in between in 20 px , then they touch each other and stop game
  if (charTop >= 130 && blockLeft < 20 && blockLeft > 0) {
    // Show game is over with score

    alert(`Loose Score is ${c}`);
    // refresh page
    setTimeout(() => {
      window.location.reload(true);
    });
  }
}

setInterval(checkDead, 10);
