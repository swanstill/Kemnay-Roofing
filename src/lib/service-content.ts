import { Service } from "./types";

export interface ServiceDetail extends Service {
  heroSubtitle: string;
  features: { title: string; description: string; benefits: string[] }[];
  servicesOffered: string[];
  ctaText: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "roof-repairs": {
    id: "roof-repairs",
    title: "Roof Repairs",
    shortDescription: "Fast, reliable roof repairs for leaks, storm damage, and wear.",
    description: "From minor leaks to storm damage, our expert team provides fast and reliable roof repair services across Aberdeen and surrounding areas.",
    icon: "Wrench",
    image: "/images/services/roof-repairs.webp",
    heroSubtitle: "Fast, reliable repairs for leaks, storm damage, and general wear — protecting your home with lasting results.",
    features: [
      {
        title: "Storm Damage Repairs",
        description: "Swift, professional repairs for wind, rain, and storm damage. We handle missing tiles, broken flashing, and structural concerns — often responding the same day to restore safety and prevent further water ingress.",
        benefits: [
          "Same-day response for urgent repairs",
          "Prevents further water ingress and long-term damage",
          "Handles all storm-related structural concerns",
        ],
      },
      {
        title: "Repairs for All Roof Types",
        description: "We're skilled in repairing slate, tile, metal, and rubber roofing materials. We replace cracked tiles, seal leaks in rubber membranes, and address corrosion on metal roofs — always using matched materials for a consistent appearance.",
        benefits: [
          "Expertise across slate, tile, metal, and rubber roofs",
          "Matched materials for seamless repairs",
          "Long-lasting fixes that restore integrity",
        ],
      },
      {
        title: "Flat Roof Repairs",
        description: "Specialists in repairing EPDM, GRP, and felt flat roofs. We handle pooling water, blistering, and membrane damage — inspecting the entire surface and applying sealing treatments to prevent recurring issues.",
        benefits: [
          "Expert repair of EPDM, GRP, and felt roofs",
          "Complete surface inspection and treatment",
          "Prevents recurring issues with sealing",
        ],
      },
      {
        title: "Chimney & Pointing Work",
        description: "We repair damaged mortar, poorly sealed joints around chimneys, ridge tiles, and flashing. Our pointing and brickwork restoration prevents moisture penetration and preserves your roofline integrity.",
        benefits: [
          "Complete chimney and pointing restoration",
          "Prevents moisture penetration and damage",
          "Serves both traditional and modern properties",
        ],
      },
    ],
    servicesOffered: [
      "Leak detection and repair",
      "Storm damage restoration",
      "Tile and slate replacement",
      "Flat roof membrane repair",
      "Chimney repointing and repair",
      "Flashing repair and replacement",
      "Gutter repair and unblocking",
      "Emergency call-out service",
    ],
    ctaText: "Get Your Roof Repaired Today",
  },

  "new-roofs": {
    id: "new-roofs",
    title: "New Roof Installations",
    shortDescription: "Complete new roof installations using premium materials built to last.",
    description: "Whether you're building a new property or need a complete roof replacement, we install high-quality roofing systems built to last.",
    icon: "Home",
    image: "/images/services/new-roofs.webp",
    heroSubtitle: "Durable, high-quality roof installations designed to match your property's structure and style — built to withstand the elements.",
    features: [
      {
        title: "Durable Roof Installations",
        description: "We use durable materials and skilled techniques to create strong, weather-resistant roofs designed for both homes and commercial properties. Our roofs withstand heavy rainfall and strong winds common to the region.",
        benefits: [
          "Weather-resistant construction for local conditions",
          "Strong protection without inflated costs",
          "Designed for both residential and commercial properties",
        ],
      },
      {
        title: "Slate and Tile Roofs",
        description: "We install beautiful slate roofs with timeless aesthetics and exceptional weather resistance, perfect for traditional architecture. Our tile roofs offer durability and style for renovations and new builds.",
        benefits: [
          "Timeless slate for traditional properties",
          "Durable tile for renovations and new builds",
          "Weather-tight installations that last decades",
        ],
      },
      {
        title: "Flat Roofing Systems",
        description: "We specialise in EPDM rubber and GRP fibreglass flat roof systems — resistant to water pooling, cracking, and UV damage. Ideal for extensions, garages, and low-slope commercial roofs.",
        benefits: [
          "EPDM and GRP systems for long life",
          "Resistant to pooling, cracking, and UV",
          "Perfect for extensions and commercial roofs",
        ],
      },
      {
        title: "Metal Roofing Upgrades",
        description: "We offer lightweight, fire-resistant metal roofing solutions that provide outstanding weatherproof protection. Ideal for both modern builds and upgrading existing structures.",
        benefits: [
          "Lightweight and fire-resistant materials",
          "Exceptional weatherproof protection",
          "Modern aesthetic for contemporary properties",
        ],
      },
    ],
    servicesOffered: [
      "Complete new roof installations",
      "Slate and tile roofing",
      "Flat roof systems (EPDM & GRP)",
      "Metal roofing upgrades",
      "Commercial roofing solutions",
      "New build and extension roofing",
      "Roof design and consultation",
      "Building regulations compliance",
    ],
    ctaText: "Discuss Your New Roof Project",
  },

