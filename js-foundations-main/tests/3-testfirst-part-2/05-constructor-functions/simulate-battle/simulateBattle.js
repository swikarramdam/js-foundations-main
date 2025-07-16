/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};
Pokemon.prototype.isDefeated = function () {
  if (this.health <= 0) {
    return true;
  } else return false;
};

function simulateBattle(pokemon1, pokemon2, firstAttackerName) {
  let p1 = new Pokemon(pokemon1.name, pokemon1.health, pokemon1.attackBonus);
  let p2 = new Pokemon(pokemon2.name, pokemon2.health, pokemon2.attackBonus);
  let attacker, defender;
  if (firstAttackerName === p1.name) {
    attacker = p1;
    defender = p2;
  } else {
    attacker = p2;
    defender = p1;
  }

  while (!attacker.isDefeated() && !defender.isDefeated()) {
    let attackVal = attacker.biteAttack();
    defender.health -= attackVal;
    if (defender.isDefeated()) {
      return attacker.name + " Wins!";
    }

    let temp = attacker;
    attacker = defender;
    defender = temp;
  }
}
