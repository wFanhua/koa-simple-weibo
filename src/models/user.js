
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: '用户名，唯一',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '密码',
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '昵称',
    },
    gender: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 3,
      comment: '1男性，2女性，3保密',
    },
    picture: {
      type: DataTypes.STRING,
      comment: '头像，图片地址',
    },
    city: {
      type: DataTypes.STRING,
      comment: '城市',
    },
  }, {});
  // eslint-disable-next-line no-unused-vars
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
