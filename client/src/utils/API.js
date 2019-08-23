import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  // Gets all items
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    console.log("Post item");
    console.log(itemData);
    return axios.post("/api/items", itemData);
  },

  // Gets all orders
  getOrders: function() {
    return axios.get("/api/orders");
  },
  // Gets the order with the given id
  getOrder: function(id) {
    return axios.get("/api/orders/" + id);
  },
  // Deletes the order with the given id
  deleteOrder: function(id) {
    return axios.delete("/api/orders/" + id);
  },
  // Saves a order to the database
  saveOrder: function(orderData) {
    return axios.post("/api/orders", orderData);
  },

  // Get order items
  getOrderItems: function(id) {
    return axios.get("/api/order/items/" + id);
  },
  // Deletes the order item with the given order id and item id
  deleteOrderItem: function(oid, iid) {
    return axios.delete("/api/order/items/" + oid + "/" + iid);
  },
  // Saves a order to the database
  saveOrderItem: function(orderData) {
    return axios.post("/api/order/items", orderData);
  },

  // Get user items view
  getUserItemsView: function(id) {
    return axios.get("/api/user_items_view");
  },

  // Get order buyers view
  getOrderBuyersView: function(id) {
    return axios.get("/api/order_buyers_view");
  },

  // Get order items users view
  getOrderItemsUsersView: function(id) {
    return axios.get("/api/order_items_users_view/" + id);
  }

  
};
