module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define("orders", {
    // Giving the Orders model columns
    buyerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    orderDate: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    orderPlaced: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Orders.associate = function(models) {
    // Orders.hasMany(models.order_details, {
    //   onDelete: "CASCADE"
    // });

    // // An Order one to one connection to Users
    // Orders.belongsToOne(models.users, {
    //   as: "buyer",
    //   through: "user_items",
    //   onDelete: "cascade"
    // });
  };

  return Orders;
};
