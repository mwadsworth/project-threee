# Project 3 - APIs



[TOC]

## Overview

There are three initial GET APIs for Project3 to start building out front end functionality and to start testing the server/client/router functions. The data models used in the JSON here is just for testing - it will change.

## Details

- The routes are defined as Express routes in server.js 
  ```
  // Add routes, both API and view
  app.use(routes);
  ```
  and ./api/index.js

  ```
  const router = require("express").Router();
  const userRoutes = require("./users");
  const itemRoutes = require("./items");
  const orderRoutes = require("./orders");
  const bookRoutes = require("./books");
  
  // Routes
  router.use("/users", userRoutes);
  router.use("/items", itemRoutes);
  router.use("/orders", orderRoutes);
  router.use("/books", bookRoutes);
  
  module.exports = router;  
  ```
  
- The detailed API routes are defined in ./api/users.js, ./api/items.js, ./api/orders.js

- The database stubs called by the API functions are defined in ./controllers as users.js, items.js, and orders.js. For right now these functions read and return an array of jSON objects as described below.

- These APIs can be tested either in Postman or on your browser.
## Users API Routes

- localhost:3001/api/users GET

```
[
    {
        "id": 1,
        "fullName": "Jane doe",
        "email": "jdoe@lct.com",
        "password": "XXXXXX",
        "phone": "555-555-5555"
    },
    {
        "id": 2,
        "fullName": "Joe Dokes",
        "email": "jdokes@lct.com",
        "password": "XXXXXX",
        "phone": "555-555-5555"
    },
    {
        "id": 3,
        "fullName": "Ernie Pyle",
        "email": "epyle@lct.com",
        "password": "XXXXXX",
        "phone": "555-555-5555"
    }
]
```

- localhost:3001/api/users POST - a stub - will return the word "create"

```
create
```

- localhost:3001/api/users PUT- a stub - will return the word "update"

```
update
```

- localhost:3001/api/users DELETE- a stub - will return the word "remove"

```
remove
```

## Items API Routes

- localhost:3001/api/items GET

```
[
    {
        "id": 1,
        "ownerName": "Jane doe",
        "itemName": "Sofa",
        "itemImage": "image1.png",
        "price": "$10.00"
    },
    {
        "id": 2,
        "ownerName": "Jane doe",
        "itemName": "Chair",
        "itemImage": "image2.png",
        "price": "$5.00"
    },
    {
        "id": 3,
        "ownerName": "Joe Dokes",
        "itemName": "Lawn Mower",
        "itemImage": "image3.png",
        "price": "$20.00"
    },
    {
        "id": 4,
        "ownerName": "Joe Dokes",
        "itemName": "Shovel",
        "itemImage": "image4.png",
        "price": "$2.00"
    }
]
```

- localhost:3001/api/items POST - a stub - will return the word "create"

```
create
```

- localhost:3001/api/items PUT- a stub - will return the word "update"

```
update
```

- localhost:3001/api/items DELETE- a stub - will return the word "remove"
- 
```
remove
```
## Orders API Routes

- localhost:3001/api/orders GET

```
[
    {
        "id": 1,
        "buyerName": "Jane doe",
        "orderDate": "08/01/2019",
        "itemName": "Sofa",
        "price": "$10.00"
    },
    {
        "id": 2,
        "buyerName": "Joe Dokes",
        "orderDate": "08/01/2019",
        "itemName": "Lawn Mower",
        "price": "$20.00"
    }
]
```

- localhost:3001/api/orders POST - a stub - will return the word "create"

```
create
```

- localhost:3001/api/orders PUT- a stub - will return the word "update"

```
update
```

- localhost:3001/api/orders DELETE- a stub - will return the word "remove"

```
remove
```

