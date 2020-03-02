// Singleton Pattern
// creates a counter to display input from three different sources
class Victories {
  constructor() {
    let count = 0;
    this.add = function() {
      return ++count;
    }
  }
}
// usage
let pageCounter = new Victories();
function addVictory() {
  document.getElementById("display").innerHTML = (pageCounter.add());
}
