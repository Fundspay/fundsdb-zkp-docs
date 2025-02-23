---
sidebar_position: 7
title: Integrating zkEngine as Middleware in an Express.js Application | Step Six
sidebar_label: Step Six - Create the Express Server
---

## Step 6: Create the Express Server
Now, create an `index.js` file:
```js
require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const proofRoutes = require('./routes/proof');

const app = express();
app.use(express.json());
app.use('/proof', proofRoutes);

sequelize.sync().then(() => {
  console.log('✅ Database connected');
  app.listen(3000, () => console.log('🚀 Server running on port 3000'));
});
```
