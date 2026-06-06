import SamsungGalaxyS24 from './product/SamsungGalaxyS24.png';
import iPhone15Pro from './product/iPhone15Pro.png';
import MacBookPro16 from './product/MacBookPro16.png';
import DellXPS15 from './product/DellXPS15.png';
import AppleWatchSeries9 from './product/AppleWatchSeries9.png';
import SamsungGalaxyWatch6 from './product/SamsungGalaxyWatch6.png';
import CanonEOSR6 from './product/CanonEOSR6.png';
import NikonZ6II from './product/NikonZ6II.png';
import SonyWH1000XM5 from './product/SonyWH1000XM5.png';
import BoseQuietComfort45 from './product/BoseQuietComfort45.png';
import PlayStation5 from './product/PlayStation5.png';
import XboxSeriesX from './product/XboxSeriesX.png';
import RazerDeathAdderV2 from './product/RazerDeathAdderV2.png';
import iPhone15Mini from './product/iPhone15Mini.png';
import HPSpectrex360 from './product/HPSpectrex360.png';
import ASUSROGZephyrusG15 from './product/ASUSROGZephyrusG15.png';
import GarminVenu3 from './product/GarminVenu3.png';
import FujifilmXT5 from './product/FujifilmXT5.png';
import NintendoSwitchOLED from './product/NintendoSwitchOLED.png';
import BeatsStudio3 from './product/BeatsStudio3.png';


 const products = [
  {
    "id": 1,
    "name": "iPhone 15 Pro",
    "category": "Phones",
    "price": 999.99,
    "inStock": true,
    "image": iPhone15Pro,
    "rating": 4.8,
    "description": "The latest Apple smartphone featuring A17 Pro chip, titanium design, and advanced camera system with improved low-light performance."
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S24",
    "category": "Phones",
    "price": 899.99,
    "inStock": true,
    "image": SamsungGalaxyS24,
    "rating": 4.7,
    "description": "Powerful Android flagship with high-resolution display, fast processor, and AI-powered camera features."
  },
  {
    "id": 3,
    "name": "MacBook Pro 16",
    "category": "Computers",
    "price": 2399.99,
    "inStock": true,
    "image": MacBookPro16,
    "rating": 4.9,
    "description": "Professional laptop with large Retina display, Apple silicon performance, and long battery life for demanding workflows."
  },
  {
    "id": 4,
    "name": "Dell XPS 15",
    "category": "Computers",
    "price": 1899.99,
    "inStock": true,
    "image": DellXPS15,
    "rating": 4.6,
    "description": "Premium Windows laptop with InfinityEdge display, powerful Intel processor, and sleek aluminum design."
  },
  {
    "id": 5,
    "name": "Apple Watch Series 9",
    "category": "SmartWatch",
    "price": 399.99,
    "inStock": true,
    "image": AppleWatchSeries9,
    "rating": 4.8,
    "description": "Advanced smartwatch with health tracking, fitness monitoring, and seamless integration with Apple devices."
  },
  {
    "id": 6,
    "name": "Samsung Galaxy Watch 6",
    "category": "SmartWatch",
    "price": 349.99,
    "inStock": true,
    "image": SamsungGalaxyWatch6,
    "rating": 4.6,
    "description": "Stylish smartwatch with AMOLED display, heart rate tracking, and Android compatibility."
  },
  {
    "id": 7,
    "name": "Canon EOS R6",
    "category": "Camera",
    "price": 2499.99,
    "inStock": true,
    "image": CanonEOSR6,
    "rating": 4.9,
    "description": "Full-frame mirrorless camera with fast autofocus, 4K video recording, and excellent low-light capabilities."
  },
  {
    "id": 8,
    "name": "Nikon Z6 II",
    "category": "Camera",
    "price": 1999.99,
    "inStock": true,
    "image": NikonZ6II,
    "rating": 4.7,
    "description": "Versatile mirrorless camera offering dual processors, high-speed shooting, and professional video features."
  },
  {
    "id": 9,
    "name": "Sony WH-1000XM5",
    "category": "headPhones",
    "price": 349.99,
    "inStock": true,
    "image": SonyWH1000XM5,
    "rating": 4.9,
    "description": "Industry-leading noise cancelling headphones with premium sound quality and long battery life."
  },
  {
    "id": 10,
    "name": "Bose QuietComfort 45",
    "category": "headPhones",
    "price": 329.99,
    "inStock": true,
    "image": BoseQuietComfort45,
    "rating": 4.8,
    "description": "Comfortable over-ear headphones with powerful noise cancellation and balanced sound profile."
  },
  {
    "id": 11,
    "name": "PlayStation 5",
    "category": "Gaming",
    "price": 499.99,
    "inStock": true,
    "image": PlayStation5,
    "rating": 4.9,
    "description": "Next-generation gaming console with ultra-fast SSD, ray tracing graphics, and immersive gameplay experience."
  },
  {
    "id": 12,
    "name": "Xbox Series X",
    "category": "Gaming",
    "price": 499.99,
    "inStock": true,
    "image": XboxSeriesX,
    "rating": 4.8,
    "description": "Powerful gaming console delivering 4K gaming, fast load times, and access to a vast game library."
  },
  {
    "id": 13,
    "name": "Razer DeathAdder V2",
    "category": "Gaming",
    "price": 69.99,
    "inStock": true,
    "image": RazerDeathAdderV2,
    "rating": 4.7,
    "description": "Ergonomic gaming mouse with high-precision sensor, customizable RGB lighting, and ultra-fast response time."
  },
  {
    "id": 14,
    "name": "iPhone 15 Mini",
    "category": "Phones",
    "price": 799.99,
    "inStock": true,
    "image": iPhone15Mini,
    "rating": 4.6,
    "description": "Compact and powerful smartphone with vibrant display, advanced camera, and smooth performance."
  },
  {
    "id": 15,
    "name": "HP Spectre x360",
    "category": "Computers",
    "price": 1599.99,
    "inStock": true,
    "image": HPSpectrex360,
    "rating": 4.5,
    "description": "Convertible 2-in-1 laptop with touchscreen display, premium build quality, and flexible usage modes."
  },
  {
    "id": 16,
    "name": "Garmin Venu 3",
    "category": "SmartWatch",
    "price": 299.99,
    "inStock": true,
    "image": GarminVenu3,
    "rating": 4.6,
    "description": "Fitness-focused smartwatch with GPS tracking, health monitoring, and long-lasting battery."
  },
  {
    "id": 17,
    "name": "Fujifilm X-T5",
    "category": "Camera",
    "price": 1699.99,
    "inStock": true,
    "image": FujifilmXT5,
    "rating": 4.7,
    "description": "Compact mirrorless camera with high-resolution sensor, retro design, and professional image quality."
  },
  {
    "id": 18,
    "name": "Beats Studio3",
    "category": "headPhones",
    "price": 299.99,
    "inStock": true,
    "image": BeatsStudio3,
    "rating": 4.5,
    "description": "Wireless headphones with deep bass sound, active noise cancellation, and sleek design."
  },
  {
    "id": 19,
    "name": "Nintendo Switch OLED",
    "category": "Gaming",
    "price": 349.99,
    "inStock": true,
    "image": NintendoSwitchOLED,
    "rating": 4.8,
    "description": "Hybrid gaming console with vibrant OLED display, portable mode, and multiplayer support."
  },
  {
    "id": 20,
    "name": "ASUS ROG Zephyrus G15",
    "category": "Gaming",
    "price": 1799.99,
    "inStock": true,
    "image": ASUSROGZephyrusG15,
    "rating": 4.9,
    "description": "High-performance gaming laptop with powerful GPU, fast refresh rate display, and advanced cooling system."
  }
]

export default products;