import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Page Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Page Subheading', type: 'text', rows: 2 }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Contact Phone', type: 'string' }),
    defineField({ name: 'address', title: 'Office Address', type: 'text', rows: 3 }),
    defineField({ name: 'mapEmbedUrl', title: 'Google Maps Embed URL (optional)', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: 'Contact Page' }) },
});
