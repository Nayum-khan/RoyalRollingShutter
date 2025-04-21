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
      name: "Straight-Stair",
      description: `A Straight MS Stair is a basic yet highly durable staircase made from Mild Steel (MS), ideal for providing strong and stable vertical access. With a straight-line design, it is the most commonly used type of stair, perfect for spaces where direct and efficient movement is required.

Key Features:
Constructed using MS angles, square pipes, or channels for a rigid structure

Designed for heavy-duty use in all kinds of environments

Protected with anti-rust paint or powder coating for long-lasting performance

Tread surface options: MS sheet, chequered plate, wood, granite, or stone

Customizable in height, width, step size, and finish

Optional railings available in MS, SS, or wood

Easy to fabricate, install, and maintain

Straight MS Stairs are ideal for factories, terraces, residential buildings, commercial setups, and warehouses—delivering reliable performance, strength, and safety for everyday use.`,
      images: [
        "/images/StraightStair1.webp",
        "/images/StraightStair2.webp",
        "/images/StraightStair3.jpg"
      ],
      category: "Stair",
      price: "$1,299",
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
      name: "L-Shaped-Stair",
      description: `An L-Shaped Stair is a functional and space-efficient staircase featuring a 90-degree turn in its design. This configuration is ideal for spaces where maximizing available area is important, yet reliable and strong vertical access is required. It is widely used in both residential and commercial settings.

Key Features:
Constructed with strong materials such as steel, wood, or concrete

90-degree turn allows for efficient use of space while maintaining strength

Available with a variety of step surface options like wood, stone, or metal

Customizable dimensions including height, width, and step size to suit the specific space

Optional railings available for added safety and design, in materials like steel, wood, or glass

Easy to install and maintain, with customizable finishes

L-Shaped Stairs are perfect for residential homes, offices, warehouses, and small commercial spaces, offering a space-efficient, safe, and aesthetically pleasing solution to vertical access.`,
      images: [
        "/images/L-ShapedStair1.webp",
        "/images/L-ShapedStair2.webp",
        "/images/L-ShapedStair3.webp"
      ],
      category: "Stair",
      price: "$1,299",
    },
{
      id: 25,
      name: "Spiral-Stair",
      description: `A Spiral Stair is a circular staircase that winds around a central pole, offering a stylish and space-saving solution for vertical movement. Its compact footprint makes it ideal for areas where space is limited, without compromising on strength or design appeal.

Key Features:
Built around a central column with steps spiraling upward

Requires minimal floor space – ideal for tight or corner areas

Made using durable materials like steel, wood, or a combination

Customizable in diameter, height, step count, and railing style

Step surface options: wooden planks, metal sheets, or stone slabs

Optional railing in steel, glass, or designer finishes for safety and aesthetics

Offers a modern and architectural look to any space

Spiral Stairs are perfect for homes, duplexes, mezzanines, terraces, showrooms, and compact interiors, combining functionality with visual elegance.`,
      images: [
        "/images/SpiralStair1.jpeg",
        "/images/SpiralStair2.jpg",
        "/images/SpiralStair3.jpg"
      ],
      category: "Stair",
      price: "$1,299",
    },
{
      id: 26,
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
      id: 27,
      name: "Flush-Door",
      description: `A Flush Door is a modern, minimalist door with a completely flat and smooth surface, offering a clean and elegant look. It is designed for durability, affordability, and versatility—making it one of the most commonly used doors in homes, offices, and commercial spaces.

Key Features:
Plain, smooth surface – suitable for painting, laminates, or veneers

Built with a solid core (blockboard, particle board, or honeycomb)

Frame made of hardwood or softwood, providing strength and support

Lightweight yet durable – resistant to warping or bending

Easy to install and maintain

Available in customized sizes, thicknesses, and finishes

Budget-friendly option for both interior and exterior use

Optional: Fire-rated, waterproof, or soundproof versions available

Flush Doors are ideal for residential bedrooms, bathrooms, office cabins, storerooms, and corridors, offering a perfect balance of simplicity, strength, and cost-effectiveness.`,
      images: [
        "/images/FlushDoor1.webp",
        "/images/FlushDoor2.webp",
        "/images/FlushDoor3.jpg"
      ],
      category: "Door",
      price: "$1,499",
    },
{
      id: 28,
      name: "Sliding-Door",
      description: `A Sliding Door is a modern and practical door that moves horizontally along tracks instead of swinging open. It's ideal for areas with limited space, offering a sleek look and smooth operation in both residential and commercial settings.

Key Features:
Operates on top and bottom tracks – glides smoothly without swinging

Saves space – ideal for tight areas or wide openings

Available in various materials: glass, wood, aluminum, steel, or composite

Can be single-panel or multi-panel depending on the opening size

Optional: Soft-close mechanism, locks, or handles for added safety and design

Customizable sizes, finishes, and frame colors

Suitable for indoor and outdoor use – balcony, patio, wardrobe, office partitions, etc.

Weather-resistant and low-maintenance options available for exterior use

Sliding Doors are perfect for balconies, terraces, conference rooms, wardrobes, living areas, and showrooms, providing an elegant look with practical functionality.`,
      images: [
        "/images/SlidingDoor1.jpeg",
        "/images/SlidingDoor2.jpg",
        "/images/SlidingDoor3.jpg"
      ],
      category: "Door",
      price: "$1,499",
    },
{
      id: 29,
      name: "French-Door",
      description: `A French Door is a pair of doors fitted with large glass panels, designed to bring in natural light while adding a touch of elegance and openness to any space. These doors are perfect for both indoor and outdoor transitions, combining beauty with functionality.

Key Features:
Typically designed as double doors that open from the center

Fitted with clear or frosted glass panels – full or divided light styles available

Available in wood, aluminum, UPVC, or steel frames

Enhances natural light and visual connection between spaces

Can swing inward or outward, based on requirement

Customizable in size, frame design, color, and glass type (plain, tinted, toughened, etc.)

Optional: Grills, mosquito mesh, locks, or security fittings

Weather-sealed options available for balconies, patios, gardens, or terraces

French Doors are ideal for living rooms, balconies, terraces, cafes, garden entries, and hallway transitions, offering a perfect blend of style, light, and openness.`,
      images: [
        "/images/FrenchDoor1.webp",
        "/images/FrenchDoor2.jpg",
        "/images/FrenchDoor3.webp"
      ],
      category: "Door",
      price: "$1,499",
    },
{
      id: 30,
      name: "Industrial-Shed",
      description: `An Industrial Shed is a large, strong structure designed for industrial purposes such as factories, warehouses, workshops, and manufacturing plants. Built to accommodate heavy machinery and operations, industrial sheds provide the essential space and durability required in industrial environments.

Key Features:
Strong steel frame construction, designed for heavy-duty usage

Spacious interior to allow movement of large machinery, equipment, and goods

Durable roofing options – usually metal sheets, GI sheets, or color-coated sheets

Large clear-span design, allowing for minimal internal columns

Ventilation systems for proper air circulation

Customizable size based on specific needs (length, width, height)

Can be designed for loading bays, storage areas, or production lines

Insulation options available for temperature-sensitive storage or manufacturing

Optional glass windows, roll-up doors, and fire-resistant materials for enhanced functionality

Industrial Sheds are ideal for factories, warehouses, distribution centers, manufacturing plants, and heavy machinery storage, offering reliable, cost-effective, and durable solutions for large-scale industrial needs.`,
      images: [
        "/images/IndustrialShed1.jpg",
        "/images/IndustrialShed1.webp",
        "/images/IndustrialShed1.jpg"
      ],
      category: "Shed",
      price: "$1,499",
    },
{
      id: 31,
      name: "Godown-Shed",
      description: `A Godown Shed is a sturdy and spacious structure primarily used for storage of goods, raw materials, and inventory in commercial and industrial settings. Built to withstand the demands of storage, these sheds offer protection from weather elements while maintaining easy access for goods handling.

Key Features:
Durable frame made from Mild Steel (MS) or GI steel for strength and longevity

Roofing made from galvanized iron (GI) sheets, color-coated metal, or polycarbonate

Large open spaces for easy storage of goods and materials

Customizable size to accommodate small to large quantities of goods

High ceiling height for stacking inventory and efficient storage

Ventilation options available to prevent humidity or moisture build-up

Optional loading docks, roller shutters, and overhead cranes for ease of access and logistics

Pest-resistant, weatherproof, and low-maintenance design

Affordable and cost-effective solution for bulk storage needs

Godown Sheds are ideal for warehouses, distribution centers, storage yards, and retail stockrooms, providing a safe, secure, and spacious environment for a wide range of stored materials.`,
      images: [
        "/images/GodownShed1.jpg",
        "/images/GodownShed2.webp",
        "/images/GodownShed3.webp"
      ],
      category: "Shed",
      price: "$1,499",
    },
{
      id: 32,
      name: "Farm-Shed",
      description: `A Farm Shed is a specialized structure designed for agricultural purposes such as storing farming equipment, livestock, feed, or crops. These sheds offer protection from weather elements and provide a functional space for farming activities, ensuring a safe and organized environment for both equipment and animals.

Key Features:
Sturdy frame made from Mild Steel (MS), GI steel, or wood

Roofing materials: GI sheets, polycarbonate, or tensile fabric for effective protection against weather

Spacious and open layout for ease of movement and storage

Customizable sizes to suit specific agricultural needs – from small equipment storage to large livestock enclosures

Ventilation systems to ensure proper air circulation, especially for livestock sheds

Affordable and low-maintenance construction

Weather-resistant to withstand varying climates, ensuring longevity

Optional sliding doors, roller shutters, or partition walls for separation of areas

Insulation options available for temperature-sensitive items or animals

Can be designed with open sides for better airflow or closed walls for extra protection

Farm Sheds are perfect for livestock barns, crop storage, equipment sheds, and feed storage, providing a reliable, cost-effective, and weather-resistant solution for agricultural activities.`,
      images: [
        "/images/farmshed1.webp",
        "/images/farmshed2.webp",
        "/images/farmshed3.webp"
      ],
      category: "Shed",
      price: "$1,499",
    },
{
      id: 33,
      name: "Parking-Shed",
      description: `A Parking Shed is a structure designed to provide shelter and protection for vehicles, such as cars, bikes, or trucks. These sheds are built to withstand harsh weather conditions while offering a convenient, space-saving solution for vehicle storage in both residential and commercial settings.

Key Features:
Strong frame made from Mild Steel (MS), GI steel, or aluminum for durability and longevity

Roofing materials include color-coated metal sheets, polycarbonate, or tensile fabric

Customizable size to accommodate single vehicles or multiple vehicles

Open-sided design or with partial walls for easy access and ventilation

Compact and space-efficient, ideal for garages, parking lots, or driveways

Weather-resistant to provide protection from rain, sun, hail, and snow

Affordable and low-maintenance construction

Optional reinforced foundation, lockable gates, or automated sliding doors for added security

UV-resistant and dustproof, ensuring that vehicles remain protected

Parking Sheds are perfect for residential driveways, office parking lots, commercial spaces, and public parking areas, providing a safe and convenient solution to protect vehicles from the elements.`,
      images: [
        "/images/ParkingShed1.jpeg",
        "/images/ParkingShed2.jpg",
        "/images/ParkingShed3.jpg"
      ],
      category: "Shed",
      price: "$1,499",
    },
{
      id: 34,
      name: "Terrace Shed",
      description: `A Terrace Shed is a versatile structure designed to provide shelter and protection on rooftops or terraces. These sheds are ideal for creating additional usable space for storage, leisure, or even small gardens, while also offering protection from the elements.

Key Features:
Frame made from Mild Steel (MS), Galvanized Iron (GI), or aluminum for strength and durability

Roofing materials include polycarbonate sheets, GI sheets, tensile fabric, or color-coated metal

Customizable size to fit the specific dimensions of the terrace or rooftop area

Waterproof and weather-resistant, ideal for outdoor use

Ventilated design to ensure proper airflow and prevent humidity buildup

Easy to install and relocate if needed, making it a flexible solution

Lightweight construction for ease of installation without excessive load on the structure

Optional grill mesh or railing for added safety

Available in open-side or enclosed designs, depending on requirements

Aesthetic design options for a modern or traditional look that complements the rooftop

Terrace Sheds are perfect for creating shaded areas, additional storage, garden spaces, or outdoor seating on rooftops, terraces, and balconies. They provide a practical and stylish way to utilize unused rooftop space efficiently.`,
      images: [
        "/images/TerraceShed1.jpg",
        "/images/TerraceShed1.webp",
        "/images/TerraceShed1.jpg"
      ],
      category: "Shed",
      price: "$1,499",
    },
{
      id: 35,
      name: "Open-Shed",
      description: `An Open Shed is a basic, functional structure with an open design, providing shelter and protection from the elements without enclosing the sides. It is perfect for areas that require easy access, natural ventilation, and minimal construction while offering protection for materials, equipment, or activities.

Key Features:
Open-sided design with no walls, allowing for maximum airflow and easy access

Strong frame made from Mild Steel (MS) or GI steel for structural integrity and durability

Roofing options: GI sheets, color-coated metal, or polycarbonate sheets

Customizable size to fit specific storage needs or workspaces

Ideal for workshops, outdoor storage, markets, and agriculture

Weather-resistant roofing to provide protection from rain, sun, hail, and snow

Cost-effective and low-maintenance, making it ideal for large-scale, high-traffic areas

Simple installation and easy relocation if needed

Available with optional flooring or light barriers for certain applications

Eco-friendly options available such as tensile fabric for the roofing material

Open Sheds are suitable for construction sites, storage yards, markets, farming areas, and workshops, offering practical solutions for outdoor storage or work areas where ventilation and accessibility are important.`,
      images: [
        "/images/OpenShed1.jpg",
        "/images/OpenShed1.jpg",
        "/images/OpenShed1.webp"
      ],
      category: "Shed",
      price: "$1,499",
    },
{
      id: 36,
      name: "Staircases-Railing",
      description: `Staircase Railings are essential safety features that also add style and structure to any staircase. Designed to provide support and prevent falls, these railings are widely used in residential, commercial, and industrial spaces where safe and stable stair movement is required.

Key Features:
Installed alongside staircases to offer grip, balance, and safety during movement

Made from durable materials such as Mild Steel (MS), Stainless Steel, Aluminum, Glass, or Wood

Customizable designs to match architectural styles—modern, classic, or industrial

Finishing options: powder-coated, painted, polished, or wood-stained

Can include vertical bars, horizontal rails, glass panels, or decorative patterns

Suitable for indoor and outdoor use—weather-resistant coatings for outdoor installations

Available in standard and designer styles for homes, offices, malls, schools, and factories

Can be combined with steps made of granite, concrete, wood, or tiles

Optional LED lighting or etched glass for premium installations`,
      images: [
        "/images/Staircasesrailing1.jpg",
        "/images/Staircasesrailing2.jpg",
        "/images/Staircasesrailing3.webp"
      ],
      category: "Railing",
      price: "$1,499",
    },
{
      id: 37,
      name: "Balconies-Railing",
      description: `Balcony Railings serve both a protective and decorative purpose, forming a secure boundary for balconies while enhancing the overall appearance of the building. They are designed to withstand outdoor conditions and ensure the safety of individuals in elevated areas.

Key Features:
Installed around balconies to prevent falls and ensure safety

Made from robust materials such as Mild Steel (MS), Stainless Steel, Aluminum, Glass, or Wrought Iron

Weather-resistant finishes like powder coating, painting, or polishing for long-lasting durability

Available in modern, traditional, or custom decorative designs

Design options: vertical bars, horizontal patterns, mesh styles, or glass panels

Can include planter holders, grills, or laser-cut panels for aesthetic appeal

Suitable for residential apartments, bungalows, hotels, resorts, and commercial buildings

Custom height and width options as per safety standards

Optional privacy screens, frosted glass, or curved elements for premium designs`,
      images: [
        "/images/Balconierailing1.webp",
        "/images/Balconierailing2.webp",
        "/images/Balconierailing3.jpg"
      ],
      category: "Railing",
      price: "$1,499",
    },
{
      id: 38,
      name: "Terraces Railing",
      description: `Terrace Railings are essential for safety and style in open rooftop areas. They provide a secure perimeter while enhancing the usability and aesthetic of terraces, making them safer for gatherings, relaxation, or daily use—especially in residential and commercial buildings.

Key Features:
Installed on terrace edges to prevent accidental falls and ensure user safety

Constructed using strong materials like Mild Steel (MS), Stainless Steel, Aluminum, Glass, or Wrought Iron

Weatherproof finishes: powder-coated, painted, or polished to withstand sun, rain, and dust

Design options: plain bars, designer patterns, glass panels, or perforated metal sheets

Height and spacing as per safety standards for children and elders

Customizable styles for modern, minimalist, or traditional architecture

Suitable for residential buildings, hotels, offices, hostels, or rooftop cafes

Can be integrated with LED lights, flower planters, or privacy screens

Easy to maintain and designed for long-lasting outdoor durability`,
      images: [
        "/images/Terracesrailing1.webp",
        "/images/Terracesrailing2.webp",
        "/images/Terracesrailing3.webp"
      ],
      category: "Railing",
      price: "$1,499",
    },

