export interface Product {
  id: number;
  name: string;
  description: string;
  images: string[]; // Now required array
  category: string;
  price: string;
}

export const products = [
  {
    id: 1,
    name: "Aluminum Security Shutters",
    description: "Lightweight yet durable aluminum shutters perfect for residential applications.",
    images: [
      "/images/p1.png",
      "/images/hero-bg.png",
      "/images/p1.png"
    ],
    category: "Residential",
    price: "$899",
  },
    {
      id: 2,
      name: "Steel Commercial Shutters",
      description: "Heavy-duty steel shutters designed for maximum security in commercial settings.",
      images: [
        "/images/p2.png",
        "/images/p2.png",
        "/images/p2.png"
      ],
      category: "Commercial",
      price: "$1,299",
    },
    {
      id: 3,
      name: "Insulated Rolling Shutters",
      description: "Energy-efficient shutters that provide excellent thermal and acoustic insulation.",
      images: [
        "/images/p3.png",
        "/images/p3.png",
        "/images/p3.png"
      ],
      category: "Residential",
      price: "$1,099",
    },
    {
      id: 4,
      name: "Fire-Rated Shutters",
      description: "Specialized shutters designed to prevent the spread of fire in commercial buildings.",
      images: [
        "/images/p4.png",
        "/images/p4.png",
        "/images/p4.png"
      ],
      category: "Commercial",
      price: "$1,499",
    },
    {
      id: 5,
      name: "Perforated Rolling Shutters",
      description: "Ventilated shutters that allow air flow while maintaining security.",
      images: [
        "/images/p1.png",
        "/images/p1.png",
        "/images/p1.png"
      ],
      category: "Commercial",
      price: "$1,199",
    },
    {
      id: 6,
      name: "Motorized Residential Shutters",
      description: "Convenient remote-controlled shutters for easy operation.",
      images: [
        "/images/p1.png",
        "/images/p1.png",
        "/images/p1.png"
      ],
      category: "Residential",
      price: "$1,299",
    },
  ]
