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
    description: `Aluminum Security Shutters are lightweight yet highly durable rolling shutters made from premium-grade aluminum slats, specially designed to offer security, aesthetics, and corrosion resistance. These shutters are widely used in residential, commercial, and industrial spaces for doors, windows, and counters where both protection and style are required.

Key Features:
Made from extruded or roll-formed aluminum slats

Corrosion and rust-resistant – ideal for all weather conditions

Lightweight construction – easy to operate manually or motorized

Smooth and silent rolling mechanism

Available with powder coating or anodized finish for a sleek look.`,
    images: [
      "/images/AluminumSecurity1.jpg",
      "/images/AluminumSecurity2.jpg",
      "/images/AluminumSecurity3.jpg"
    ],
    category: "Shutter",
    price: "$899",
  },
  {
    id: 2,
    name: "Steel Commercial Shutters",
    description: `Steel Commercial Shutters are heavy-duty rolling shutters made from galvanized or mild steel slats, specifically engineered for industrial, commercial, and high-security premises. These shutters provide maximum protection, durability, and resistance against impact, theft, and fire, making them ideal for large openings and demanding environments.

Key Features:
Made from galvanized steel or mild steel (MS) slats

Designed for frequent and heavy usage

Manual or motorized operation available

Coated with anti-rust primer or powder coating

Compatible with automation, remote control, and sensor systems.`,
    images: [
      "/images/SteelCommercial1.jpg",
      "/images/SteelCommercial1.png",
      "/images/SteelCommercial3.jpg"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 3,
    name: "Insulated Rolling Shutters",
    description: `Insulated Rolling Shutters are specially designed rolling shutters that feature dual-layered slats with insulation material like PUF (Polyurethane Foam) or Rockwool sandwiched in between. These shutters are ideal for places that require thermal insulation, noise reduction, and high security, such as cold storage units, commercial buildings, warehouses, and garages.

Key Features:
Constructed with double-layered galvanized steel or aluminum slats

Core filled with high-density insulation material (PUF/Rockwool)

Available in manual and motorized options

Coated with anti-corrosive paint or powder coating

Provides thermal, sound, and fire insulation (depending on material used).`,
    images: [
      "/images/InsulatedRolling1.jpg",
      "/images/InsulatedRolling2.webp",
      "/images/InsulatedRolling3.jpg"
    ],
    category: "Shutter",
    price: "$1,099",
  },
  {
    id: 4,
    name: "Fire-Rated Shutters",
    description: `Fire Rated Shutters are specially engineered rolling shutters made to withstand high temperatures and prevent the spread of fire for a specific time duration (usually 1, 2, or 4 hours, as certified). These shutters are used in areas where fire compartmentalization and life safety regulations are critical. They are constructed using fire-resistant materials, and tested as per international fire safety standards (like IS: 3614, BS 476, UL, etc.).

Key Features:
Made from reinforced galvanized steel or stainless steel slats

Infused with fire-resistant insulation layers

Available with certified fire rating durations (1 to 4 hours)

Can be integrated with fire alarm and smoke detection systems

Automatic drop mechanism on fire signal (gravity fail-safe).`,
    images: [
      "/images/FireRated1.jpg",
      "/images/FireRated2.jpg",
      "/images/FireRated3.png"
    ],
    category: "Shutter",
    price: "$1,499",
  },
  {
    id: 5,
    name: "Perforated Rolling Shutters",
    description: `Perforated Rolling Shutters are specially designed shutters made from steel or aluminum slats with evenly spaced small holes (perforations) across the surface. These shutters provide security while allowing partial visibility and airflow, making them ideal for showrooms, display areas, and retail stores where products remain visible even when the shutter is closed.

Key Features:
Made from galvanized steel, stainless steel, or aluminum slats

Uniform perforations allow light, air, and limited visibility

Manual or motorized operation available

Can be powder-coated or painted in custom colors

Suitable for internal and external installation.`,
    images: [
      "/images/PerforatedRolling1.webp",
      "/images/PerforatedRolling2.jpg",
      "/images/PerforatedRolling3.jpg"
    ],
    category: "Shutter",
    price: "$1,199",
  },
  {
    id: 6,
    name: "Stair",
    description: `Stainless Steel Stairs are modern, sleek, and corrosion-resistant stairs made using high-grade SS pipes, sheets, or rods. They are mostly used in residential, commercial, and high-end architectural projects for their aesthetic appeal, durability, and low maintenance.

Key Features:
Made from 304 or 316 grade stainless steel

Rust-proof and stain-resistant – ideal for indoor & outdoor use

Available in matte, glossy, or mirror finish

Often paired with glass, granite, or wooden treads

Requires minimal maintenance.`,
    images: [
      "/images/Stair1.webp",
      "/images/Stair2.webp",
      "/images/Stair3.webp"
    ],
    category: "Stair",
    price: "$1,299",
  },
  {
    id: 7,
    name: "Manual-Shutter",
    description: `A Manual Shutter is a traditional and reliable shutter system that is operated by hand. Made from iron, steel, or aluminum sheets, it rolls up when opened and rolls down when closed using a mechanical roller mechanism. It doesn’t require electricity, making it ideal for locations with limited power access.\n 
      Key Features:
No electricity required – fully hand-operated.

Strong and durable – excellent for security.

Low maintenance – simple mechanism, easy to repair.

Cost-effective – more affordable than automatic shutters..`,
    images: [
      "/images/manual1.jpg",
      "/images/manual2.jpg",
      "/images/manual3.jpg"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 8,
    name: "Motorized Shutter",
    description: `A Motorized Shutter is an advanced and convenient shutter system that operates automatically with the help of an electric motor. It can be controlled via remote, wall switch, or even a mobile app in some modern systems. Made from high-quality materials like galvanized steel, aluminum, or polycarbonate, this shutter offers both security and ease of use.

Key Features:
Remote or switch-controlled – smooth and effortless operation.

Electric motor-driven – fast opening and closing.

Silent operation – minimal noise during movement.

Customizable sizes and finishes – suitable for all property types.`,
    images: [
      "/images/Motorized1.jpg",
      "/images/Motorized2.webp",
      "/images/Motorized2.webp"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 9,
    name: "Gear-Rolling-Shutter",
    description: `A Gear Rolling Shutter is a type of manually operated shutter that uses a gear mechanism (usually with a chain or crank handle) to make the lifting and lowering process smoother and easier, especially for larger and heavier shutters. This system provides better control and requires less physical effort compared to basic manual shutters.

Key Features:
Gear-operated system – uses chain or crank handle for operation

Smooth handling – ideal for large and heavy shutters

Sturdy construction – made from galvanized steel or aluminum

Locking options available – enhanced security`,
    images: [
      "/images/GearRolling1.jpeg",
      "/images/GearRolling2.jpg",
      "/images/GearRolling3.webp"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 10,
    name: "Rapid-Shutter",
    description: `A Rapid Shutter, also known as a High-Speed Shutter, is a fast-operating, motorized shutter system designed for industrial and commercial environments where speed, efficiency, and insulation are important. It opens and closes at a much faster rate than regular shutters, helping to maintain internal temperature, improve workflow, and enhance security.

Key Features:
High-speed motorized operation – opens/closes within seconds

Made from PVC, fabric, or aluminum – lightweight yet durable

Advanced control systems – operated via sensors, remote, or switch

Wind-resistant and weather-proof – suitable for harsh environments

Transparent sections optional – for visibility and safety`,
    images: [
      "/images/Rapid1.jpg",
      "/images/Rapid2.jpg",
      "/images/Rapid3.jpg"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 11,
    name: "Aluminium shutters",
    description: `Aluminium Shutters are lightweight, corrosion-resistant, and highly durable shutter systems designed for both residential and commercial applications. These shutters offer a sleek appearance while ensuring security and weather protection. They are available in both manual and motorized versions.

Key Features:
Made from premium-grade aluminum – rust-proof and weather-resistant

Lightweight yet strong – easy to operate and long-lasting

Smooth finish with powder coating options – available in multiple colors

Low noise operation – ideal for urban and indoor spaces

Available in solid, perforated, or grill types`,
    images: [
      "/images/Aluminium1.jpg",
      "/images/Aluminium2.webp",
      "/images/Aluminium3.jpg"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 12,
    name: "Stainless-Steel-Shutter",
    description: `Stainless Steel Shutters are high-strength, corrosion-resistant shutter systems designed for locations that require maximum security, hygiene, and durability. Made from premium-grade stainless steel (SS 304 or SS 316), these shutters offer excellent protection against weather, theft, and rust — making them ideal for high-end commercial and industrial applications.

Key Features:
Made from stainless steel – rust-proof, strong, and long-lasting

Available in brushed, polished, or matte finishes – gives a premium look

Manual or motorized operation – depending on site requirements

High load-bearing capacity – suitable for wide openings

Custom design options – solid, perforated, or grill styles`,
    images: [
      "/images/Stainless1.png",
      "/images/Stainless2.jpg",
      "/images/Stainless3.webp"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 13,
    name: "Galvanized-Shutter",
    description: `A Galvanized Shutter is a strong and durable shutter made from galvanized steel, which is coated with a layer of zinc to prevent rust and corrosion. These shutters are highly reliable for industrial, commercial, and residential use where long-term durability and security are essential. Available in both manual and motorized versions, they offer high resistance to harsh weather conditions.

Key Features:
Made from galvanized steel – rust-resistant and weatherproof

Zinc-coated surface – prevents corrosion and increases life span

Available in plain, perforated, or grill styles

Can be powder-coated for better finish and extra protection

Supports manual, gear, and motorized operation`,
    images: [
      "/images/Galvanized1.webp",
      "/images/Galvanized2.jpg",
      "/images/Galvanized3.png"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 14,
    name: "Galvalume-Shutter",
    description: `A Galvalume Shutter is a high-performance shutter made from Galvalume steel, which is a combination of zinc, aluminum, and silicon coating over steel. This unique coating provides superior corrosion resistance, heat reflectivity, and longer life than standard galvanized shutters. It is an ideal choice for industrial, coastal, and high-moisture environments.

Key Features:
Made from Galvalume steel – 55% aluminum, 43.5% zinc, and 1.5% silicon coating

High corrosion and heat resistance – performs better than normal galvanized steel

Lightweight yet strong – easy to handle with long life

Modern finish – smooth surface with aesthetic appeal

Supports manual, gear, or motorized operation`,
    images: [
      "/images/Galvalume1.jpg",
      "/images/Galvalume2.jpg",
      "/images/Galvalume3.webp"

    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 15,
    name: "Color-Coated-Shutter",
    description: `A Color-Coated Shutter is a high-quality shutter system that is made from mild steel or galvanized steel and then coated with a color finish using powder coating or polyester coating techniques. These shutters not only offer superior protection and security but also enhance the aesthetic appeal of the property with a wide range of vibrant colors.

Key Features:
Made from mild steel or galvanized steel – sturdy and rust-resistant

Color-coated finish – available in a variety of shades (standard and custom colors)

Powder coating – provides better durability and scratch resistance

Resistant to fading and UV degradation – maintains color quality for longer

Manual or motorized operation – tailored to suit different needs`,
    images: [
      "/images/ColorCoated1.jpg",
      "/images/ColorCoated2.jpg",
      "/images/ColorCoated3.webp"

    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 16,
    name: "Mild-Steel-Shutter",
    description: `A Mild Steel (MS) Shutter is one of the most widely used and cost-effective shutter types, made from low-carbon steel that offers strength, durability, and solid protection. It is ideal for areas where basic security and affordability are the primary needs. These shutters can be operated manually, through a gear system, or with a motor.

Key Features:
Constructed from mild steel – strong and impact-resistant

Available in solid, perforated, or grill designs

Can be painted or powder-coated for protection and better appearance

Supports manual, gear, or motorized operation

Customizable sizes and thicknesses`,
    images: [
      "/images/MildSteel1.jpg",
      "/images/MildSteel2.jpeg",
      "/images/MildSteel3.jpg"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 17,
    name: "Grill-Rolling-Shutter",
    description: `A Grill Rolling Shutter is a type of rolling shutter designed with interlinked steel or aluminum rods that form a grill-like structure. It provides moderate security while maintaining visibility and airflow, making it ideal for places where display and ventilation are just as important as protection.

Key Features:
Made from MS, galvanized steel, or aluminum grills

Open-pattern design – allows visibility from inside and outside

Customizable spacing between grills

Manual or motorized operation available

Powder-coated or painted finish – for better appearance and durability`,
    images: [
      "/images/GrillRolling1.jpg",
      "/images/GrillRolling2.jpeg",
      "/images/GrillRolling3.jpg"
    ],
    category: "Shutter",
    price: "$1,299",
  },
  {
    id: 18,
    name: "Double-Door-Metal-Gate",
    description: `A Double Door Metal Gate is a strong, stylish, and versatile entry solution designed for residential, commercial, or industrial properties. It consists of two hinged metal panels that open from the center, allowing wider access for vehicles and creating a grand entrance look. Made from materials like mild steel, wrought iron, or stainless steel, these gates are highly customizable in design, finish, and automation.

Key Features:
Two-panel hinged opening – wide and symmetrical access

Made from MS, wrought iron, or stainless steel – depending on usage

Can be manually operated or fully automated

Available in plain, decorative, or laser-cut designs

Anti-corrosion coatings – like powder coating or galvanization`,
    images: [
      "/images/Doubledoor1.jpeg",
      "/images/Doubledoor2.jpg",
      "/images/Doubledoor3.jpg"

    ],
    category: "Doors",
    price: "$1,299",
  },
  {
    id: 19,
    name: "Channel-Gate",
    description: `A Channel Gate, also known as a Collapsible Gate or Scissor Gate, is a security gate made of interconnected metal channels or flats that slide horizontally on rails. It operates like an accordion or scissor, expanding and folding easily. These gates are known for providing strong security with maximum visibility and ventilation, making them ideal for both residential and commercial use.

Key Features:
Made from MS flats/channels – often galvanized or painted for rust protection

Sliding and collapsible design – folds sideways for space-saving access

Available in single-side or double-side opening

Runs on top and bottom rails – with rollers for smooth movement

Can be locked with padlocks or integrated lock system`,
    images: [
      "/images/ChannelGate1.jpeg",
      "/images/ChannelGate2.jpg",
      "/images/ChannelGate3.jpg"
    ],
    category: "Doors",
    price: "$1,299",
  },
  {
    id: 20,
    name: "MS-Grill",
    description: `MS (Mild Steel) Grills are strong, customizable metal structures made from low-carbon steel, commonly used for windows, balconies, stair railings, gates, and partitions. These grills are designed to offer security, ventilation, and often decorative aesthetics, making them a popular choice in both residential and commercial properties.

Key Features:
Made from mild steel (MS) – durable and cost-effective

Available in various designs – from simple bars to ornamental patterns

Can be painted or powder-coated – for rust protection and visual appeal

Customizable shapes and sizes – flat, round, square bars

Suitable for indoor and outdoor use`,
    images: [
      "/images/Msgrill1.jpg",
      "/images/Msgrill2.jpg",
      "/images/Msgrill3.jpg"
    ],
    category: "Railing",
    price: "$1,299",
  },
  {
    id: 21,
    name: "Warehouse-shed",
    description: `A Warehouse Shed is a large, open-span structure designed to store goods, machinery, raw materials, or finished products. These sheds are typically constructed using pre-engineered steel, MS frames, or tubular structures, and are covered with galvanized sheets, color-coated sheets, or galvalume roofing panels. Warehouse sheds are known for their durability, large storage space, easy access, and cost-effectiveness.

Key Features:
Made from MS structure, PEB (Pre-Engineered Building), or tubular frames

Covered with GI, color-coated, or galvalume sheets

Open-span design – no internal pillars to interrupt space

Available with sliding or rolling shutters for entry/exit

Optional insulation, skylights, and ventilation systems`,
    images: [
      "/images/Warehouseshed1.webp",
      "/images/Warehouseshed2.jpg",
      "/images/Warehouseshed3.jpg"
    ],
    category: "Shed",
    price: "$1,299",
  },
  {
    id: 22,
    name: "Iron-Door",
    description: `An Iron Door is a highly durable and secure entry solution made from solid iron or iron sheets. Known for its robust strength and resistance to forced entry, iron doors are ideal for residential, industrial, and commercial properties where safety is the top priority. These doors can be plain, paneled, or decorative, and are often powder-coated or painted to resist corrosion and enhance appearance.

Key Features:
Made from solid iron or MS sheet with iron framing

Available in single or double door formats

Can be customized with grills, glass, or CNC laser-cut designs

Rust-protected with enamel paint or powder coating

Heavy-duty hinges and locking systems for added security`,
    images: [
      "/images/IronDoor1.jpeg",
      "/images/IronDoor2.jpeg",
      "/images/IronDoor3.jpg"
    ],
    category: "Doors",
    price: "$1,299",
  },
  {
    id: 23,
    name: "Ms-Table",
    description: `An MS Table is a strong and durable table made from Mild Steel (MS), known for its high load-bearing capacity and versatile usage. These tables are commonly used in industrial, commercial, and domestic environments where strength, budget, and long-term use are key requirements.

Key Features:
Made with MS angles, pipes, or square tubes

Robust structure suitable for heavy-duty use

Finished with anti-rust paint or powder coating

Customizable size, design, and top surface (MS, plywood, laminate, granite, etc.)

Easy to fabricate, repair, and relocate`,
    images: [
      "/images/mstable1.jpg",
      "/images/mstable2.webp",
      "/images/mstable3.jpg"
    ],
    category: "Table",
    price: "$1,299",
  },
  {
    id: 24,
    name: "Ms-Table",
    description: `An MS Table is a strong and durable table made from Mild Steel (MS), known for its high load-bearing capacity and versatile usage. These tables are commonly used in industrial, commercial, and domestic environments where strength, budget, and long-term use are key requirements.

Key Features:
Made with MS angles, pipes, or square tubes

Robust structure suitable for heavy-duty use

Finished with anti-rust paint or powder coating

Customizable size, design, and top surface (MS, plywood, laminate, granite, etc.)

Easy to fabricate, repair, and relocate`,
    images: [
      "/images/mstable1.jpg",
      "/images/mstable2.webp",
      "/images/mstable3.jpg"
    ],
    category: "Stair",
    price: "$1,299",
  },



]


