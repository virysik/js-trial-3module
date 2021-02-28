const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  
  addPotion(potionName) {
   
    const { potions } = this;
    const { name: objName } = potionName;
    
    for (const {name} of potions) {
     
      if (name === objName) {
       
        return `Зелье ${objName} уже есть в инвентаре!`;
      }
    }
    return potions.push(potionName);
    
  },

  removePotion(potionName) {
    const { potions } = this;

    // let potionIndex; 
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];

      if (name === potionName) {
      return potions.splice(i, 1);
      }
    }
   return `Зелья ${potionName} нет в инвентаре!`;
    // for (const potion of potions) {
    //   console.log(potion.name);
    //   if (potion.name === potionName) {
    //     potionIndex = potions.indexOf(potion);
    //      return potions.splice(potionIndex, 1);
    
    //   }
    // }
    // console.log( `Зелья ${potionName} нет в инвентаре!`);
  
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (const potion of potions) {

      if (potion.name === oldName) {
        potion.name = newName;
        return;
      }
    }
 return `Зелья ${oldName} нет в инвентаре!`;
 
  },
  }
 
console.log(atTheOldToad.getPotions());

console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));

