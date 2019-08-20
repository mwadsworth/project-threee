module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("items", {
    // Giving the Items model columns
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    itemImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sold: {
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

  Items.associate = function(models) {

    // Items.belongsTo(models.users, {
    //   as: "owner",
    //   onDelete: "SET NULL"
    // });

  };

  return Items;
};
