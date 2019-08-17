module.exports = function(sequelize, DataTypes) {
  var OrderItemsUsersView = sequelize.define(
    "order_items_users_view",
    {
      // Define columns
      orderId: DataTypes.INTEGER,
      buyerId: DataTypes.INTEGER,
      buyerName: DataTypes.STRING,
      orderDate: DataTypes.DATE,
      itemId: DataTypes.INTEGER,
      ownerId: DataTypes.INTEGER,
      ownerName: DataTypes.STRING,
      category: DataTypes.STRING,
      itemName: DataTypes.STRING,
      itemImage: DataTypes.STRING,
      price: DataTypes.STRING,
      sold: DataTypes.BOOLEAN
    },
    {
      freezeTableName: true
    }
  );
  return OrderItemsUsersView;
};