  reroofing: {
    id: "reroofing",
    title: "Roofing",
    shortDescription: "Complete roofing to renew your home with quality materials and expert craftsmanship.",
    description: "Full roofing services to breathe new life into your property. We strip, prepare, and re-roof with high-quality materials.",
    icon: "RefreshCw",
    image: "/images/services/re-roofing.webp",
    heroSubtitle: "Full roof replacement solutions that breathe new life into your property with modern, dependable systems and long-term protection.",
    features: [
      {
        title: "Roofing Services",
        description: "Full replacement of aged or failing roofs with modern, dependable systems. We carefully remove damaged coverings and install new systems that match your property's original look or upgrade it entirely.",
        benefits: [
          "Complete strip and replacement",
          "Modern materials and techniques",
          "Improved insulation and property value",
        ],
      },
      {
        title: "Roof Replacements in Varied Styles",
        description: "We cover slate, tile, and flat roof replacements — matching existing styles or upgrading to new looks. Every installation delivers a secure fit, improved insulation, and enhanced property value.",
        benefits: [
          "Wide range of roofing materials and styles",
          "Enhanced thermal performance",
          "Increased property value and kerb appeal",
        ],
      },
      {
        title: "Metal Roof Upgrades",
        description: "Lightweight, fire-resistant, and weatherproof metal roof upgrades that provide exceptional protection. Ideal for properties seeking a modern, durable alternative to traditional materials.",
        benefits: [
          "Fire-resistant and lightweight",
          "Superior weatherproof protection",
          "Modern appearance and long lifespan",
        ],
      },
      {
        title: "Custom Roofing Solutions",
        description: "Every property is unique. We provide custom solutions from small homes to large commercial sites — repairing underlying issues, strengthening weather protection, and delivering a clean, durable finish.",
        benefits: [
          "Tailored to your specific property",
          "Underlying issues repaired before roofing",
          "Clean, durable finish built to last",
        ],
      },
    ],
    servicesOffered: [
      "Full roof strip and replacement",
      "Slate, tile, and flat roof roofing",
      "Metal roof upgrades",
      "Insulation improvements",
      "Structural repairs before roofing",
      "Commercial roofing",
      "Listed building and traditional property work",
      "Free no-obligation surveys",
    ],
    ctaText: "Book Your Roofing Consultation",
  },

