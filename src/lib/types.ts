export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
}

export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  source: "google" | "facebook";
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface QuoteFormData {
  propertyType: string;
  services: string[];
  urgency: string;
  propertySize: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postcode: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  before?: string;
  after?: string;
}
