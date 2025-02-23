---
id: vs-code-extension
title: VS Code Extension for ZSQL zkEngine
sidebar_position: 1
---

# VS Code Extension for Privacy-Preserving ZSQL zkEngine

The **ZSQL zkEngine VS Code Extension** is designed to enhance the development experience by integrating **privacy-preserving ZSQL** workflows directly into VS Code. It provides powerful features for **writing, verifying, and debugging zero-knowledge queries** seamlessly.

## Features

- 🛡 **Privacy-Preserving SQL Queries** – Execute and verify ZSQL queries with zero-knowledge proof generation.
- ⚡ **Syntax Highlighting & Autocompletion** – ZSQL-specific keywords, operators, and proof constructs.
- 🧪 **Real-Time Proof Verification** – Instantly validate zkProofs for your queries.
- 🔍 **Query Debugger** – Step through ZSQL queries to analyze constraints and performance.
- 📦 **Built-in Templates** – Predefined templates to kickstart zkSQL-powered applications.

## Installation

1. Open **VS Code** and navigate to the **Extensions Marketplace**.
2. Search for **"ZSQL zkEngine"**.
3. Click **Install**.
4. Restart VS Code to activate the extension.

Alternatively, install via command line:
```sh
code --install-extension fundsdb.zsql-zkengine
```

## Getting Started

1. Open a new or existing ZSQL file (`.zsql`).
2. Start writing **zero-knowledge queries** with real-time syntax validation.
3. Use the command **"ZSQL: Verify Query"** to validate and generate zkProofs.
4. View detailed proof insights in the **ZSQL Proof Explorer** panel.

## Commands

| Command                     | Description                                      |
|-----------------------------|--------------------------------------------------|
| `ZSQL: Verify Query`        | Runs proof verification on the current query.   |
| `ZSQL: Explain Proof`       | Provides insights into zkProof generation.      |
| `ZSQL: Optimize Query`      | Suggests optimizations for zk-friendly queries. |

## Support

For issues, visit our [GitHub repository](https://github.com/fundsdb/zsql-vscode) or reach out via [community forums](https://community.fundsdb.com).

