// Fallback data used when Sanity is not yet configured (no project ID set).
// Once Sanity is live, this is never used — all content comes from the CMS.

export const fallbackSettings = {
  siteName: 'BigzImpact Global',
  tagline: 'Software Development & SaaS Solutions',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ],
  footerLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  socialLinks: [
    { platform: 'LinkedIn', url: '#' },
    { platform: 'Twitter', url: '#' },
  ],
  copyrightText: `© ${new Date().getFullYear()} BigzImpact Global Pvt. Limited. All rights reserved.`,
};

export const fallbackHome = {
  heroHeadline: 'We Build Software That Drives Impact',
  heroSubheadline:
    'BigzImpact Global delivers custom software development and SaaS solutions that help businesses scale smarter and faster.',
  heroCtaLabel: 'Explore Our Services',
  heroCtaLink: '/services',
  services: [
    {
      icon: '⚡',
      title: 'Custom Software Development',
      description:
        'End-to-end engineering for web, mobile, and enterprise platforms tailored to your business needs.',
    },
    {
      icon: '☁️',
      title: 'SaaS Product Development',
      description:
        'From MVP to scale — we design, build, and launch SaaS products that users love.',
    },
    {
      icon: '🔗',
      title: 'API & Integrations',
      description:
        'Seamlessly connect your systems with third-party APIs, microservices, and data pipelines.',
    },
    {
      icon: '📊',
      title: 'Digital Transformation',
      description:
        'Modernise legacy systems and automate business processes to unlock operational efficiency.',
    },
  ],
  servicesHeading: 'What We Do',
  servicesSubheading: 'A full spectrum of software services to move your business forward.',
  whyUsHeading: 'Why BigzImpact Global?',
  whyUsPoints: [
    {
      title: 'Impact-First Mindset',
      description: 'We measure success by the business outcomes our software delivers.',
    },
    {
      title: 'Agile & Transparent',
      description: 'Two-week sprints, daily standups, and weekly demos — no surprises.',
    },
    {
      title: 'Full-Stack Expertise',
      description: 'React, Node.js, Python, cloud-native architecture — we cover the full stack.',
    },
    {
      title: 'Long-Term Partnership',
      description: 'We stay with you post-launch for support, iteration, and growth.',
    },
  ],
  ctaBannerHeading: 'Ready to build something great?',
  ctaBannerSubtext: 'Let\'s talk about your project and how we can help you ship faster.',
  ctaBannerButtonLabel: 'Get in Touch',
  ctaBannerButtonLink: '/contact',
};

export const fallbackAbout = {
  heading: 'About BigzImpact Global',
  subheading: 'A software development company on a mission to help businesses create meaningful impact through technology.',
  story:
    'BigzImpact Global Pvt. Limited was founded with a single belief: great software should do more than work — it should create real, measurable impact. We partner with startups, SMEs, and enterprises to turn complex ideas into elegant, scalable software products.',
  mission:
    'To deliver world-class software solutions that empower businesses to grow, innovate, and make a lasting impact in their industries.',
  vision:
    'A world where every business, regardless of size, has access to technology that amplifies their potential.',
  stats: [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Countries', value: '8' },
    { label: 'Years in Business', value: '5+' },
  ],
  team: [
    { name: 'Founding Team', role: 'Leadership', bio: 'Driving vision and strategy at BigzImpact Global.' },
  ],
};

export const fallbackServices = {
  heading: 'Our Services',
  subheading: 'Everything you need to build, launch, and grow a software product.',
  services: [
    {
      icon: '⚡',
      title: 'Custom Software Development',
      description: 'Bespoke applications built from scratch to solve your unique business challenges.',
      features: [
        'Web application development',
        'Mobile app development (iOS & Android)',
        'Enterprise software',
        'Cloud-native architecture',
      ],
    },
    {
      icon: '☁️',
      title: 'SaaS Product Development',
      description: 'From idea to live product — we help you build, launch, and scale SaaS platforms.',
      features: [
        'Product discovery & MVP scoping',
        'UI/UX design',
        'Multi-tenant architecture',
        'Subscription & billing integration',
      ],
    },
    {
      icon: '🔗',
      title: 'API Development & Integrations',
      description: 'Robust APIs and seamless third-party integrations to unify your tech stack.',
      features: [
        'RESTful & GraphQL APIs',
        'Third-party API integrations',
        'Microservices architecture',
        'Data pipeline development',
      ],
    },
    {
      icon: '📊',
      title: 'Digital Transformation',
      description: 'Modernise your business operations with automation and cloud migration.',
      features: [
        'Legacy system modernisation',
        'Business process automation',
        'Cloud migration (AWS, GCP, Azure)',
        'DevOps & CI/CD setup',
      ],
    },
  ],
};

export const fallbackContact = {
  heading: 'Get in Touch',
  subheading:
    'Have a project in mind? We\'d love to hear about it. Drop us a message and we\'ll get back to you within 24 hours.',
  email: 'hello@bigzimpact.com',
  phone: '+91 00000 00000',
  address: 'BigzImpact Global Pvt. Limited\nIndia',
};
