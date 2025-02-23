---
sidebar_position: 3
title: Integrating zkEngine as Middleware in an Express.js Application | Step Two
sidebar_label: Step Two - Set Up Database Configuration
---

## Step 2: Set Up Database Configuration
Create a `.env` file for storing database credentials securely:
```env
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
DB_HOST=localhost
DB_PORT=5432
```

Now, configure Sequelize in `config/db.js`:
```js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
```