  "flat-roofing": {
    id: "flat-roofing",
    title: "Flat Roofs",
    shortDescription: "Specialist flat roof installation and repair using felt, EPDM, and GRP waterproof systems.",
    description: "Specialists in flat roof installation, repair, and maintenance. We use modern felt, EPDM, and GRP systems.",
    icon: "Layers",
    image: "/images/services/flat-roofing.webp",
    heroSubtitle: "Professional flat roof installation, repair, and maintenance using modern felt, EPDM, and GRP systems for complete waterproof protection.",
    features: [
      {
        title: "EPDM Rubber Roofing",
        description: "High-quality EPDM rubber roofing that offers exceptional flexibility and durability. Resistant to UV rays, temperature extremes, and punctures — ideal for extensions, garages, and garden rooms.",
        benefits: [
          "Highly flexible and durable membrane",
          "UV and weather resistant",
          "Low maintenance and long-lasting",
        ],
      },
      {
        title: "GRP Fibreglass Roofing",
        description: "Strong, seamless GRP fibreglass roofing systems that provide a smooth, watertight finish. Perfect for flat roofs where a hard-wearing, slip-resistant surface is required.",
        benefits: [
          "Seamless, fully waterproof finish",
          "Hard-wearing and slip-resistant",
          "Ideal for balconies and terraces",
        ],
      },
      {
        title: "Flat Roof Repairs",
        description: "Expert repair services for all flat roof types including felt, EPDM, and GRP. We diagnose and fix leaks, blisters, ponding water, and membrane damage with lasting results.",
        benefits: [
          "Expert diagnosis of flat roof issues",
          "Permanent repairs, not temporary fixes",
          "Cost-effective solutions before full replacement",
        ],
      },
      {
        title: "Flat Roof Maintenance",
        description: "Regular maintenance helps extend the life of your flat roof significantly. We offer inspections, cleaning, and preventative treatments to keep your roof in top condition.",
        benefits: [
          "Extends roof lifespan significantly",
          "Early detection of potential problems",
          "Prevents costly emergency repairs",
        ],
      },
    ],
    servicesOffered: [
      "EPDM rubber roofing installation",
      "GRP fibreglass roofing systems",
      "Felt roofing installation and repair",
      "Flat roof repair and patching",
      "Flat roof maintenance and inspections",
      "Green roof and terrace solutions",
      "Roof drainage and ponding solutions",
      "Commercial flat roofing",
    ],
    ctaText: "Get a Flat Roof Quote",
  },

  "roof-painting": {
    id: "roof-painting",
    title: "Roof Painting",
    shortDescription: "Professional roof painting to restore and protect your tiles with weather-resistant coatings.",
    description: "Restore and revitalise your roof with professional roof painting. Our weather-resistant coatings improve appearance and extend the life of your tiles.",
    icon: "Paintbrush",
    image: "/images/services/roof-painting.webp",
    heroSubtitle: "Professional-grade roof painting and coating services that improve appearance, extend roof life, and provide durable weather protection.",
    features: [
      {
        title: "Protective Roof Painting",
        description: "We apply high-performance coatings that create a durable protective layer against weathering, moss growth, and UV exposure. Our treatments improve energy efficiency and surface longevity while enhancing appearance.",
        benefits: [
          "Durable protection against weather and UV",
          "Prevents moss and algae growth",
          "Improves energy efficiency",
        ],
      },
      {
        title: "Coating & Restoration",
        description: "Full roof coating and restoration for tired, discoloured, or ageing roof surfaces. Our coatings seal minor cracks, prevent water ingress, and add a clean, uniform finish to existing structures.",
        benefits: [
          "Restores tired and discoloured roofs",
          "Seals minor cracks and prevents leaks",
          "Clean, uniform finish throughout",
        ],
      },
      {
        title: "Durable Roof Coatings",
        description: "We use specially formulated roof paints and sealants that create a weatherproof barrier against rain, wind, and environmental wear. Applied evenly for full surface coverage with minimal maintenance required.",
        benefits: [
          "Weatherproof barrier against the elements",
          "Even, full surface coverage",
          "Low-maintenance long-term solution",
        ],
      },
    ],
    servicesOffered: [
      "Roof tile painting and coating",
      "Slate roof treatment",
      "Anti-moss roof coating",
      "Weatherproof sealant application",
      "Colour restoration and renewal",
      "Full roof coating and restoration",
      "Commercial roof painting",
      "Free colour consultation",
    ],
    ctaText: "Book Your Roof Painting Quote",
  },

