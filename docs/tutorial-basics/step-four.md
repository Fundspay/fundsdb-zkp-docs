---
sidebar_position: 5
title: Integrating zkEngine as Middleware in an Express.js Application | Step Four
sidebar_label: Step Four - Initialize zkEngine Middleware
---

## Step 4: Initialize zkEngine Middleware
In `middleware/zkMiddleware.js`, define middleware to integrate zkEngine:
```js
const zkEngine = require('zkengine');

const zkMiddleware = async (req, res, next) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.status(400).json({ error: 'Input is required for proof generation' });
    }

    const proof = await zkEngine.generateProof(input);
    req.proof = proof; // Attach proof to request
    next();
  } catch (error) {
    res.status(500).json({ error: `Proof generation failed: ${error.message}` });
  }
};

module.exports = zkMiddleware;
```