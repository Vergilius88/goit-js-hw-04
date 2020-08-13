"use strict";

const inventory = {
  items: ["Knife", "Gas mask", "Gas"],

  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },

  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  action(itemName);
  console.log(`Invoking action on ${itemName}`);
};

invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));

console.log(inventory.items);

invokeInventoryAction("Medkit", inventory.add.bind(inventory));

console.log(inventory.items);

const invokeInventoryAction1 = (itemName, obj = {}, action) => {
  obj[action].bind(obj)(itemName);
  console.log(`Invoking action on ${itemName}`);
};

invokeInventoryAction1("test", inventory, "add");
console.log(inventory.items);

invokeInventoryAction1("test", inventory, "remove");
console.log(inventory.items);
