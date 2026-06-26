import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Page Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Page Subheading', type: 'text', rows: 2 }),
    defineField({ name: 'story', title: 'Our Story', type: 'text', rows: 5 }),
    defineField({ name: 'mission', title: 'Mission Statement', type: 'text', rows: 3 }),
    defineField({ name: 'vision', title: 'Vision Statement', type: 'text', rows: 3 }),
    defineField({
      name: 'stats',
      title: 'Stats / Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value (e.g. "50+")', type: 'string' }),
            defineField({ name: 'label', title: 'Label (e.g. "Projects Delivered")', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        },
      ],
    }),
    defineField({
      name: 'team',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role / Title', type: 'string' }),
            defineField({ name: 'bio', title: 'Short Bio', type: 'text', rows: 3 }),
            defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'About Page' }) },
});
