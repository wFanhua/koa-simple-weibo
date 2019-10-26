
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      comment: '用户名，唯一',
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: '密码',
    },
    nickName: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: '昵称',
    },
    gender: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: 3,
      comment: '1男性，2女性，3保密',
    },
    picture: {
      type: Sequelize.STRING,
      comment: '头像，图片地址',
    },
    city: {
      type: Sequelize.STRING,
      comment: '城市',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Users'),
};
