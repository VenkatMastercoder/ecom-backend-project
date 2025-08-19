const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Delete existing data
  await prisma.review.deleteMany({});
  await prisma.product.deleteMany({});

  // Create 10 dummy products
  const products = [
    {
      product_title: "Premium Smartphone",
      product_description: "Latest smartphone with high-end features and performance",
      product_category: "Electronics",
      price: "999.99",
      discount_percentage: "10",
      rating: "4.8",
      stock: "150",
      tags: ["smartphone", "tech", "mobile", "5G"],
      brand: "TechX",
      sku: "TX-SP-001",
      weight: "180g",
      dimensions: { length: "15cm", width: "7cm", height: "0.8cm" },
      thumbnail: "https://example.com/images/smartphone.jpg",
      review: {
        create: [
          {
            rating: "5",
            comment: "Amazing phone, excellent camera quality!",
            reviewer_name: "John Smith",
            reviewer_email: "john.smith@example.com"
          },
          {
            rating: "4.5",
            comment: "Great performance but battery life could be better",
            reviewer_name: "Emily Johnson",
            reviewer_email: "emily.j@example.com"
          },
          {
            rating: "4.8",
            comment: "The display is stunning and the processor is lightning fast",
            reviewer_name: "Michael Brown",
            reviewer_email: "michael.b@example.com"
          }
        ]
      }
    },
    {
      product_title: "Wireless Headphones",
      product_description: "Noise-cancelling wireless headphones with premium sound quality",
      product_category: "Audio",
      price: "249.99",
      discount_percentage: "15",
      rating: "4.7",
      stock: "200",
      tags: ["headphones", "wireless", "audio", "bluetooth"],
      brand: "SoundWave",
      sku: "SW-HP-002",
      weight: "250g",
      dimensions: { length: "18cm", width: "16cm", height: "8cm" },
      thumbnail: "https://example.com/images/headphones.jpg",
      review: {
        create: [
          {
            rating: "4.7",
            comment: "Best headphones I've ever owned. The noise cancellation is incredible!",
            reviewer_name: "Alex Turner",
            reviewer_email: "alex.t@example.com"
          },
          {
            rating: "4.9",
            comment: "Sound quality is exceptional, very comfortable for long listening sessions",
            reviewer_name: "Sarah Wilson",
            reviewer_email: "sarah.w@example.com"
          },
          {
            rating: "4.5",
            comment: "Great battery life and quick charging, but a bit heavy after hours of use",
            reviewer_name: "David Miller",
            reviewer_email: "david.m@example.com"
          }
        ]
      }
    },
    {
      product_title: "Smart Watch",
      product_description: "Fitness tracker and smartwatch with health monitoring features",
      product_category: "Wearables",
      price: "199.99",
      discount_percentage: "5",
      rating: "4.5",
      stock: "120",
      tags: ["smartwatch", "fitness", "wearable", "health"],
      brand: "FitTech",
      sku: "FT-SW-003",
      weight: "45g",
      dimensions: { length: "4.5cm", width: "3.8cm", height: "1.2cm" },
      thumbnail: "https://example.com/images/smartwatch.jpg",
      review: {
        create: [
          {
            rating: "4.6",
            comment: "Accurate fitness tracking and the battery lasts for days",
            reviewer_name: "Jessica Lee",
            reviewer_email: "jessica.l@example.com"
          },
          {
            rating: "4.3",
            comment: "Good health features but the sleep tracking could be more accurate",
            reviewer_name: "Robert Chen",
            reviewer_email: "robert.c@example.com"
          },
          {
            rating: "4.7",
            comment: "Love the app integration and customizable watch faces",
            reviewer_name: "Amanda Taylor",
            reviewer_email: "amanda.t@example.com"
          }
        ]
      }
    },
    {
      product_title: "Gaming Laptop",
      product_description: "High-performance gaming laptop with dedicated graphics",
      product_category: "Computers",
      price: "1499.99",
      discount_percentage: "8",
      rating: "4.6",
      stock: "75",
      tags: ["laptop", "gaming", "computer", "high-performance"],
      brand: "GamePro",
      sku: "GP-GL-004",
      weight: "2.3kg",
      dimensions: { length: "36cm", width: "25cm", height: "2cm" },
      thumbnail: "https://example.com/images/gaming-laptop.jpg",
      review: {
        create: [
          {
            rating: "4.8",
            comment: "Handles all AAA games at max settings without breaking a sweat",
            reviewer_name: "Chris Rodriguez",
            reviewer_email: "chris.r@example.com"
          },
          {
            rating: "4.5",
            comment: "Excellent performance but runs a bit hot during extended gaming sessions",
            reviewer_name: "Olivia Parker",
            reviewer_email: "olivia.p@example.com"
          },
          {
            rating: "4.6",
            comment: "Great keyboard and display, the RGB lighting is a nice touch",
            reviewer_name: "Tyler Johnson",
            reviewer_email: "tyler.j@example.com"
          }
        ]
      }
    },
    {
      product_title: "Bluetooth Speaker",
      product_description: "Portable waterproof bluetooth speaker with 24-hour battery life",
      product_category: "Audio",
      price: "89.99",
      discount_percentage: "20",
      rating: "4.4",
      stock: "300",
      tags: ["speaker", "bluetooth", "portable", "waterproof"],
      brand: "SoundWave",
      sku: "SW-BS-005",
      weight: "500g",
      dimensions: { length: "18cm", width: "8cm", height: "8cm" },
      thumbnail: "https://example.com/images/bluetooth-speaker.jpg",
      review: {
        create: [
          {
            rating: "4.3",
            comment: "Great sound for its size, truly waterproof as advertised",
            reviewer_name: "Lisa Martinez",
            reviewer_email: "lisa.m@example.com"
          },
          {
            rating: "4.5",
            comment: "Battery life is impressive, lasted through our entire beach day",
            reviewer_name: "Kevin Wright",
            reviewer_email: "kevin.w@example.com"
          },
          {
            rating: "4.2",
            comment: "Good bass response but could use more volume at maximum setting",
            reviewer_name: "Sophia Kim",
            reviewer_email: "sophia.k@example.com"
          }
        ]
      }
    },
    {
      product_title: "4K Smart TV",
      product_description: "55-inch 4K Ultra HD Smart TV with HDR and streaming apps",
      product_category: "Electronics",
      price: "699.99",
      discount_percentage: "12",
      rating: "4.7",
      stock: "50",
      tags: ["tv", "smart tv", "4k", "entertainment"],
      brand: "VisionPlus",
      sku: "VP-TV-006",
      weight: "15kg",
      dimensions: { length: "123cm", width: "71cm", height: "7cm" },
      thumbnail: "https://example.com/images/smart-tv.jpg",
      review: {
        create: [
          {
            rating: "4.8",
            comment: "Picture quality is stunning, smart features work flawlessly",
            reviewer_name: "Daniel Garcia",
            reviewer_email: "daniel.g@example.com"
          },
          {
            rating: "4.7",
            comment: "Easy setup and the remote is intuitive to use",
            reviewer_name: "Rachel Thompson",
            reviewer_email: "rachel.t@example.com"
          },
          {
            rating: "4.5",
            comment: "Great value for a 4K TV, streaming apps load quickly",
            reviewer_name: "Brandon Wilson",
            reviewer_email: "brandon.w@example.com"
          }
        ]
      }
    },
    {
      product_title: "Wireless Earbuds",
      product_description: "True wireless earbuds with active noise cancellation",
      product_category: "Audio",
      price: "149.99",
      discount_percentage: "10",
      rating: "4.5",
      stock: "250",
      tags: ["earbuds", "wireless", "audio", "noise-cancellation"],
      brand: "SoundWave",
      sku: "SW-EB-007",
      weight: "58g",
      dimensions: { length: "6cm", width: "4cm", height: "3cm" },
      thumbnail: "https://example.com/images/wireless-earbuds.jpg",
      review: {
        create: [
          {
            rating: "4.6",
            comment: "Perfect fit and the noise cancellation works great on my commute",
            reviewer_name: "Nicole Adams",
            reviewer_email: "nicole.a@example.com"
          },
          {
            rating: "4.4",
            comment: "Sound quality is excellent but the touch controls are a bit sensitive",
            reviewer_name: "Eric Thomas",
            reviewer_email: "eric.t@example.com"
          },
          {
            rating: "4.7",
            comment: "The charging case is compact and the battery life exceeds expectations",
            reviewer_name: "Michelle Davis",
            reviewer_email: "michelle.d@example.com"
          }
        ]
      }
    },
    {
      product_title: "Digital Camera",
      product_description: "Professional DSLR camera with 24MP sensor and 4K video",
      product_category: "Photography",
      price: "899.99",
      discount_percentage: "7",
      rating: "4.8",
      stock: "60",
      tags: ["camera", "dslr", "photography", "4k"],
      brand: "PixelPro",
      sku: "PP-DC-008",
      weight: "750g",
      dimensions: { length: "14cm", width: "10cm", height: "7.5cm" },
      thumbnail: "https://example.com/images/digital-camera.jpg",
      review: {
        create: [
          {
            rating: "4.9",
            comment: "Exceptional image quality and the autofocus is lightning fast",
            reviewer_name: "James Wilson",
            reviewer_email: "james.w@example.com"
          },
          {
            rating: "4.7",
            comment: "Great ergonomics and battery life, menu system is intuitive",
            reviewer_name: "Emma Scott",
            reviewer_email: "emma.s@example.com"
          },
          {
            rating: "4.8",
            comment: "The 4K video quality is superb, perfect for my YouTube channel",
            reviewer_name: "Ryan Cooper",
            reviewer_email: "ryan.c@example.com"
          }
        ]
      }
    },
    {
      product_title: "Robot Vacuum",
      product_description: "Smart robot vacuum with mapping technology and app control",
      product_category: "Home Appliances",
      price: "349.99",
      discount_percentage: "15",
      rating: "4.6",
      stock: "100",
      tags: ["vacuum", "robot", "smart home", "cleaning"],
      brand: "CleanTech",
      sku: "CT-RV-009",
      weight: "3.5kg",
      dimensions: { length: "35cm", width: "35cm", height: "9cm" },
      thumbnail: "https://example.com/images/robot-vacuum.jpg",
      review: {
        create: [
          {
            rating: "4.5",
            comment: "Maps my home perfectly and navigates around furniture with ease",
            reviewer_name: "Jennifer Lewis",
            reviewer_email: "jennifer.l@example.com"
          },
          {
            rating: "4.7",
            comment: "The app is user-friendly and scheduling cleaning sessions is simple",
            reviewer_name: "Mark Anderson",
            reviewer_email: "mark.a@example.com"
          },
          {
            rating: "4.4",
            comment: "Good suction power but sometimes struggles with thick carpet",
            reviewer_name: "Laura Martinez",
            reviewer_email: "laura.m@example.com"
          }
        ]
      }
    },
    {
      product_title: "Coffee Maker",
      product_description: "Programmable coffee maker with built-in grinder",
      product_category: "Kitchen Appliances",
      price: "129.99",
      discount_percentage: "25",
      rating: "4.4",
      stock: "150",
      tags: ["coffee", "kitchen", "appliance", "brewing"],
      brand: "BrewMaster",
      sku: "BM-CM-010",
      weight: "4kg",
      dimensions: { length: "25cm", width: "20cm", height: "35cm" },
      thumbnail: "https://example.com/images/coffee-maker.jpg",
      review: {
        create: [
          {
            rating: "4.3",
            comment: "Makes excellent coffee and the grinder works well with different beans",
            reviewer_name: "Steven Clark",
            reviewer_email: "steven.c@example.com"
          },
          {
            rating: "4.5",
            comment: "Love waking up to freshly brewed coffee with the timer function",
            reviewer_name: "Patricia White",
            reviewer_email: "patricia.w@example.com"
          },
          {
            rating: "4.2",
            comment: "Good value for the price, easy to clean but carafe could be better designed",
            reviewer_name: "Thomas Baker",
            reviewer_email: "thomas.b@example.com"
          }
        ]
      }
    }
  ];

  for (const product of products) {
    const reviews = product.review?.create;
    delete product.review;

    const createdProduct = await prisma.product.create({
      data: product
    });

    if (reviews) {
      if (Array.isArray(reviews)) {
        for (const review of reviews) {
          await prisma.review.create({
            data: {
              ...review,
              product_id: createdProduct.product_id
            }
          });
        }
      } else {
        await prisma.review.create({
          data: {
            ...reviews,
            product_id: createdProduct.product_id
          }
        });
      }
    }
  }

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
