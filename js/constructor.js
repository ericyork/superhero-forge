// Simple Constructor Pattern
// Sets up a basic interface for creating objects
class Hero {
  constructor(name, secretIdentity) {
    // setting property values; underscore used as a convention for unique identifier.
    this._name = name;
    this._secretIdentity = secretIdentity;

    // declaring a method on the object
    this.revealIdentity = function() {
      return `${this._name} is ${this._secretIdentity}`;
    };
  }
}
// Constructor output functions
const IronMan = new Hero('Ironman', 'Tony Stark');
const SpiderMan = new Hero('Spiderman', 'Peter Parker');
const WonderWoman = new Hero('Wonder Woman', 'Diana Prince');

function revealIronMan() {
  document.getElementById("ironman").innerHTML = (IronMan.revealIdentity());
}
function revealSpiderMan() {
  document.getElementById("spiderman").innerHTML = (SpiderMan.revealIdentity());
}
function revealWonderWoman() {
  document.getElementById("wonder-woman").innerHTML = (WonderWoman.revealIdentity());
}
