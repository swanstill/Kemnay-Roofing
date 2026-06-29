import { NavItem, Service, Review, WhyChooseUsItem, TeamMember, Project } from "./types";

export const COMPANY = {
  name: "Kemnay Roofing & Exterior Painting Ltd",
  shortName: "Kemnay Roofing",
  tagline: "We protect what matters most.",
  phone: "01467 840181",
  phoneFormatted: "01467 840 181",
  email: "info@kemnayroofingaberdeen.com",
  address: "7 Greatstone Wood, Kemnay, AB51 5LU",
  rating: 5.0,
  reviewCount: 63,
  googleReviewUrl:
    "https://www.google.com/maps/place/Kemnay+Roofing+%26+Exterior+Painting+Ltd/@57.2241721,-2.7839835,9z/",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Roofing Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "roof-repairs",
    title: "Roof Repairs",
    description:
      "From minor leaks to storm damage, our expert team provides fast and reliable roof repair services across Aberdeen and surrounding areas. We diagnose issues quickly and deliver lasting solutions that protect your home.",
    shortDescription:
      "Fast, reliable roof repairs for leaks, storm damage, and wear. Expert diagnostics and lasting solutions.",
    icon: "Wrench",
    image: "/images/services/roof-repairs.webp",
  },
  {
    id: "new-roofs",
    title: "New Roofs",
    description:
      "Whether you're building a new property or need a complete roof replacement, we install high-quality roofing systems built to last. We work with a range of materials including slate, tile, and modern roofing solutions.",
    shortDescription:
      "Complete new roof installations and replacements using premium materials built to stand the test of time.",
    icon: "Home",
    image: "/images/services/new-roofs.webp",
  },
  {
    id: "reroofing",
    title: "Reroofing",
    description:
      "Full reroofing services to breathe new life into your property. We strip, prepare, and re-roof with high-quality materials that enhance both appearance and protection.",
    shortDescription:
      "Complete reroofing to renew your home with high-quality materials and expert craftsmanship.",
    icon: "RefreshCw",
    image: "/images/services/re-roofing.webp",
  },
  {
    id: "flat-roofing",
    title: "Flat Roofs",
    description:
      "Specialists in flat roof installation, repair, and maintenance. We use modern felt, EPDM, and GRP systems to ensure your flat roof is fully waterproof and long-lasting.",
    shortDescription:
      "Specialist flat roof installation and repair using felt, EPDM, and GRP waterproof systems.",
    icon: "Layers",
    image: "/images/services/flat-roofing.webp",
  },
  {
    id: "roof-painting",
    title: "Roof Painting",
    description:
      "Restore and revitalise your roof with professional roof painting. Our weather-resistant coatings improve appearance and extend the life of your tiles or slates.",
    shortDescription:
      "Professional roof painting to restore and protect your tiles with weather-resistant coatings.",
    icon: "Paintbrush",
    image: "/images/services/roof-painting.webp",
  },
  {
    id: "guttering",
    title: "Guttering",
    description:
      "Proper guttering is essential for protecting your property from water damage. We offer complete gutter installation, repair, and cleaning services to keep your drainage system working perfectly.",
    shortDescription:
      "Complete gutter installation, repair, and cleaning services to protect your property from water damage.",
    icon: "Droplets",
    image: "/images/services/guttering.webp",
  },
  {
    id: "roof-cleaning",
    title: "Roof Cleaning & Maintenance",
    description:
      "Keep your roof in top condition with our professional cleaning and maintenance services. We remove moss, debris, and algae to prevent damage and extend roof life.",
    shortDescription:
      "Professional roof cleaning and maintenance to remove moss, debris, and prevent long-term damage.",
    icon: "SprayCan",
    image: "/images/services/roof-cleaning.webp",
  },
  {
    id: "exterior-painting",
    title: "Exterior Painting",
    description:
      "Transform the look of your home with our professional exterior painting services. We use premium weather-resistant paints and meticulous preparation to deliver a finish that looks great and lasts for years.",
    shortDescription:
      "Professional exterior painting with premium weather-resistant paints for a stunning, long-lasting finish.",
    icon: "Paintbrush",
    image: "/images/services/exterior-painting.webp",
  },
];

