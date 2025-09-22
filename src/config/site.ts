// src/config/site.ts
export const SITE = {
  name: "Raccordement Connect",
  domain: "raccordement-connect.com",
  url: "https://raccordement-connect.com",
  phoneDisplay: "09 70 70 95 70",
  phoneRaw: "0970709570",
  phoneLink: "tel:0970709570",
  email: "serviceclient@raccordement-connect.com",
  address: "France",
  description: "Raccordement électrique simplifié partout en France",
  tagline: "Commencez votre demande de raccordement Enedis ici",
  
  // SEO & Meta
  title: "Raccordement Connect - Raccordement électrique simplifié",
  titleTemplate: "%s | Raccordement Connect",
  
  // Social & OG
  ogImage: "/og-image.png",
  twitterHandle: "@RaccordementConnect",
  
  // Legal
  legalName: "Raccordement Connect",
  siret: "", // Add if needed
  
  // Analytics
  gtag: process.env.NEXT_PUBLIC_GA_ID || "",
} as const;

export default SITE;