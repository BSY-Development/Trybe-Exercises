const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = {
  mage,
  warrior,
  dragon,
};

// Requisito 1
const dragonAttack = (dragon) => {
  let minimalDamage = 15;
  let maximumDamage = dragon.strength;
  let damage = Math.ceil(Math.random() * (maximumDamage - (minimalDamage - 1)) + (minimalDamage - 1));
  
  return damage;
}

// Requisito 2
const warriorAttack = (warrior) => {
  let minimalDamage = warrior.strength;
  let maximumDamage = minimalDamage * warrior.weaponDmg;
  let damage = Math.ceil(Math.random() * (maximumDamage - (minimalDamage - 1)) + (minimalDamage - 1));

  return damage;
}

// Requisito 3
const mageAttack = (mage) => {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  }
  mage.mana -= 15;
  let minimalDamage = mage.intelligence;
  let maximumDamage = minimalDamage * 2;
  damage = Math.ceil(Math.random() * (maximumDamage - (minimalDamage - 1)) + (minimalDamage - 1));

  return { dano: damage, mana: mage.mana }
}
