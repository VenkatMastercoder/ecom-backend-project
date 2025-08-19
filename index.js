const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("API Working");
});

// API 1: GET - /products ==> All Products
app.get("/products", async (req, res) => {
  try {
    // Step 1: Data from Frontend [ Not Required ]

    // Step 2: DB Logic
    const productsData = await prisma.product.findMany();

    // Step 3: Data to Frontend
    res.status(200).json({ message: "Fetched All Data", data: productsData });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// API 2: GET - /products/:product_id ==> A Products By Product_id
app.get("/product/:product_id", async (req, res) => {
  try {
    // 1. Data from Frontend
    const data = req.params;

    // 2. DB Logic
    const productData = await prisma.product.findUnique({
      where: {
        product_id: data.product_id,
      },
      include: {
        review: true,
      },
    });

    // 3. Data to Frontend
    res.status(200).json({ message: "Fetched All Data", data: productData });
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(3000);
