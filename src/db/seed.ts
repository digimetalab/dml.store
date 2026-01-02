import "dotenv/config";
import { db, pool } from "./index";
import { products, categories } from "./schema";

const sampleCategories = [
  {
    name: "GPU / VGA",
    slug: "gpu",
    description: "Graphics cards for gaming and professional work",
    iconUrl: "/category-gpu.png",
  },
  {
    name: "CPU / Processor",
    slug: "cpu",
    description: "Intel and AMD processors",
    iconUrl: "/category-cpu.png",
  },
  {
    name: "RAM / Memory",
    slug: "ram",
    description: "DDR4 and DDR5 memory modules",
    iconUrl: "/category-ram.png",
  },
  {
    name: "Storage",
    slug: "storage",
    description: "SSDs and HDDs",
    iconUrl: "/category-storage.png",
  },
  {
    name: "Motherboard",
    slug: "motherboard",
    description: "Intel and AMD motherboards",
    iconUrl: "/category-mobo.png",
  },
  {
    name: "PSU",
    slug: "psu",
    description: "Power supply units",
    iconUrl: "/category-psu.png",
  },
  {
    name: "Casing",
    slug: "case",
    description: "PC cases and enclosures",
    iconUrl: "/category-case.png",
  },
  {
    name: "Monitor",
    slug: "monitor",
    description: "Gaming and professional monitors",
    iconUrl: "/category-monitor.png",
  },
  {
    name: "Peripheral",
    slug: "peripheral",
    description: "Keyboard, mouse, and accessories",
    iconUrl: "/category-peripheral.png",
  },
];

