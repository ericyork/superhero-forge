// Simple Constructor Pattern
// Creates a basic interface for creating objects
class secretIdentity {
  constructor(name, secretIdentity) {
    // setting property values
    this._name = name;
    this._secretIdentity = secretIdentity;

    // declaring a method on the object
    this.revealIdentity = function() {
      return `${this._name} is ${this._secretIdentity}`;
    };
  }
}

// simple output functions
function revealIronMan() {
  const IronMan = new secretIdentity('Ironman', 'Tony Stark');
  document.getElementById("ironman").innerHTML = (IronMan.revealIdentity());
}
function revealSpiderMan() {
  const SpiderMan = new secretIdentity('Spiderman', 'Peter Parker');
  document.getElementById("spiderman").innerHTML = (SpiderMan.revealIdentity());
}
function revealWonderWoman() {
  const WonderWoman = new secretIdentity('Wonder Woman', 'Diana Prince');
  document.getElementById("wonder-woman").innerHTML = (WonderWoman.revealIdentity());
}
