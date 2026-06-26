import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'bigzimpact-global',
  title: 'BigzImpact Global CMS',

  // Replace with your actual project ID from sanity.io/manage
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Site Settings').id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem().title('Home Page').id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem().title('About Page').id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem().title('Services Page').id('servicesPage')
              .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
            S.listItem().title('Contact Page').id('contactPage')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
});
