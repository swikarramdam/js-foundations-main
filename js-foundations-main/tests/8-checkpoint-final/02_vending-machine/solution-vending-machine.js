drinkInventory = {
  1: { name: "Sunny Delight", stock: 5 },
  2: { name: "Diet Soda", stock: 3 },
  3: { name: "Bottled Water", stock: 4 },
};
class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }

  sale(itemID) {
    let item = this.inventory[itemID];
    if (item.stock && item.stock > 0) {
      item.stock--;
      return `1 ${item.name} - Thank you and come again!`;
    } else {
      return "'Out of Stock'";
    }
  }

  stockTotal() {
    let Total = Object.entries(this.inventory).reduce((sum, [key, value]) => {
      return sum + value.stock;
    }, 0);
    if (Total > 0) {
      return `${Total} item(s)`;
    } else return "Out of Stock";
  }
}
