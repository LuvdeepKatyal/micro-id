# micro-id-generator

A compact, fast, time-based unique ID generator using a custom epoch and Base62 encoding.

---

## Features

- Generates unique numeric IDs based on the current timestamp minus a custom epoch.
- Encodes IDs in Base62 for shorter length and readability.
- Lightweight and easy to use.
- No external dependencies.
- Perfect when UUIDs are overkill and numeric IDs are preferred.

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