const sampleProducts = [
  // GPUs
  {
    name: "NVIDIA GeForce RTX 4090 OC Edition",
    category: "GPU",
    description:
      "The ultimate graphics card for serious gamers and creators. Features 24GB GDDR6X memory and advanced ray tracing.",
    price: 28500000,
    originalPrice: 32000000,
    imageUrl: "/category-gpu.png",
    badge: "SALE",
    specs: JSON.stringify({
      memory: "24GB GDDR6X",
      coreClock: "2520 MHz (Boost)",
      cuda: "16384 CUDA Cores",
      power: "450W TDP",
      ports: "3x DisplayPort 1.4a, 1x HDMI 2.1",
    }),
    inStock: true,
  },
  {
    name: "NVIDIA GeForce RTX 4080 SUPER",
    category: "GPU",
    description:
      "High-performance graphics card with excellent 4K gaming capabilities.",
    price: 18500000,
    originalPrice: null,
    imageUrl: "/category-gpu.png",
    badge: "HOT",
    specs: JSON.stringify({
      memory: "16GB GDDR6X",
      coreClock: "2550 MHz (Boost)",
      cuda: "10240 CUDA Cores",
      power: "320W TDP",
      ports: "3x DisplayPort 1.4a, 1x HDMI 2.1",
    }),
    inStock: true,
  },
  {
    name: "NVIDIA GeForce RTX 4070 Ti SUPER",
    category: "GPU",
    description: "Great value for 1440p and 4K gaming with DLSS 3 support.",
    price: 13500000,
    originalPrice: 14500000,
    imageUrl: "/category-gpu.png",
    badge: "SALE",
    specs: JSON.stringify({
      memory: "16GB GDDR6X",
      coreClock: "2610 MHz (Boost)",
      cuda: "8448 CUDA Cores",
      power: "285W TDP",
      ports: "3x DisplayPort 1.4a, 1x HDMI 2.1",
    }),
    inStock: true,
  },
  {
    name: "AMD Radeon RX 7900 XTX",
    category: "GPU",
    description:
      "AMDs flagship graphics card with 24GB memory for demanding games.",
    price: 16500000,
    originalPrice: null,
    imageUrl: "/category-gpu.png",
    badge: null,
    specs: JSON.stringify({
      memory: "24GB GDDR6",
      coreClock: "2500 MHz (Boost)",
      streamProcessors: "6144 Stream Processors",
      power: "355W TDP",
      ports: "2x DisplayPort 2.1, 1x HDMI 2.1, 1x USB-C",
    }),
    inStock: true,
  },

  // CPUs
  {
    name: "Intel Core i9-14900K",
    category: "CPU",
    description:
      "Intels fastest desktop processor with 24 cores and 32 threads.",
    price: 9800000,
    originalPrice: null,
    imageUrl: "/category-cpu.png",
    badge: "HOT",
    specs: JSON.stringify({
      cores: "24 Cores (8P + 16E)",
      threads: "32 Threads",
      baseClock: "3.2 GHz",
      boostClock: "6.0 GHz",
      cache: "36MB L3 Cache",
      tdp: "125W TDP",
    }),
    inStock: true,
  },
  {
    name: "Intel Core i7-14700K",
    category: "CPU",
    description: "Excellent gaming CPU with 20 cores for multitasking.",
    price: 6500000,
    originalPrice: 7200000,
    imageUrl: "/category-cpu.png",
    badge: "SALE",
    specs: JSON.stringify({
      cores: "20 Cores (8P + 12E)",
      threads: "28 Threads",
      baseClock: "3.4 GHz",
      boostClock: "5.6 GHz",
      cache: "33MB L3 Cache",
      tdp: "125W TDP",
    }),
    inStock: true,
  },
  {
    name: "AMD Ryzen 9 7950X3D",
    category: "CPU",
    description: "The best gaming CPU with 3D V-Cache technology.",
    price: 9200000,
    originalPrice: null,
    imageUrl: "/category-cpu.png",
    badge: "HOT",
    specs: JSON.stringify({
      cores: "16 Cores",
      threads: "32 Threads",
      baseClock: "4.2 GHz",
      boostClock: "5.7 GHz",
      cache: "144MB Total Cache (96MB 3D V-Cache)",
      tdp: "120W TDP",
    }),
    inStock: true,
  },
  {
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    description: "Best value gaming CPU with 3D V-Cache.",
    price: 6800000,
    originalPrice: null,
    imageUrl: "/category-cpu.png",
    badge: "NEW",
    specs: JSON.stringify({
      cores: "8 Cores",
      threads: "16 Threads",
      baseClock: "4.2 GHz",
      boostClock: "5.0 GHz",
      cache: "104MB Total Cache (64MB 3D V-Cache)",
      tdp: "120W TDP",
    }),
    inStock: true,
  },

  // RAM
  {
    name: "G.Skill Trident Z5 RGB DDR5-6400 32GB",
    category: "RAM",
    description: "High-speed DDR5 memory kit with RGB lighting.",
    price: 2800000,
    originalPrice: 3200000,
    imageUrl: "/category-ram.png",
    badge: "SALE",
    specs: JSON.stringify({
      capacity: "32GB (2x16GB)",
      speed: "DDR5-6400",
      timing: "CL32-39-39-102",
      voltage: "1.40V",
      rgb: "Yes",
    }),
    inStock: true,
  },
  {
    name: "Corsair Dominator Platinum RGB DDR5-6000 64GB",
    category: "RAM",
    description: "Premium DDR5 kit for enthusiasts and content creators.",
    price: 5500000,
    originalPrice: null,
    imageUrl: "/category-ram.png",
    badge: null,
    specs: JSON.stringify({
      capacity: "64GB (2x32GB)",
      speed: "DDR5-6000",
      timing: "CL36-36-36-76",
      voltage: "1.35V",
      rgb: "Yes - Capellix RGB",
    }),
    inStock: true,
  },

  // Storage
  {
    name: "Samsung 990 Pro 2TB NVMe SSD",
    category: "STORAGE",
    description: "Fastest consumer NVMe SSD with PCIe 4.0.",
    price: 3800000,
    originalPrice: 4200000,
    imageUrl: "/category-storage.png",
    badge: "SALE",
    specs: JSON.stringify({
      capacity: "2TB",
      interface: "PCIe 4.0 x4 NVMe 2.0",
      readSpeed: "7450 MB/s",
      writeSpeed: "6900 MB/s",
      endurance: "1200 TBW",
    }),
    inStock: true,
  },
  {
    name: "WD Black SN850X 1TB",
    category: "STORAGE",
    description: "High-performance gaming SSD.",
    price: 1800000,
    originalPrice: null,
    imageUrl: "/category-storage.png",
    badge: null,
    specs: JSON.stringify({
      capacity: "1TB",
      interface: "PCIe 4.0 x4 NVMe",
      readSpeed: "7300 MB/s",
      writeSpeed: "6300 MB/s",
      endurance: "600 TBW",
    }),
    inStock: true,
  },

  // Monitors
  {
    name: 'LG 34GP950G-B UltraGear 34" OLED',
    category: "MONITOR",
    description: "Premium ultrawide OLED gaming monitor with G-Sync.",
    price: 12500000,
    originalPrice: 14500000,
    imageUrl: "/category-monitor.png",
    badge: "NEW",
    specs: JSON.stringify({
      size: "34 inch Curved",
      resolution: "3440 x 1440 (UWQHD)",
      refreshRate: "240Hz",
      panelType: "OLED",
      responseTime: "0.03ms GtG",
      hdr: "HDR400 True Black",
    }),
    inStock: true,
  },
  {
    name: 'ASUS ROG Swift PG27AQN 27" IPS',
    category: "MONITOR",
    description: "Fast 360Hz eSports monitor for competitive gaming.",
    price: 15000000,
    originalPrice: null,
    imageUrl: "/category-monitor.png",
    badge: "HOT",
    specs: JSON.stringify({
      size: "27 inch",
      resolution: "2560 x 1440 (QHD)",
      refreshRate: "360Hz",
      panelType: "IPS",
      responseTime: "1ms GtG",
      hdr: "HDR600",
    }),
    inStock: true,
  },

  // Peripherals
  {
    name: "Pro Gaming Bundle (Keyboard + Mouse + Mousepad)",
    category: "PERIPHERAL",
    description: "Complete gaming peripheral set with mechanical keyboard.",
    price: 3500000,
    originalPrice: 4200000,
    imageUrl: "/category-peripheral.png",
    badge: "BUNDLE",
    specs: JSON.stringify({
      keyboard: "Mechanical RGB, Hot-swappable",
      mouse: "Wireless, 25K DPI sensor",
      mousepad: "XXL 900x400mm",
      connectivity: "Wireless 2.4GHz + Bluetooth",
    }),
    inStock: true,
  },
  {
    name: "Logitech G Pro X Superlight 2",
    category: "PERIPHERAL",
    description: "Ultra-lightweight wireless gaming mouse.",
    price: 2300000,
    originalPrice: null,
    imageUrl: "/category-peripheral.png",
    badge: "HOT",
    specs: JSON.stringify({
      sensor: "HERO 2 32K DPI",
      weight: "60g",
      battery: "95 hours",
      connectivity: "LIGHTSPEED Wireless",
      buttons: "5 programmable",
    }),
    inStock: true,
  },

  // Motherboards
  {
    name: "ASUS ROG Maximus Z790 Hero",
    category: "MOTHERBOARD",
    description: "Premium Intel Z790 motherboard for enthusiasts.",
    price: 9500000,
    originalPrice: null,
    imageUrl: "/category-mobo.png",
    badge: "HOT",
    specs: JSON.stringify({
      socket: "LGA 1700",
      chipset: "Intel Z790",
      formFactor: "ATX",
      memory: "4x DDR5, up to 7800MHz",
      pcie: "PCIe 5.0 x16",
      storage: "5x M.2 slots",
    }),
    inStock: true,
  },
  {
    name: "MSI MAG B650 TOMAHAWK WIFI",
    category: "MOTHERBOARD",
    description: "Great value AMD AM5 motherboard with WiFi 6E.",
    price: 3800000,
    originalPrice: 4200000,
    imageUrl: "/category-mobo.png",
    badge: "SALE",
    specs: JSON.stringify({
      socket: "AM5",
      chipset: "AMD B650",
      formFactor: "ATX",
      memory: "4x DDR5, up to 7000MHz",
      pcie: "PCIe 4.0 x16",
      storage: "2x M.2 slots",
    }),
    inStock: true,
  },

  // PSU
  {
    name: "Corsair RM1000x 1000W 80+ Gold",
    category: "PSU",
    description: "High-quality modular power supply for high-end builds.",
    price: 2800000,
    originalPrice: null,
    imageUrl: "/category-psu.png",
    badge: null,
    specs: JSON.stringify({
      wattage: "1000W",
      efficiency: "80+ Gold",
      modular: "Fully Modular",
      fan: "135mm Fluid Dynamic Bearing",
      warranty: "10 Years",
    }),
    inStock: true,
  },
  {
    name: "Seasonic PRIME TX-1600 Titanium",
    category: "PSU",
    description: "Top-tier PSU for RTX 4090 builds.",
    price: 7500000,
    originalPrice: null,
    imageUrl: "/category-psu.png",
    badge: "NEW",
    specs: JSON.stringify({
      wattage: "1600W",
      efficiency: "80+ Titanium",
      modular: "Fully Modular",
      fan: "135mm FDB Fan",
      warranty: "12 Years",
    }),
    inStock: true,
  },
];

async function seed() {
  console.log("🌱 Starting database seeding...");

  try {
    // Clear existing data
    console.log("Clearing existing data...");
    await db.delete(products);
    await db.delete(categories);

    // Insert categories
    console.log("Inserting categories...");
    await db.insert(categories).values(sampleCategories);

    // Insert products
    console.log("Inserting products...");
    await db.insert(products).values(sampleProducts);

    console.log("✅ Database seeding completed successfully!");
    console.log(`   - ${sampleCategories.length} categories inserted`);
    console.log(`   - ${sampleProducts.length} products inserted`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  } finally {
    await pool.end();
  }
}

seed();
