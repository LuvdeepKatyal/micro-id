# ⚡ micro-id-generator

A blazing fast, compact, timestamp-based unique ID generator using Base62 encoding and custom epoch.

---

## 🚀 Why micro-id-generator?

- 🔥 **Ultra-fast** and dependency-free
- 🧠 Uses **custom epoch** + timestamp
- 🔢 **Base62 encoded** short IDs (e.g., `8AHZkJLvI`)
- 📦 Extremely **lightweight** (~1.2 KB)
- ✅ Perfect for **microservices**, **logs**, **databases**, and **URLs**

---

## 🧪 Features

⏱ Timestamp-based ID generation
🧮 Base62 encoding = shorter IDs
🛡 Zero dependencies
🌍 Collision-resistant in distributed systems
🔒 No external dependencies
📦 Ultra lightweight
🛡 Safe & minimal

---

## Installation
npm install micro-id-generator

---

## generateUniqueId()
Returns a unique Base62 encoded string based on the current timestamp (from custom epoch), a version number, and a random number.

## Usage

```js
const { generateUniqueId } = require('micro-id-generator');

const id = generateUniqueId();
console.log(id); // Example output: "1GQ8jAZdPK"