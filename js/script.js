"use strict";

let playerNumber = document.getElementById("noOfPlayers");

playerNumber.addEventListener("change", (e) => {
  console.log(e.target.value, "players");
});

const greyChip = document.getElementById("greyChip");
const redChip = document.getElementById("redChip");
const blueChip = document.getElementById("blueChip");
const greenChip = document.getElementById("greenChip");
const blackChip = document.getElementById("blackChip");
const pinkChip = document.getElementById("pinkChip");
const yellowChip = document.getElementById("yellowChip");

function addToTable(colour) {
  console.log(`${colour} chip was pressed`);
}
