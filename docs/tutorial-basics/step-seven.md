---
sidebar_position: 8
title: Integrating zkEngine as Middleware in an Express.js Application | Step Seven
sidebar_label: Step Seven - Test the API
---

## Step 7: Test the API
Start the server:
```sh
node index.js
```

Test the proof generation using `curl` or Postman:
```sh
curl -X POST http://localhost:3000/proof/generate \
  -H "Content-Type: application/json" \
  -d '{"input": "SELECT * FROM users;"}'
```

If successful, you should receive a proof response:
```json
{
  "proof": { ... }
}
```
