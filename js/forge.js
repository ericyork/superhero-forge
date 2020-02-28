// Simple Constructor Pattern
// Creates a basic interface for creating objects
class Hero {
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

// Factory Pattern
class PowerFactory {
  constructor() {
    this.makePower = function(type) {
      let power;
      if (type === 'punch' || type === 'fist') power = new HandStrike();
      else if (type === 'kick') power = new FootStrike();
      power.action = function() {
        return `The hero delivers a ${this._type}.`;
      };

      return power;
    };
  }
}
class HandStrike {
  constructor() {
    this._type = 'punch';
    this.stun = function() {
      return 'Opponent is stunned.';
    };
  }
}
class FootStrike {
  constructor() {
    this._type = 'kick';
    this.trip = function() {
      return 'Opponent is knocked down.';
    };
  }
}
// Factory output functions
const factory = new PowerFactory();
const ironMansPowers = factory.makePower('fist');
const spiderMansPowers = factory.makePower('punch');
const wonderWomansPowers = factory.makePower('kick');
function ironManAction() {
  document.getElementById("ironman-action").innerHTML = (ironMansPowers.action());
}
function ironManStun() {
  document.getElementById("ironman-stun").innerHTML = (ironMansPowers.stun());
}
function spiderManAction() {
  document.getElementById("spiderman-action").innerHTML = (spiderMansPowers.action());
}
function spiderManStun() {
  document.getElementById("spiderman-stun").innerHTML = (spiderMansPowers.stun());
}
function wonderWomanAction() {
  document.getElementById("wonder-woman-action").innerHTML = (wonderWomansPowers.action());
}
function wonderWomanTrip() {
  document.getElementById("wonder-woman-trip").innerHTML = (wonderWomansPowers.trip());
}

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

// Decorator Pattern
// creates two decorator functions to modify existing objects