  guttering: {
    id: "guttering",
    title: "Guttering",
    shortDescription: "Complete gutter installation, repair, and cleaning to protect your property from water damage.",
    description: "Proper guttering is essential for protecting your property from water damage. We offer complete gutter services.",
    icon: "Droplets",
    image: "/images/services/guttering.webp",
    heroSubtitle: "Complete guttering services — installation, repair, and cleaning — using weather-resistant materials to protect your property from water damage.",
    features: [
      {
        title: "Gutter Installations",
        description: "Professional installations using strong, weather-resistant materials suited to various property types. Every system is designed to direct rainwater efficiently, preventing overflow and protecting walls, foundations, and roofline.",
        benefits: [
          "Weather-resistant materials for long life",
          "Efficient rainwater management",
          "Protects walls, foundations, and roofline",
        ],
      },
      {
        title: "Reliable Gutter Repairs",
        description: "We handle all repair types — joint separations, sagging sections, downpipe blockages, and storm damage. A full system inspection is performed before targeted repairs keep your guttering secure and effective.",
        benefits: [
          "Comprehensive repairs for all issues",
          "Full system inspection included",
          "Restores function and prevents leaks",
        ],
      },
      {
        title: "Gutter Cleaning",
        description: "Thorough removal of moss, leaves, and debris to prevent water backup and overflow. Regular cleaning keeps gutters flowing freely, reduces pressure on joints and fixings, and maintains roofline health.",
        benefits: [
          "Prevents blockages and overflow",
          "Reduces pressure on fixings",
          "Maintains overall roofline health",
        ],
      },
      {
        title: "Gutter Replacements & Roofline Care",
        description: "Full gutter replacements when repairs aren't sufficient, tailored to your property. We also inspect and maintain fascia, soffits, and other roofline elements for a fresh, functional system.",
        benefits: [
          "Complete replacement when needed",
          "Fascia and soffit inspection included",
          "Improved appearance and performance",
        ],
      },
    ],
    servicesOffered: [
      "Gutter installation for all property types",
      "Gutter repair and leak fixing",
      "Gutter cleaning and maintenance",
      "Downpipe repair and replacement",
      "Fascia and soffit work",
      "Gutter replacement and upgrades",
      "Commercial guttering systems",
      "Free gutter inspection and quote",
    ],
    ctaText: "Book Your Guttering Service",
  },

  "roof-cleaning": {
    id: "roof-cleaning",
    title: "Roof Cleaning & Maintenance",
    shortDescription: "Professional roof cleaning and maintenance to remove moss, debris, and prevent long-term damage.",
    description: "Keep your roof in top condition with our professional cleaning and maintenance services.",
    icon: "SprayCan",
    image: "/images/services/roof-cleaning.webp",
    heroSubtitle: "Professional roof maintenance and cleaning services designed to reduce wear, extend lifespan, and protect your property.",
    features: [
      {
        title: "Moss and Debris Removal",
        description: "We safely remove moss, algae, and accumulated debris that can trap moisture and damage your roof. This prevents tile displacement, reduces gutter blockage, and extends roof life.",
        benefits: [
          "Prevents tile displacement and damage",
          "Reduces gutter blockages",
          "Extends overall roof lifespan",
        ],
      },
      {
        title: "Pressure Wash Cleaning",
        description: "Our controlled pressure washing deep-cleans roof surfaces to eliminate dirt, moss, and organic growth without damaging tiles or membranes. It restores your roof's original appearance and prepares it for sealing.",
        benefits: [
          "Deep clean without damaging materials",
          "Restores original roof appearance",
          "Prepares roof for sealing or coating",
        ],
      },
      {
        title: "Protective Roof Sealing",
        description: "After cleaning, we apply a specialised roof sealant that creates a water-resistant barrier. It repels moisture, prevents moss regrowth, and protects against UV rays — adding an extra layer of defence.",
        benefits: [
          "Water-resistant barrier protection",
          "Prevents moss and algae regrowth",
          "UV protection for longer roof life",
        ],
      },
      {
        title: "Coating for Long-Term Preservation",
        description: "We offer roof coatings designed to enhance durability and appearance. Applied after cleaning and sealing, they add colour uniformity, increase weather resistance, and support thermal efficiency.",
        benefits: [
          "Enhanced durability and appearance",
          "Improved weather resistance",
          "Supports thermal efficiency",
        ],
      },
    ],
    servicesOffered: [
      "Moss and algae removal",
      "Pressure washing and deep cleaning",
      "Protective sealant application",
      "Roof coating and preservation",
      "Gutter clearing during clean",
      "Moss treatment and prevention",
      "Commercial roof cleaning",
      "Regular maintenance plans",
    ],
    ctaText: "Book a Roof Clean",
  },

