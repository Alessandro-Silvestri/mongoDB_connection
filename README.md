# Mongo App Mongoose

A sample web application demonstrating how to connect to and query a local MongoDB database using Node.js, Mongoose, and an Express.js backend.

## Prerequisites

Before running the project, make sure you have:
1. **Node.js** installed (v18+ recommended)
2. **MongoDB** installed and running locally at `mongodb://127.0.0.1:27017`

---

## Getting Started

### 1. Install Dependencies
Initialize the project dependencies by running:
```bash
npm install
```

### 2. Database Setup
The scripts expect a database named `myTestDataBase` with a collection named `foodOrderApp` containing order documents. If you have a different setup, customize the connection string and model schema in `query.js` or the server.

schema:
```javascript

{
  user: {
    name: String,
    address: String,
    phone: String,
    accountBalance: Number,
    email: String,
  },
  restaurantInformation: { name: String, address: String, phone: String },
  orderTime: String,
  orderItems: [{ item: String, price: Number }],
  totalOrder: Number,
}

```
---

## Usage
This project works only if there is a MongoDB running with a database following the schema above.

Run in the terminal:
```
node server.js
```
in the browser goto the address:
http://127.0.0.1:3000/api/first-record
