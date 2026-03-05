import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.png";

export const products = [
    {
        id: 1,
        name: "EON Series",
        price: 4500.00,
        category: "Gear Boxes",
        image: product1,
        description: "Keeping in line with its strategy of \"Gearing the Future\" Elecon presents the EON Series - answer to industry needs. The EON series has been developed keeping in mind the industry requirements and offers greater flexibility and advantages and presents a wide range of Features:"
    },
    {
        id: 2,
        name: "Extruder Gear Box",
        price: 1200.00,
        category: "Gear Boxes",
        image: product2,
        description: "An Extruder Gearbox is a mechanical component used in plastic and polymer extrusion machines to transmit power from the motor to the extruder screw. It reduces the motor speed while increasing torque, allowing the screw to rotate efficiently and process materials smoothly. The gearbox is designed to handle high loads and continuous operation. It ensures stable performance, durability, and precise control during the extrusion process.",
        features: [
            "Vertically offset type Gear Box with FLS and inbuilt Thrust Bearings",
            "Compact in built on thrust bearing suitable to take care of heavy thrust load",
            "Available in ratio range from 10 to 50",
            "Power ratings from 4.7 kw to 1500 kw",
            "Single Screw Extruder Drive"
        ],
        specifications: [
            { label: "Features", value: "Vertically offset type Gear Box with FLS and inbuilt Thrust Bearings" },
            { label: "Advantages", value: "Compact in built on thrust bearing suitable to take care of heavy thrust load" },
            { label: "Technical Specifications", value: "Available in ratio range from 10 to 50 and power ratings from 4.7 kw to 1500 kw" },
            { label: "Product Application", value: "Single Screw Extruder Drive" },
            { label: "Range", value: "Available in ratio range from 10 to 50 and power ratings from 4.7 kw to 1500 kw" }
        ]
    },
    {
        id: 3,
        name: "SNU Modular Universal Mounting",
        price: 8500.00,
        category: "Gear Boxes",
        image: product3,
        description: "SNU Modular Universal Mounting is a versatile mounting system designed to provide flexible and secure installation for various industrial components. Its modular design allows easy adjustment and compatibility with different machine configurations. The system ensures stability, precise alignment, and quick assembly during installation. It is widely used in machinery setups where adaptability and reliable mounting support are required.",
        specifications: [
            { label: "Underdriven", value: "SNU-U" },
            { label: "Overdriven", value: "SNU-O" },
            { label: "Vertical output shaft up/down", value: "SNU-V" },
            { label: "Hollow output shaft", value: "SNU-SM" },
            { label: "Sizes", value: "1 5/8, 1 3/4, 2, 2 1/2, 3, 3 1/2, 4, 5, 6, 7, 8, 9, 10.5" },
            { label: "Ratio", value: "Min. 5 : 1 to Max 70 : 1" },
            { label: "Power Capacity", value: "139 kW" }
        ]
    },
    {
        id: 4,
        name: "Elign Geared Coupling",
        price: 350.00,
        category: "Couplings",
        image: product4,
        description: "Elign Geared Coupling (often spelled Align Geared Coupling) is a mechanical device used to connect two rotating shafts while transmitting torque efficiently. It is designed to accommodate minor misalignment between shafts and ensure smooth power transmission. The coupling uses gear teeth to provide strong engagement and high load capacity. It is commonly used in heavy machinery and industrial equipment for reliable and durable performance.",
        specifications: [
            { label: "Types Available", value: "ED (Double Housing), ER (One End Rigid), ET (With Spacer), EV (Vertical Application), ES (Single Housing)" },
            { label: "Size Range", value: "130 to 1,10,000 da N.m." },
            { label: "Rating Range", value: "0.136 to 115.19 kW per RPM" }
        ]
    },
    {
        id: 5,
        name: "Elflex Flexible Coupling",
        price: 2800.00,
        category: "Couplings",
        image: product5,
        description: "Elflex Flexible Coupling is a mechanical component used to connect two rotating shafts while allowing slight misalignment and absorbing vibrations. It helps ensure smooth and efficient power transmission between connected machinery. The flexible design reduces shock loads and protects equipment from damage during operation. Elflex Flexible Couplings are widely used in industrial machines for reliable and maintenance-friendly performance.",
        specifications: [
            { label: "Type EFC", value: "Size: 01 to 17 | Rating: 0.007 to 2.835 kW/R.P.M." },
            { label: "Type FC", value: "Size: 630 to 1600 | Rating: 3.35 to 45 kW/R.P.M." },
            { label: "Type FBC", value: "Size: 150 to 500 | Rating: 0.012 to 1.025 kW/R.P.M." }
        ]
    },
    {
        id: 6,
        name: "Fluid Couplings",
        price: 1500.00,
        category: "Couplings",
        image: product6,
        description: "Fluid Couplings are hydrodynamic devices used to transmit power between two rotating shafts using fluid, usually oil. They allow smooth power transfer while reducing shock loads and vibrations in machinery. Fluid couplings help protect equipment from overload and provide gradual acceleration during startup. They are commonly used in conveyors, crushers, pumps, and other heavy industrial applications.",
        specifications: [
            { label: "Product Applications", value: "Conveyors, Rotary Kiln, Travelling, Grate Nodulizer, Apron Conveyors, Elevator Drives, Separator Drive, Bulk Materials Handling, Conveyor Drive, Bucket, Slew, Belt Conveyors, Screw Conveyors, Bucket Elevator, Stacker Reclaimer Drive, Bucket Wheel, Slurry Pump, Agitator, Mixer, Screw Press, Digesters, Rotary Dryer, Feeder, Apron Feeders, Rotary Wagon Tippler, Ring Granulator, Roller Screen, Kernel Expellers, Process Applications, Crusher, Roller Press" }
        ]
    },
    {
        id: 7,
        name: "Elevator Traction Machine",
        price: 12500.00,
        category: "Machine Automation",
        image: product7,
        description: "Elevator Traction Machine is a key component in elevator systems that drives the movement of the elevator car using traction between ropes and a rotating sheave. It converts electrical energy from the motor into mechanical motion to lift and lower the elevator smoothly. The machine ensures efficient, safe, and controlled operation of the elevator. It is widely used in residential, commercial, and high-rise buildings.",
        specifications: [
            { label: "Feature", value: "Vertical transportation for Various Passenger Capacity & cabin speed." },
            { label: "Advantages", value: "Vertical transportation with smooth & safe ride in highrise public residence buildings as well as commercial to match the traffic requirements." },
            { label: "Technical Specification", value: "Various Sizes covered with 3 Passenger to 26 Passenger Capacity with cabin speed from 0.75m/s to 2m/s with roping 1:1." },
            { label: "Product Application", value: "Vertical transportation for passengers carrying as well as for goods." },
            { label: "Range", value: "From 3 Passenger (204 Kgs) to 26 Passenger Carrying capacity & for goods maximum 3000Kgs Load." }
        ]
    },
    {
        id: 8,
        name: "Compact Geared Motor (Series A)",
        price: 9200.00,
        category: "Geared Motors",
        image: product8,
        description: "Compact Geared Motor (Series A) is a space-efficient motor and gearbox combination designed to deliver high torque with reliable performance. It reduces motor speed while increasing torque, making it suitable for various industrial applications. The compact design allows easy installation in limited spaces without compromising efficiency. It is commonly used in conveyors, machinery, and automated systems for smooth and consistent operation.",
        specifications: [
            { label: "Unit Sizes", value: "9 Sizes" },
            { label: "Input Power", value: "Upto 11kW" },
            { label: "Output Torque", value: "Up to 2,764 N-m" },
            { label: "Gear Ratios", value: "Upto 200:1" },
            { label: "Output Options", value: "Solid" },
            { label: "Motor Sizes", value: "IEC Frames from 71 to 160" }
        ]
    },
    {
        id: 9,
        name: "Planetary Geared Motor (Series PL)",
        price: 9200.00,
        category: "Geared Motors",
        image: product9,
        description: "Planetary Geared Motor (Series PL) is a high-performance gear motor designed with a planetary gear system to provide high torque and efficient power transmission. Its compact and robust design ensures smooth operation and high load capacity in demanding industrial applications. The planetary gear arrangement distributes the load evenly, improving durability and efficiency. It is widely used in automation systems, conveyors, robotics, and heavy machinery.",
        specifications: [
            { label: "Type", value: "PL, PLB" },
            { label: "Sizes", value: "16 Sizes" },
            { label: "Output Torque", value: "Upto 1,00,000 N-m" },
            { label: "Gear Ratios", value: "Upto 5000:1" },
            { label: "Output Options", value: "Solid, Hollow, Splined" },
            { label: "Motor Sizes", value: "IEC Frames from 71 to 315" }
        ]
    },
    {
        id: 10,
        name: "Helical Inline Geared Motor (Series M)",
        price: 9200.00,
        category: "Geared Motors",
        image: product10,
        description: "Helical Inline Geared Motor (Series M) is a high-efficiency gear motor designed with helical gears arranged in an inline configuration. It provides smooth, quiet operation and excellent torque transmission for various industrial applications. The inline design allows easy integration with machinery while maintaining compactness and reliability. It is commonly used in conveyors, material handling systems, and automated equipment.",
        specifications: [
            { label: "Unit Sizes", value: "01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 13, 14, 16" },
            { label: "Input Power", value: "Up to 132kW" },
            { label: "Output Torque", value: "Up to 20,000 N-m" },
            { label: "Gear Ratios", value: "Up to 20,000:1" },
            { label: "Motor Sizes", value: "IEC Frames from 63 to 315" }
        ]
    },
    {
        id: 11,
        name: "Right Angled Heli - Worm Geared Motor (Series C)",
        price: 9200.00,
        category: "Geared Motors",
        image: product11,
        description: "Right Angled Heli-Worm Geared Motor (Series C) is a gear motor designed to transmit power at a 90-degree angle using a combination of helical and worm gears. This design provides smooth operation, high torque, and efficient speed reduction. It is compact and suitable for applications where space is limited and directional power transmission is required. It is commonly used in conveyors, packaging machines, and industrial automation systems.",
        specifications: [
            { label: "Unit Sizes", value: "03, 04, 05, 06, 07, 08, 09, and 10" },
            { label: "Input Power", value: "Up to 45kW" },
            { label: "Output Torque", value: "Upto 10,000 N-m" },
            { label: "Gear Ratios", value: "Upto 16,000:1" },
            { label: "Motor Sizes", value: "IEC Frames from 63 to 225" }
        ]
    },
    {
        id: 12,
        name: "Parallel Shaft Mounted Geared Motor (Series F)",
        price: 9200.00,
        category: "Geared Motors",
        image: product12,
        description: "Parallel Shaft Mounted Geared Motor (Series F) is a gear motor designed with parallel shafts to deliver high torque and efficient power transmission. It is commonly mounted directly onto the driven shaft, reducing the need for additional coupling components. The compact and robust design ensures reliable performance in heavy-duty industrial applications. It is widely used in conveyors, material handling systems, and processing machinery.",
        specifications: [
            { label: "Unit Sizes", value: "02, 03, 04, 05, 06, 07, 08, 09, 10" },
            { label: "Input Power", value: "Up to 45kW" },
            { label: "Output Torque", value: "Upto 10,000 N-m" },
            { label: "Gear Ratios", value: "Upto 20,000:1" },
            { label: "Motor Sizes", value: "IEC Frames from 63 to 225" }
        ]
    },
    {
        id: 13,
        name: "Right Angle Helical Bevel Geared Motor (Series K)",
        price: 9200.00,
        category: "Geared Motors",
        image: product13,
        description: "Right Angle Helical Bevel Geared Motor (Series K) is a high-performance gear motor designed to transmit power at a 90-degree angle using helical and bevel gears. This combination ensures smooth operation, high efficiency, and strong torque transmission. Its compact and durable design makes it suitable for demanding industrial applications. It is widely used in conveyors, material handling systems, and heavy machinery.",
        specifications: [
            { label: "Unit Sizes", value: "03, 04, 05, 06, 07, 08, 09, 10, 12, 15, 16" },
            { label: "Input Power", value: "Up to 132kW" },
            { label: "Output Torque", value: "Upto 50,000 N-m" },
            { label: "Gear Ratios", value: "Upto 10,000:1" },
            { label: "Motor Sizes", value: "IEC Frames from 63 to 315" }
        ]
    },
    {
        id: 14,
        name: "Shaft Mounted Speed Reducer (Series J)",
        price: 9200.00,
        category: "Geared Motors",
        image: product14,
        description: "Shaft Mounted Speed Reducer (Series J) is a gearbox designed to reduce motor speed while increasing torque for efficient power transmission. It is mounted directly onto the driven shaft, eliminating the need for additional mounting components. The compact and robust design ensures reliable performance in heavy-duty industrial applications. It is commonly used in conveyors, material handling systems, and processing equipment.",
        specifications: [
            { label: "Unit Sizes", value: "J1, J2, J3, J5 and J7 - Single and Double Stages" },
            { label: "Input Power", value: "Up to 55kW" },
            { label: "Output Torque", value: "Up to 5,000Nm" },
            { label: "Gear Ratios", value: "Up to 5:1 - Single Reduction | Up to 25:1 - Double Reduction" }
        ]
    },
    {
        id: 15,
        name: "Custom Drive Solution",
        price: 9200.00,
        category: "Geared Motors",
        image: product15,
        description: "Custom Drive Solution refers to specially designed power transmission systems tailored to meet specific industrial requirements. These solutions are engineered to provide optimal performance, efficiency, and reliability for unique machinery or operational needs. They may include customized gearboxes, motors, couplings, or drive assemblies. Custom drive solutions help improve productivity and ensure smooth operation in specialized industrial applications.",
        specifications: [
            { label: "Input Power", value: "As per requirement" },
            { label: "Output Torque", value: "As per requirement" },
            { label: "Gear Ratios", value: "As per requirement" },
            { label: "Output Options", value: "As per requirement" },
            { label: "Motor Sizes", value: "IEC Frames from 63 to 280" }
        ]
    }
];
