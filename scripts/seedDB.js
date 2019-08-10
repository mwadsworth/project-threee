// Seed database with these values
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/projectdb"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
    synopsis:
      'A number-one national best seller about a man who wakes up from a five-year coma able to see people\'s futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people\'s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a "faultlessly paced...continuously engrossing" (Los Angeles Times) novel of second sight.',
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    synopsis:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    date: new Date(Date.now())
  }
];

const usersSeed = [
  {
    fullName: "Jane Doe",
    email: "jdoe@lct.com",
    password: "XXXXXX"
  },
  {
    fullName: "Joe Dokes",
    email: "jdokes@lct.com",
    password: "XXXXXX"
  },
  {
    fullName: "Ernie Pyle",
    email: "epyle@lct.com",
    password: "XXXXXX"
  }
];

const itemsSeed = [
  {
    ownerName: "Jane Doe",
    contact: "jdoe@lct.com",
    category: "Furniture",
    itemName: "Sofa",
    itemImage: "image1.png",
    price: "$10.00"
  },
  {
    ownerName: "Jane Doe",
    contact: "jdoe@lct.com",
    category: "Furniture",
    itemName: "Chair",
    itemImage: "image2.png",
    price: "$5.00"
  },
  {
    ownerName: "Joe Dokes",
    contact: "jdokes@lct.com",
    category: "Other",
    itemName: "Lawn Mower",
    itemImage: "image3.png",
    price: "$20.00"
  },
  {
    ownerName: "Joe Dokes",
    contact: "jdokes@lct.com",
    category: "Other",
    itemName: "Shovel",
    itemImage: "image4.png",
    price: "$2.00"
  }
];

const ordersSeed = [
  {
    buyerName: "Jane Doe",
    orderDate: "08/01/2019",
    items: [
      {
        ownerName: "Jane Doe",
        contact: "jdoe@lct.com",
        category: "Furniture",
        itemName: "Sofa",
        itemImage: "image1.png",
        price: "$10.00"
      },
      {
        ownerName: "Joe Dokes",
        contact: "jdokes@lct.com",
        category: "Other",
        itemName: "Lawn Mower",
        itemImage: "image3.png",
        price: "$20.00"
      }
    ]
  },
  {
    buyerName: "Joe Dokes",
    orderDate: "08/01/2019",
    items: [
      {
        ownerName: "Jane Doe",
        contact: "jdoe@lct.com",
        category: "Furniture",
        itemName: "Sofa",
        itemImage: "image1.png",
        price: "$10.00"
      },
      {
        ownerName: "Joe Dokes",
        contact: "jdokes@lct.com",
        category: "Other",
        itemName: "Shovel",
        itemImage: "image4.png",
        price: "$2.00"
      }
    ]
  }
];

db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    createUsers();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const createUsers = function() {
  db.Users.deleteMany({})
    .then(() => db.Users.collection.insertMany(usersSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      createItems();
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
};

const createItems = function() {
  db.Items.deleteMany({})
    .then(() => db.Items.collection.insertMany(itemsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      createOrders();
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
};

const createOrders = function() {
  db.Orders.deleteMany({})
    .then(() => db.Orders.collection.insertMany(ordersSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
};
