import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string' }),
    defineField({ name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', rows: 2 }),
    defineField({ name: 'heroCtaLabel', title: 'Hero CTA Button Label', type: 'string' }),
    defineField({ name: 'heroCtaLink', title: 'Hero CTA Link', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image (optional)', type: 'image', options: { hotspot: true } }),

    // Services overview
    defineField({ name: 'servicesHeading', title: 'Services Section Heading', type: 'string' }),
    defineField({ name: 'servicesSubheading', title: 'Services Section Subheading', type: 'string' }),
    defineField({
      name: 'services',
      title: 'Services (Overview Cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Emoji Icon', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),

    // Why Us
    defineField({ name: 'whyUsHeading', title: 'Why Us Heading', type: 'string' }),
    defineField({
      name: 'whyUsPoints',
      title: 'Why Us Points',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),

    // CTA Banner
    defineField({ name: 'ctaBannerHeading', title: 'CTA Banner Heading', type: 'string' }),
    defineField({ name: 'ctaBannerSubtext', title: 'CTA Banner Subtext', type: 'string' }),
    defineField({ name: 'ctaBannerButtonLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({ name: 'ctaBannerButtonLink', title: 'CTA Button Link', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
});
