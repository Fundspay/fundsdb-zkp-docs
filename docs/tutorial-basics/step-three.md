---
sidebar_position: 4
title: Integrating zkEngine as Middleware in an Express.js Application | Step Three
sidebar_label: Step Three - Define a User Model with Sequelize
---

## Step 3: Define a User Model with Sequelize
Create a `models/user.js` file:
```js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
```