  "exterior-painting": {
    id: "exterior-painting",
    title: "Exterior Painting",
    shortDescription: "Professional exterior painting with premium paints for a stunning, long-lasting finish.",
    description: "Transform the look of your home with our professional exterior painting services.",
    icon: "Paintbrush",
    image: "/images/services/exterior-painting.webp",
    heroSubtitle: "Transform your home with professional exterior painting using premium weather-resistant paints and meticulous preparation for a stunning finish.",
    features: [
      {
        title: "Full Exterior Painting",
        description: "Complete exterior painting services that transform the look of your property. We use premium weather-resistant paints and thorough surface preparation to deliver a finish that lasts for years.",
        benefits: [
          "Complete transformation of your property",
          "Premium weather-resistant paints",
          "Years of lasting protection and beauty",
        ],
      },
      {
        title: "Surface Preparation",
        description: "Meticulous preparation is key to a flawless finish. We clean, sand, prime, and repair all surfaces before painting — ensuring the paint adheres properly and provides maximum durability.",
        benefits: [
          "Thorough cleaning and preparation",
          "Proper priming for paint adhesion",
          "Maximum durability and longevity",
        ],
      },
      {
        title: "Weather-Resistant Coatings",
        description: "Our specially formulated exterior coatings are designed to withstand the Scottish climate. They resist fading, cracking, and peeling while protecting your walls from wind and rain.",
        benefits: [
          "Designed for the Scottish climate",
          "Resists fading, cracking, and peeling",
          "Protects against wind and rain damage",
        ],
      },
      {
        title: "Colour Consultation",
        description: "Not sure which colour to choose? We offer expert colour advice to help you select the perfect palette for your home — enhancing its character and kerb appeal.",
        benefits: [
          "Expert colour advice and consultation",
          "Enhances property character",
          "Boosts kerb appeal and value",
        ],
      },
    ],
    servicesOffered: [
      "Full house exterior painting",
      "Weatherboard and render painting",
      "Window and door painting",
      "Fascia, soffit, and guttering painting",
      "Surface preparation and priming",
      "Colour consultation and matching",
      "Commercial exterior painting",
      "Free no-obligation quote",
    ],
    ctaText: "Get Your Exterior Painting Quote",
  },

  "gutter-cleaning": {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDescription: "Professional gutter cleaning to remove blockages and protect your property from water damage.",
    description: "Keep your gutters clear and free-flowing with our professional gutter cleaning service. We remove leaves, moss, debris, and blockages to protect your property from water damage, damp, and foundation issues.",
    icon: "Wind",
    image: "/images/services/gutter-cleaning.jpg",
    heroSubtitle: "Professional gutter cleaning and maintenance to prevent blockages, water damage, and protect your property's drainage system year-round.",
    features: [
      {
        title: "Thorough Gutter Clearance",
        description: "We completely clear your gutters of leaves, moss, dirt, and all debris that causes blockages. Our team uses professional equipment to reach every section, ensuring water flows freely through your entire drainage system.",
        benefits: [
          "Complete removal of all blockages",
          "Professional equipment for full coverage",
          "Ensures free-flowing drainage system",
        ],
      },
      {
        title: "Downpipe Cleaning & Unblocking",
        description: "Blocked downpipes can cause serious water damage. We flush and clear all downpipes to restore full drainage capacity, preventing overflow and water pooling around your property's foundations.",
        benefits: [
          "Restores full drainage capacity",
          "Prevents water overflow and pooling",
          "Protects foundations from water damage",
        ],
      },
      {
        title: "Gutter Inspection & Report",
        description: "During every clean, we thoroughly inspect your gutters, joints, brackets, and fascia for signs of damage, sagging, or deterioration. You'll receive a clear report so you know the condition of your drainage system.",
        benefits: [
          "Detailed inspection of all components",
          "Early detection of potential problems",
          "Clear report on gutter condition",
        ],
      },
      {
        title: "Preventative Maintenance Plans",
        description: "Regular gutter cleaning prevents costly repairs down the line. We offer scheduled maintenance plans tailored to your property, keeping gutters in top condition through every season and extending their lifespan.",
        benefits: [
          "Prevents costly emergency repairs",
          "Scheduled cleaning tailored to your needs",
          "Extends gutter lifespan significantly",
        ],
      },
    ],
    servicesOffered: [
      "Full gutter clearance and cleaning",
      "Downpipe unblocking and flushing",
      "Gutter and bracket inspection",
      "Moss and debris removal",
      "Fascia and soffit checks",
      "Emergency gutter cleaning",
      "Seasonal maintenance plans",
      "Free gutter inspection and quote",
    ],
    ctaText: "Book Your Gutter Cleaning",
  },
};
