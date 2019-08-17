module.exports = function(sequelize, DataTypes) {
  var UserItemsView = sequelize.define(
    "user_items_view",
    {

      // Define columns
      ownerId: DataTypes.INTEGER,
      ownerName: DataTypes.STRING,
      contact: DataTypes.STRING,
      itemId: DataTypes.INTEGER,
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
  return UserItemsView;
};
