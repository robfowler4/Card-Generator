/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suitArray = ["&#9824", "&#9827", "&#9829", "&#9830"];

  let randomNumber = Math.floor(Math.random() * 12);

  let randomSuit = Math.floor(Math.random() * 4);

  if (suitArray[randomSuit] == "&#9829" || suitArray[randomSuit] == "&#9830") {
    document.querySelector(".number").style.color = "red";
    document.querySelector(".suit").style.color = "red";
    document.querySelector(".upsidedown-suit").style.color = "red";
  }

  document.querySelector(".number").innerHTML = numberArray[randomNumber];
  document.querySelector(".suit").innerHTML = suitArray[randomSuit];
  document.querySelector(".upsidedown-suit").innerHTML = suitArray[randomSuit];
};
