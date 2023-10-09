// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('User', {
  // Define your User model fields here
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tenant_id: {
    type: DataTypes.INTEGER,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  social_links: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  employee_id: {
    type: DataTypes.INTEGER,
  }
});

module.exports = User;