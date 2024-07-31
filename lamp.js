const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const light = document.getElementById("light");

function isLightBroken() {
  return light.src.indexOf( 'quebrada' ) > -1;
}

function lightOn() {
  if (!isLightBroken()) {
    light.src = "./img/ligada.jpg";
  }
}
function lightOff() {
  if (!isLightBroken()) {
    light.src = "./img/desligada.jpg";
  }
}

function lightBroken() {
  light.src = "./img/quebrada.jpg";
}


turnOn.addEventListener("click", lightOn);
turnOff.addEventListener("click", lightOff);
light.addEventListener("mouseover", lightOn);
light.addEventListener("mouseleave", lightOff);
light.addEventListener("dblclick", lightBroken);
