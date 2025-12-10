export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  span?: string; // Tailwind grid span class
  color?: string; // Tailwind bg color class for icon container
}

export interface NavItem {
  label: string;
  href: string;
}