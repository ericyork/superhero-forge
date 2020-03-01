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
//
// Decorator Pattern
// creates a class for stats and "decorates" it with buffs.
class Stats {
  constructor(offense, defense, speed) {
    this.offense = offense;
    this.defense = defense;
    this.speed = speed;
  }

  getStats() {
    return `Offense: ${this.offense}, Defense: ${this.defense}, Speed ${this.speed}`;
  }
}

// decorator 1
function armorOn(stats) {
  stats.isFlying = true;
  stats.flySpeed = 20;
  stats.active = `Ironman can fly.`;
  stats.deactivate = function() {
    return `Ironman can no longer fly.`;
  };
  return stats;
}

// decorator 2
function aiEnhance(stats) {
  stats.isaiEnhanced = true;
  stats.offense += 3;
  stats.speed += 3;
  stats.speed += 3;
  stats.flySpeed += 3;
  stats.enhanced = `Ironman has enabled J.A.R.V.I.S.`;
  return stats;
}

// usage
let ironManStats = new Stats(8, 12, 5);
function displayStats() {
  document.getElementById("offense").innerHTML = (ironManStats.offense);
  document.getElementById("defense").innerHTML = (ironManStats.defense);
  document.getElementById("base-speed").innerHTML = (ironManStats.speed);
}
function donPowerArmor() {
  let buffedStats = armorOn(ironManStats);
  document.getElementById("defense").innerHTML = (buffedStats.defense);
  document.getElementById("base-speed").innerHTML = (buffedStats.speed);
  document.getElementById("fly-move").innerHTML = (buffedStats.active);
  document.getElementById("fly-speed").innerHTML = "Fly Speed";
  document.getElementById("fly-speed-value").innerHTML = (buffedStats.flySpeed);
}
function enableJarvis() {
  let enhancedStats = aiEnhance(ironManStats);
  document.getElementById("offense").innerHTML = (enhancedStats.offense);
  document.getElementById("defense").innerHTML = (enhancedStats.defense);
  document.getElementById("base-speed").innerHTML = (enhancedStats.speed);
  document.getElementById("fly-speed-value").innerHTML = (enhancedStats.flySpeed);
  document.getElementById("foresight").innerHTML = (enhancedStats.enhanced);
}
