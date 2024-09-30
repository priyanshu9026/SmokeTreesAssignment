module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    User.associate = (models) => {
      User.hasMany(models.Address, { foreignKey: 'userId' });
    };
    return User;
  };
  