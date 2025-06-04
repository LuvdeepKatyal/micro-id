# micro-id

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

```bash
npm install micro-id