import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'placeholder',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// --- Query helpers ---

export async function getHomePage() {
  return sanityClient.fetch(`*[_type == "homePage"][0]{
    heroHeadline,
    heroSubheadline,
    heroCtaLabel,
    heroCtaLink,
    heroImage,
    servicesHeading,
    servicesSubheading,
    services[]{title, description, icon},
    whyUsHeading,
    whyUsPoints[]{title, description},
    ctaBannerHeading,
    ctaBannerSubtext,
    ctaBannerButtonLabel,
    ctaBannerButtonLink,
  }`);
}

export async function getAboutPage() {
  return sanityClient.fetch(`*[_type == "aboutPage"][0]{
    heading,
    subheading,
    story,
    mission,
    vision,
    stats[]{label, value},
    team[]{name, role, bio, photo},
  }`);
}

export async function getServicesPage() {
  return sanityClient.fetch(`*[_type == "servicesPage"][0]{
    heading,
    subheading,
    services[]{title, description, features[], icon},
  }`);
}

export async function getContactPage() {
  return sanityClient.fetch(`*[_type == "contactPage"][0]{
    heading,
    subheading,
    email,
    phone,
    address,
    mapEmbedUrl,
  }`);
}

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]{
    siteName,
    tagline,
    logo,
    navLinks[]{label, href},
    footerLinks[]{label, href},
    socialLinks[]{platform, url},
    copyrightText,
  }`);
}
