---
slug: privacy-preserving-transactions
title: Privacy-Preserving Transactions with fundsdb-zkpengine
authors: [fundsdb-team]
tags: [zkp, privacy, finance, blockchain]
---

Ensuring transaction privacy while maintaining integrity is a challenge in modern financial systems. **fundsdb-zkpengine** leverages **zero-knowledge proofs (ZKPs)** to allow users to prove transaction validity without exposing sensitive details.  

<!-- truncate -->

## **How It Works**  

- Uses **zk-SNARKs** to generate cryptographic proofs.  
- Ensures **confidentiality** of sender, receiver, and transaction amounts.  
- Can be integrated into **blockchains and off-chain applications**.  

### **Quick Example**  

```js
const { generateProof } = require('fundsdb-zkpengine');

const proof = generateProof({
  transaction: "hash_of_transaction",
  secret: "private_key"
});