export const REVIEWS: Review[] = [
  {
    name: "John M.",
    date: "2 weeks ago",
    rating: 5,
    text: "Fantastic service from start to finish. The team replaced our entire roof and the quality of work is outstanding. They arrived on time, kept the area clean, and the final result exceeded our expectations. Highly recommend!",
    source: "google",
  },
  {
    name: "Sarah K.",
    date: "1 month ago",
    rating: 5,
    text: "Kemnay Roofing did an excellent job repairing our flat roof. Quick response, fair pricing, and the work was completed to a very high standard. Will definitely use them again for any future roofing work.",
    source: "facebook",
  },
  {
    name: "David R.",
    date: "3 weeks ago",
    rating: 5,
    text: "Brilliant exterior painting job on our house. The team was professional, punctual, and the finish is absolutely top-notch. Our house looks brand new! Couldn't be happier with the result.",
    source: "google",
  },
  {
    name: "Margaret H.",
    date: "2 months ago",
    rating: 5,
    text: "After storm damage, Kemnay Roofing came out quickly to assess and repair the damage. They were honest about what needed doing and the price was fair. Very impressed with their professionalism.",
    source: "facebook",
  },
  {
    name: "James P.",
    date: "1 month ago",
    rating: 5,
    text: "New guttering fitted throughout our property. Clean, efficient work and great communication throughout the project. The team clearly takes pride in their work. Highly recommended.",
    source: "google",
  },
  {
    name: "Emma T.",
    date: "6 weeks ago",
    rating: 5,
    text: "Chimney repointing done to perfection. The lads were friendly, hardworking, and left everything tidy. Really pleased with the finished result. Five stars all day long!",
    source: "facebook",
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Quality",
    description:
      "We use only premium materials from trusted suppliers, ensuring every project is built to the highest standards and stands the test of time.",
    icon: "Award",
  },
  {
    title: "Experienced",
    description:
      "With years of hands-on expertise in roofing and exterior painting, our skilled team has the knowledge to handle any project, big or small.",
    icon: "Clock",
  },
  {
    title: "Local",
    description:
      "Proudly based in Kemnay, we're a community-focused company that cares about our reputation and the quality of work we leave behind.",
    icon: "MapPin",
  },
  {
    title: "Guaranteed",
    description:
      "Every project comes with our workmanship guarantee for complete peace of mind. We stand behind the quality of everything we do.",
    icon: "Shield",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "John Smith",
    role: "Founder & Lead Roofer",
    description:
      "With over 20 years of hands-on roofing experience, John founded Kemnay Roofing with a commitment to quality craftsmanship and honest customer service. He personally oversees every project to ensure it meets our exacting standards.",
    image: "/images/team/john-smith.jpg",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "new-roof-aberdeen",
    title: "Complete Roof Replacement",
    category: "New Roofs",
    image: "/images/projects/new-roof-1.webp",
  },
  {
    id: "flat-roof-extension",
    title: "Flat Roof Installation",
    category: "Flat Roofing",
    image: "/images/projects/flat-roof-1.webp",
  },
  {
    id: "exterior-painting-house",
    title: "Full Exterior Painting",
    category: "Exterior Painting",
    image: "/images/projects/exterior-paint-1.webp",
  },
  {
    id: "chimney-rebuild",
    title: "Chimney Rebuild & Repointing",
    category: "Chimney Work",
    image: "/images/projects/chimney-1.webp",
  },
  {
    id: "gutter-replacement",
    title: "Gutter Replacement",
    category: "Guttering",
    image: "/images/projects/guttering-1.webp",
  },
  {
    id: "roof-repair-storm",
    title: "Storm Damage Repair",
    category: "Roof Repairs",
    image: "/images/projects/roof-repair-1.webp",
  },
];

export const PROPERTY_TYPES = [
  "Detached",
  "Semi Detached",
  "Terraced",
  "Bungalow",
  "Commercial",
  "Other",
];

export const URGENCY_OPTIONS = [
  "Emergency (ASAP)",
  "Within 1 week",
  "Within 1 month",
  "Within 3 months",
  "No rush - just exploring",
];

export const PROPERTY_SIZES = [
  "Small (1-2 bed)",
  "Medium (3 bed)",
  "Large (4+ bed)",
  "Commercial premises",
  "Not sure",
];
