import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Page Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Page Subheading', type: 'text', rows: 2 }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Emoji Icon', type: 'string' }),
            defineField({ name: 'title', title: 'Service Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({
              name: 'features',
              title: 'Feature Bullets',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Services Page' }) },
});
