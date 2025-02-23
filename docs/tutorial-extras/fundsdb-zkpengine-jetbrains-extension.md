---
id: jetbrains-extension
title: JetBrains DataGrip Plugin for ZSQL zkEngine
sidebar_position: 2
---

# JetBrains DataGrip Plugin for Privacy-Preserving ZSQL zkEngine

The **ZSQL zkEngine JetBrains Plugin** integrates **privacy-preserving ZSQL** capabilities into **DataGrip**, allowing developers to seamlessly interact with **zero-knowledge SQL (ZSQL) databases**.

## Features

- 🔒 **Zero-Knowledge SQL Execution** – Run ZSQL queries with built-in proof verification.
- 🎨 **Advanced Syntax Highlighting** – Full support for ZSQL keywords, proof parameters, and cryptographic operations.
- 🚀 **Automated Proof Generation** – Instantly generate zkProofs upon query execution.
- 📊 **Proof Insights & Debugging** – Visualize proof components and error traces.
- 🛠 **Performance Optimization** – Get recommendations to enhance query efficiency.

## Installation

1. Open **DataGrip** and go to **Preferences → Plugins**.
2. Click on **Marketplace**, search for **"ZSQL zkEngine"**.
3. Click **Install** and restart DataGrip.

Alternatively, install via command line:
```sh
jetbrains-plugin --install fundsdb.zsql-zkengine
```

## Getting Started

1. Open DataGrip and connect to your ZSQL-compatible database.
2. Create or open a **ZSQL query file (`.zsql`)**.
3. Use the **ZSQL Proof Validator** panel to analyze and optimize queries.
4. Run queries and validate zkProofs in real-time.

## Key Shortcuts

| Shortcut                | Description                                 |
|-------------------------|---------------------------------------------|
| `Ctrl + Shift + P`      | Open the **ZSQL Proof Validator** panel.   |
| `Alt + Enter`           | Run and verify zkProofs.                   |
| `Ctrl + Shift + O`      | Optimize ZSQL query execution.             |

## Support

For bug reports and feature requests, visit our [GitHub issues page](https://github.com/fundsdb/zsql-jetbrains) or join the discussion in our [developer community](https://community.fundsdb.com).