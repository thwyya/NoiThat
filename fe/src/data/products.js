import Rectangle62 from "@/assets/img/Rectangle62.png";
import Rectangle47 from "@/assets/img/Rectangle47.png";
import Rectangle48 from "@/assets/img/Rectangle48.png";
import Rectangle65 from "@/assets/img/Rectangle65.png";
import Rectangle66 from "@/assets/img/Rectangle66.png";
import Rectangle67 from "@/assets/img/Rectangle67.png";
import Rectangle70 from "@/assets/img/Rectangle70.png";
import Rectangle71 from "@/assets/img/Rectangle71.png";
import Rectangle72 from "@/assets/img/Rectangle72.png";
import Rectangle75 from "@/assets/img/Rectangle75.png";
import Rectangle76 from "@/assets/img/Rectangle76.png";
import Rectangle77 from "@/assets/img/Rectangle77.png";

export const products = [
  {
    id: 1,
    name: "Velvet Covered",
    price: 39,
    images: [Rectangle62, Rectangle65, Rectangle66], 
    colors: [
      { hex: "#E0C097", name: "Beige Velvet", image: Rectangle62 },
      { hex: "#C4C4C4", name: "Light Gray", image: Rectangle65 },
    ],
    sizes: ["S", "M", "L"],
    description:
      "A luxurious velvet-covered cushion perfect for adding a soft and elegant touch to your living space.",
    composition: "Cotton 60%, Polyester 40%", 
    artno: "0643448004"
  },
  {
    id: 2,
    name: "Candle in Glass Holder",
    price: 14,
    images: [Rectangle47, Rectangle71, Rectangle62],
    colors: [
      { hex: "#F2C94C", name: "Golden Yellow", image: Rectangle47 },
      { hex: "#EB5757", name: "Red", image: Rectangle71 }
    ],
    sizes: ["One Size"],
    description:
      "A scented candle in a stylish glass holder, perfect for creating a cozy atmosphere in any room.",
    composition: "Wax 80%, Glass 20%",
    artno: "0643448005"
  },
  {
    id: 3,
    name: "Metal Photo Frame",
    price: 25,
    images: [Rectangle48, Rectangle65, Rectangle70],
    colors: [
      { hex: "#C4C4C4", name: "Silver", image: Rectangle48 },
      { hex: "#323334", name: "Black", image: Rectangle65 }
    ],
    sizes: ["S", "M"],
    description:
      "Durable metal photo frame to preserve your precious memories with a modern minimalist design.",
    composition: "Metal 100%",
    artno: "0643448006"
  },
  {
    id: 4,
    name: "Round Floor Mat",
    price: 34,
    images: [Rectangle65, Rectangle70, Rectangle66],
    colors: [
      { hex: "#E0C097", name: "Beige", image: Rectangle70 },
      { hex: "#6FCF97", name: "Green", image: Rectangle66 }
    ],
    sizes: ["S", "M", "L"],
    description:
      "Soft and round floor mat providing comfort and style, suitable for bedrooms and living rooms.",
    composition: "Cotton 70%, Polyester 30%",
    artno: "0643448007"
  },
  {
    id: 5,
    name: "Class Light Holder",
    price: 22,
    images: [Rectangle66, Rectangle72, Rectangle48],
    colors: [
      { hex: "#C4C4C4", name: "Gray", image: Rectangle66 },
      { hex: "#F2994A", name: "Orange", image: Rectangle72 }
    ],
    sizes: ["M"],
    description:
      "Elegant glass light holder perfect for dining tables or cozy corners.",
    composition: "Glass 100%",
    artno: "0643448008"
  },
  {
    id: 6,
    name: "Flannel Duvet Cover Set",
    price: 44,
    images: [Rectangle67, Rectangle75, Rectangle76],
    colors: [
      { hex: "#FFFFFF", name: "White", image: Rectangle67 },
      { hex: "#EB5757", name: "Red", image: Rectangle75 },
      { hex: "#2F80ED", name: "Blue", image: Rectangle76 }
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Warm flannel duvet cover set with soft texture, ensuring a comfortable night's sleep.",
    composition: "Flannel Cotton 100%",
    artno: "0643448009"
  },
  {
    id: 7,
    name: "Fitted Cotton Sheet",
    price: 24,
    images: [Rectangle70, Rectangle62, Rectangle65],
    colors: [
      { hex: "#C4C4C4", name: "Gray", image: Rectangle70 },
      { hex: "#F2C94C", name: "Yellow", image: Rectangle62 }
    ],
    sizes: ["S", "M", "L"],
    description:
      "Fitted cotton sheet with breathable fabric, providing a snug fit for your mattress.",
    composition: "Cotton 100%",
    artno: "0643448010"
  },
  {
    id: 8,
    name: "Small Candle in a Small Jar",
    price: 14,
    images: [Rectangle71, Rectangle47, Rectangle72],
    colors: [
      { hex: "#E0C097", name: "Beige", image: Rectangle71 },
      { hex: "#56CCF2", name: "Light Blue", image: Rectangle47 }
    ],
    sizes: ["One Size"],
    description:
      "Small scented candle in a decorative jar, ideal for small spaces and gifts.",
    composition: "Wax 80%, Glass 20%",
    artno: "0643448011"
  },
  {
    id: 9,
    name: "Checked Duvet Cover Set",
    price: 24,
    images: [Rectangle72, Rectangle65, Rectangle66],
    colors: [
      { hex: "#FFFFFF", name: "White", image: Rectangle72 },
      { hex: "#BB6BD9", name: "Purple", image: Rectangle65 }
    ],
    sizes: ["M", "L", "XL"],
    description:
      "Checked pattern duvet cover set for a modern and cozy bedroom look.",
    composition: "Cotton 80%, Polyester 20%",
    artno: "0643448012"
  },
  {
    id: 10,
    name: "Washed Linen Pillowcase",
    price: 18,
    images: [Rectangle75, Rectangle77, Rectangle62],
    colors: [
      { hex: "#C4C4C4", name: "Gray", image: Rectangle75 },
      { hex: "#EB5757", name: "Red", image: Rectangle77 }
    ],
    sizes: ["S", "M"],
    description:
      "Soft washed linen pillowcase that adds a rustic charm to your bedding.",
    composition: "Linen 100%",
    artno: "0643448013"
  },
  {
    id: 11,
    name: "Ribbed Wool-blend Throw",
    price: 24,
    images: [Rectangle76, Rectangle66, Rectangle48],
    colors: [
      { hex: "#E0C097", name: "Beige", image: Rectangle76 },
      { hex: "#2F80ED", name: "Blue", image: Rectangle66 },
      { hex: "#6FCF97", name: "Green", image: Rectangle48 }
    ],
    sizes: ["M", "L"],
    description:
      "Ribbed wool-blend throw that keeps you warm and stylish on chilly evenings.",
    composition: "Wool 70%, Acrylic 30%",
    artno: "0643448014"
  },
  {
    id: 12,
    name: "Mini Porcelain Dish",
    price: 8,
    images: [Rectangle77, Rectangle62, Rectangle65],
    colors: [
      { hex: "#FFFFFF", name: "White", image: Rectangle77 },
      { hex: "#F2994A", name: "Orange", image: Rectangle62 }
    ],
    sizes: ["One Size"],
    description:
      "Mini porcelain dish perfect for serving condiments or small desserts.",
    composition: "Porcelain 100%",
    artno: "0643448015"
  }
];
