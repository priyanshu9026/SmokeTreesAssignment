module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    Address.associate = (models) => {
      Address.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return Address;
  };
  