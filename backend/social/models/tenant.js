// models/tenant.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./user')

const Tenant = sequelize.define('Tenant', {
    // Define your Tenant model fields here
    tenant_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tenant_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    zip_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// Define the one-to-many relationship between User and Tenant
User.hasMany(Tenant, {
    foreignKey: 'tenant_id', // This is the foreign key in the Tenant model
});

Tenant.belongsTo(User, {
    foreignKey: 'user_id', // This should match the foreign key in the Tenant model
});

module.exports = Tenant;