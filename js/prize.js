"use strict";

const DOMbuyInCashValue = document.getElementById("buyInCashValue");
const chipTableBody = document.getElementById("prizeTable");
let buyInCashValue;

DOMbuyInCashValue.addEventListener("change", (e) => {
  console.log(e.target.value, "is the prize pool");
  buyInCashValue = e.target.value;
  calcPrize();
});

function emptyTable() {
  const rows = chipTableBody.rows.length;
  console.log(`${rows} to delete`);
  if (rows > 1) {
    chipsTableBody.deleteRow(1);
  }
}

function calcPrize() {
  emptyTable();
  const first = 0.5;
  const second = 0.3;
  const third = 0.2;

  const firstPrize = buyInCashValue * first;
  const secondPrize = buyInCashValue * second;
  const thirdPrize = buyInCashValue * third;

  chipTableBody.innerHTML += `
  <tr>
  <th>Position</th>
  <th>Prize</th>
  </tr>
  <tr>
    <td>1st</td>
    <td>£${firstPrize}</td>
  </tr>
  <tr>
    <td>1st</td>
    <td>£${secondPrize}</td>
  </tr>
  <tr>
    <td>1st</td>
    <td>£${thirdPrize}</td>
  </tr>
  `;
  console.log(firstPrize, secondPrize, thirdPrize);
}
