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
  stats.isAiEnhanced = true;
  stats.offense += 3;
  stats.defense += 3;
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
