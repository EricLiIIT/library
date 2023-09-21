import { Book } from "./Book"

let b1 = new Book(
  "Turtles all the way down", 
  "Hank Green", 
  "fiction", 
  200, 
  true
);
let b2 = new Book(
  "The intelligent investor",
  "Benjamin Graham",
  "Nonfiction",
  500,
  false
);
let b3 = new Book(
  "The Structure of Scientific Revolutions",
  "Thomas S. Khun",
  "Nonfiction",
  300,
  true
);
let b4 = new Book(
  "One up on Wallstreet",
  "Peter Lynch",
  "Nonfiction",
  400,
  true
);
let b5 = new Book(
  "Clockwork Orange",
  "Someone",
  "Nonfiction",
  200,
  false
);

export {b1, b2, b3, b4, b5}