module.exports = function(sequelize, DataTypes) {
  var OrderItems = sequelize.define("order_items", {
    orderId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    itemId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
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

  OrderItems.associate = function(models) {
    // OrderItems.belongsTo(models.orders, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });

    // OrderItems.hasMany(models.items, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });

  };

  return OrderItems;
};
