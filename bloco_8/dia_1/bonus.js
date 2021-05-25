const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 60,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 500,
  strength: 50,
  damage: 0,
};

const battleMembers = {
  mage,
  warrior,
  dragon,
};

// Requisito 1
const dragonAttack = () => {
  let minimalDamage = 15;
  let maximumDamage = dragon.strength;
  let damage = Math.ceil(Math.random() * (maximumDamage - (minimalDamage - 1)) + (minimalDamage - 1));
  
  return damage;
}

// Requisito 2
const warriorAttack = () => {
  let minimalDamage = warrior.strength;
  let maximumDamage = minimalDamage * warrior.weaponDmg;
  let damage = Math.ceil(Math.random() * (maximumDamage - (minimalDamage - 1)) + (minimalDamage - 1));

  return damage;
}

// Requisito 3
const mageAttack = () => {
  if (mage.mana < 15) {
    return 0;
  }
  mage.mana -= 15;
  let minimalDamage = mage.intelligence;
  let maximumDamage = minimalDamage * 2;
  damage = Math.ceil(Math.random() * (maximumDamage - (minimalDamage - 1)) + (minimalDamage - 1));

  return damage;
}

const gameActions = (attacker, hit) => {
  let damageDealt = hit();
  attacker.damage += damageDealt;
  if (attacker === dragon) {
    mage.healthPoints -= damageDealt;
    warrior.healthPoints -= damageDealt;
  } else {
    dragon.healthPoints -= damageDealt;
  }
};

const gameOver = () => {
  if (mage.healthPoints <= 0 && warrior.healthPoints <= 0) {
    console.log('Combate acabou, o dragão venceu.');
    return true;
  } else if (dragon.healthPoints <= 0) {
    console.log(battleMembers);
    console.log('Combate acabou, você venceu!');
    return true;
  }
  return false;
}

let isOver = false;
while(!isOver) {

  if (mage.healthPoints > 0) {
    gameActions(mage, mageAttack);
  }

  if (warrior.healthPoints > 0) {
    gameActions(warrior, warriorAttack);
  }

  if (gameOver()) {
    break;
  }

  gameActions(dragon, dragonAttack);
  console.log(battleMembers);
  isOver = gameOver();
}
