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
class BallFactory {
  constructor() {
    this.createBall = function(type) {
      let ball;
      if (type === 'football' || type === 'soccer') ball = new Football();
      else if (type === 'basketball') ball = new Basketball();
      ball.roll = function() {
        return `The ${this._type} is rolling.`;
      };

      return ball;
    };
  }
}
class Football {
  constructor() {
    this._type = 'football';
    this.kick = function() {
      return 'You kicked the football.';
    };
  }
}
class Basketball {
  constructor() {
    this._type = 'basketball';
    this.bounce = function() {
      return 'You bounced the basketball.';
    };
  }
}
// Factory output functions
const factory = new BallFactory();
const mySoccer = factory.createBall('soccer');
const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');
function rollSoccer() {
  document.getElementById("roll-soccer").innerHTML = (mySoccer.roll());
}
function kickSoccer() {
  document.getElementById("kick-soccer").innerHTML = (mySoccer.kick());
}
function rollFootball() {
  document.getElementById("roll-football").innerHTML = (myFootball.roll());
}
function kickFootball() {
  document.getElementById("kick-football").innerHTML = (myFootball.kick());
}
function rollBasketball() {
  document.getElementById("roll-basketball").innerHTML = (myBasketball.roll());
}
function bounceBasketball() {
  document.getElementById("bounce-basketball").innerHTML = (myBasketball.bounce());
}
