/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price) {
  let book = {};
  book = Object.create(bookPrototype);
  book.rating = [];

  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;

  return book;
}

const bookPrototype = {
  getInfo() {
    return this.title + " " + "by " + this.author;
  },
  getPrice() {
    return this.price;
  },
  addRating(str) {
    this.rating.push(str);
  },
  getRating() {
    let sum = 0;
    for (let i = 0; i < this.rating.length; i++) {
      let stars = this.rating[i].length; //3
      sum += stars;
    }
    return sum / this.rating.length;
  },
};
