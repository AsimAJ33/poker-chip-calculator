"use strict";

let playerNumber = document.getElementById("noOfPlayers");
let buyInValue = document.getElementById("buyInValue");

playerNumber.addEventListener("change", (e) => {
  console.log(e.target.value, "players");
  playerNumber = e.target.value;
});

buyInValue.addEventListener("change", (e) => {
  console.log(e.target.value, "is the buy in value");
  buyInValue = e.target.value;
});

const greyChip = document.getElementById("greyChip");
const redChip = document.getElementById("redChip");
const blueChip = document.getElementById("blueChip");
const greenChip = document.getElementById("greenChip");
const blackChip = document.getElementById("blackChip");
const pinkChip = document.getElementById("pinkChip");
const yellowChip = document.getElementById("yellowChip");

const tableBody = document.getElementById("chipTable");

function addToTable(colour) {
  console.log(`${colour} chip was pressed`);

  tableBody.innerHTML += `
  <tr>
    <td>${colour}</td>
    <td><input class="tableField" id="qtyInSet" type="number" /></td>
    <td><input class="tableField" id="value" type="number"</td>
    <td><input class="tableField" id="perPlayer" type="number"</td>
    <td><input class="tableField" id="remainingInSet" type="number"</td>
  </tr>
  `;
}
