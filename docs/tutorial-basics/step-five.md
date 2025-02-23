---
sidebar_position: 6
title: Integrating zkEngine as Middleware in an Express.js Application | Step Five
sidebar_label: Step 5 - Set Up Express.js Routes
---


## Step 5: Set Up Express.js Routes
Modify `routes/proof.js` to use zkEngine middleware:
```js
const express = require('express');
const zkMiddleware = require('../middleware/zkMiddleware');
const router = express.Router();

router.post('/generate', zkMiddleware, (req, res) => {
  res.json({ proof: req.proof });
});

module.exports = router;
```