{
      id: 39,
      name: "Walkways-Railing",
      description: `Walkway Railings are protective barriers installed along pathways, ramps, and elevated walkways to ensure pedestrian safety and directional guidance. Designed for durability and support, these railings help prevent accidents while maintaining smooth foot traffic in public, commercial, and industrial spaces.

Key Features:
Installed alongside elevated paths, ramps, bridges, and corridors

Made from Mild Steel (MS), Stainless Steel, or Aluminum for strength and stability

Weather-resistant coatings like powder coating or galvanization for long-term outdoor use

Designed for high foot-traffic areas with safe grip height and spacing

Available in simple guardrail designs or decorative styles depending on location

Can include handrails, kickplates, or glass panels for added safety and aesthetics

Custom lengths and heights to suit different types of walkways

Suitable for residential societies, parks, schools, malls, factories, and public spaces

Option for modular or welded installation, depending on structure type`,
      images: [
        "/images/WalkwaysPathways1.jpg",
        "/images/WalkwaysPathways2.jpeg",
        "/images/WalkwaysPathways3.webp"
      ],
      category: "Railing",
      price: "$1,499",
    },
{
      id: 40,
      name: "Center-Table",
      description: `A Center Table is a low-height table placed at the center of a seating arrangement—usually in living rooms or lounges. It adds both functionality and aesthetic value to the space, serving as a focal point for decor, refreshments, or casual gatherings.

Key Features:
Placed in the middle of sofas or seating areas to complement the room’s layout

Available in square, round, rectangular, or custom shapes

Constructed using Wood, Glass, Mild Steel (MS), Stainless Steel, or Mixed materials

Top surface options include: toughened glass, wooden laminate, marble, or granite

Can include lower shelves or drawers for storage of magazines, remotes, or decor

Finishing styles: matte, glossy, rustic, or modern minimalist

Available in traditional, modern, industrial, or luxury designs

Customizable sizes to suit small or large rooms

Durable construction to hold decorative items, tea sets, or lightweight electronics

Suitable for homes, waiting rooms, offices, lounges, hotels, and guest areas`,
      images: [
        "/images/ironcentertable1.jpeg",
        "/images/ironcentertable2.webp",
        "/images/ironcentertable3.webp"
      ],
      category: "Table",
      price: "$1,499",
    },
{
      id: 41,
      name: "Office-Table",
      description: `An Office Table is a specially designed workstation that supports productivity and comfort in professional environments. It offers a practical surface for work while keeping space organized, whether in a corporate office, home setup, or commercial space.

Key Features:
Designed for office use, providing a stable and spacious work surface

Built with Mild Steel (MS) frames, wooden tops, or modular materials

Top surface options: pre-laminated board, plywood with laminate, glass, or engineered wood

Available with drawers, cabinets, CPU holders, and wire management options

Comes in various styles: executive desks, manager tables, reception tables, and modular desks

Finishing options include powder-coated MS legs, wooden textures, or painted surfaces

Ergonomic designs to support long working hours with comfort

Available in custom sizes, L-shaped, U-shaped, or compact designs for home offices

Sturdy enough to support computers, printers, files, and office accessories

Suitable for corporate offices, IT companies, educational institutes, home workspaces, and reception areas`,
      images: [
        "/images/ironofficetable1.webp",
        "/images/ironofficetable2.webp",
        "/images/ironofficetable3.jpg"
      ],
      category: "Table",
      price: "$1,499",
    },
{
      id: 42,
      name: "Dining-Table",
      description: `A Dining Table is a key piece of furniture designed for comfortable group dining. Whether in homes, restaurants, hotels, or canteens, it creates a central space for eating, conversations, and shared moments—while also adding to the interior aesthetics.

Key Features:
Designed for shared dining experiences in homes, restaurants, and cafeterias

Built from Solid Wood, Plywood with Laminate, MS (Mild Steel) Frames, or Stainless Steel

Top surface options: laminate, glass, marble, granite, or hardwood

Available in various shapes: rectangular, square, round, or foldable designs

Comes in multiple seating capacities: 2-seater, 4-seater, 6-seater, 8-seater, or more

Optional matching chairs or benches for a complete set

Sturdy and easy-to-clean surfaces for daily use

Available in modular, classic, or contemporary styles

Ideal for residential use, hotels, mess halls, canteens, and banquet halls

Finishing options: matte, gloss, powder-coated MS frame, or polished wooden body`,
      images: [
        "/images/DiningTable1.jpg",
        "/images/DiningTable2.jpg",
        "/images/DiningTable3.jpg"
      ],
      category: "Table",
      price: "$1,499",
    },
{
      id: 43,
      name: "Study Table",
      description: `A Study Table is specially designed to create a comfortable and organized environment for studying, reading, writing, or computer work. Ideal for students, professionals, and home users, it supports concentration and productivity with functional design and smart storage.

Key Features:
Crafted for students, readers, and professionals for focused activities

Made using Plywood, Pre-laminated boards, MDF, or Mild Steel (MS) frames

Available with storage options like drawers, open shelves, book racks, and cabinets

Compact or space-saving designs, ideal for small rooms or study corners

Top surfaces: wood finish, laminate-coated, or anti-scratch engineered wood

Available in standard, L-shaped, foldable, or wall-mounted formats

Ergonomic height for comfortable seating posture during long hours

Optional keyboard tray, lamp holder, and cable management slot

Finishing options: wood grain, matte, or powder-coated metal legs

Suitable for homes, hostels, libraries, tuition centers, and online learners`,
      images: [
        "/images/StudyTable1.webp",
        "/images/StudyTable2.webp",
        "/images/StudyTable3.png"
      ],
      category: "Table",
      price: "$1,499",
    },



  ]


