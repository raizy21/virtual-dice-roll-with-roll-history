//  when the button is clicked, call the rollDice function 
function rollDice() {
  var counter = 0; // counter to keep track of the number of iterations
  var diceElement = document.getElementById("dice"); // dice element
  var history = document.getElementById("history"); // history element

  var timer = setInterval(function () {
    counter++; // increment counter
    var randomRoll = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

    // show rolling animation (changing numbers)
    diceElement.innerHTML = randomRoll;

    // add roll result to history
    if (counter === 10) {
      clearInterval(timer); // stop the animation

      // final dice roll
      var finalRoll = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6
      diceElement.innerHTML = finalRoll; // show final dice roll

      // add roll result to history
      var entry = document.createElement("div"); // create a new div element
      entry.className = "history-entry p-2 border rounded bg-light mt-2"; // add classes to the div
      entry.textContent = `you rolled a ${finalRoll}`; // add text content to the div
      history.appendChild(entry); // append the div to the history element
    }
  }, 100); // 100ms interval
}
