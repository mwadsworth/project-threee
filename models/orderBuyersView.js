module.exports = function(sequelize, DataTypes) {
  var OrderBuyersView = sequelize.define(
    "order_buyers_view",
    {
      // Define columns
      orderId: DataTypes.INTEGER,
      buyerId: DataTypes.INTEGER,
      buyerName: DataTypes.STRING,
      orderDate: DataTypes.DATE
    },
    {
      freezeTableName: true
    }
  );
  return OrderBuyersView;
};
