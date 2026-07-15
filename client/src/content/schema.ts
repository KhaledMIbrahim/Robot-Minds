export type ContentField = {
  key: string
  label: string
  type: 'text' | 'textarea' | 'image'
}

export type ContentGroup = {
  id: string
  title: string
  fields: ContentField[]
}

/**
 * Drives the admin content editor (client/src/pages/AdminContent.tsx). Add a
 * row here and the field shows up in the dashboard automatically -- no
 * bespoke form markup needed per section.
 */
export const CONTENT_SCHEMA: ContentGroup[] = [
  {
    id: 'hero',
    title: 'Hero',
    fields: [
      { key: 'hero.badge', label: 'Badge text', type: 'text' },
      { key: 'hero.titleLine1', label: 'Title — line 1', type: 'text' },
      { key: 'hero.titleLine2', label: 'Title — line 2', type: 'text' },
      { key: 'hero.subtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'hero.image', label: 'Background image', type: 'image' },
      { key: 'hero.cta1', label: 'Primary button label', type: 'text' },
      { key: 'hero.cta2', label: 'Secondary button label', type: 'text' },
      { key: 'hero.stat1Value', label: 'Stat 1 value', type: 'text' },
      { key: 'hero.stat1Label', label: 'Stat 1 label', type: 'text' },
      { key: 'hero.stat2Value', label: 'Stat 2 value', type: 'text' },
      { key: 'hero.stat2Label', label: 'Stat 2 label', type: 'text' },
      { key: 'hero.stat3Value', label: 'Stat 3 value', type: 'text' },
      { key: 'hero.stat3Label', label: 'Stat 3 label', type: 'text' },
    ],
  },
  {
    id: 'fleet',
    title: 'Fleet',
    fields: [
      { key: 'fleet.tag', label: 'Tag', type: 'text' },
      { key: 'fleet.heading', label: 'Heading', type: 'textarea' },
      { key: 'fleet.description', label: 'Description', type: 'textarea' },
      { key: 'fleet.sectionTag', label: 'Sub-section tag', type: 'text' },
      { key: 'fleet.sectionHeading', label: 'Sub-section heading', type: 'text' },
      { key: 'fleet.robot1.name', label: 'Robot 1 — name', type: 'text' },
      { key: 'fleet.robot1.tag', label: 'Robot 1 — tag', type: 'text' },
      { key: 'fleet.robot1.desc', label: 'Robot 1 — description', type: 'textarea' },
      { key: 'fleet.robot1.image', label: 'Robot 1 — image', type: 'image' },
      { key: 'fleet.robot2.name', label: 'Robot 2 — name', type: 'text' },
      { key: 'fleet.robot2.tag', label: 'Robot 2 — tag', type: 'text' },
      { key: 'fleet.robot2.desc', label: 'Robot 2 — description', type: 'textarea' },
      { key: 'fleet.robot2.image', label: 'Robot 2 — image', type: 'image' },
      { key: 'fleet.robot3.name', label: 'Robot 3 — name', type: 'text' },
      { key: 'fleet.robot3.tag', label: 'Robot 3 — tag', type: 'text' },
      { key: 'fleet.robot3.desc', label: 'Robot 3 — description', type: 'textarea' },
      { key: 'fleet.robot3.image', label: 'Robot 3 — image', type: 'image' },
    ],
  },
  {
    id: 'capabilities',
    title: 'Capabilities',
    fields: [
      { key: 'capabilities.tag', label: 'Tag', type: 'text' },
      { key: 'capabilities.heading', label: 'Heading', type: 'text' },
      { key: 'capabilities.item1.title', label: 'Item 1 — title', type: 'text' },
      { key: 'capabilities.item1.desc', label: 'Item 1 — description', type: 'textarea' },
      { key: 'capabilities.item2.title', label: 'Item 2 — title', type: 'text' },
      { key: 'capabilities.item2.desc', label: 'Item 2 — description', type: 'textarea' },
      { key: 'capabilities.item3.title', label: 'Item 3 — title', type: 'text' },
      { key: 'capabilities.item3.desc', label: 'Item 3 — description', type: 'textarea' },
      { key: 'capabilities.item4.title', label: 'Item 4 — title', type: 'text' },
      { key: 'capabilities.item4.desc', label: 'Item 4 — description', type: 'textarea' },
      { key: 'capabilities.item5.title', label: 'Item 5 — title', type: 'text' },
      { key: 'capabilities.item5.desc', label: 'Item 5 — description', type: 'textarea' },
    ],
  },
  {
    id: 'brain',
    title: 'One mind (Brain)',
    fields: [
      { key: 'brain.tag', label: 'Tag', type: 'text' },
      { key: 'brain.heading', label: 'Heading', type: 'text' },
      { key: 'brain.description', label: 'Description', type: 'textarea' },
      { key: 'brain.image', label: 'Image', type: 'image' },
      { key: 'brain.point1.title', label: 'Point 1 — title', type: 'text' },
      { key: 'brain.point1.desc', label: 'Point 1 — description', type: 'textarea' },
      { key: 'brain.point2.title', label: 'Point 2 — title', type: 'text' },
      { key: 'brain.point2.desc', label: 'Point 2 — description', type: 'textarea' },
      { key: 'brain.point3.title', label: 'Point 3 — title', type: 'text' },
      { key: 'brain.point3.desc', label: 'Point 3 — description', type: 'textarea' },
    ],
  },
  {
    id: 'trust',
    title: 'Trust',
    fields: [
      { key: 'trust.tag', label: 'Tag', type: 'text' },
      { key: 'trust.heading', label: 'Heading', type: 'text' },
      { key: 'trust.feature1.title', label: 'Feature 1 — title', type: 'text' },
      { key: 'trust.feature1.desc', label: 'Feature 1 — description', type: 'textarea' },
      { key: 'trust.feature2.title', label: 'Feature 2 — title', type: 'text' },
      { key: 'trust.feature2.desc', label: 'Feature 2 — description', type: 'textarea' },
      { key: 'trust.feature3.title', label: 'Feature 3 — title', type: 'text' },
      { key: 'trust.feature3.desc', label: 'Feature 3 — description', type: 'textarea' },
      { key: 'trust.feature4.title', label: 'Feature 4 — title', type: 'text' },
      { key: 'trust.feature4.desc', label: 'Feature 4 — description', type: 'textarea' },
      { key: 'trust.quote1.quote', label: 'Quote 1 — text', type: 'textarea' },
      { key: 'trust.quote1.name', label: 'Quote 1 — name', type: 'text' },
      { key: 'trust.quote1.company', label: 'Quote 1 — company', type: 'text' },
      { key: 'trust.quote2.quote', label: 'Quote 2 — text', type: 'textarea' },
      { key: 'trust.quote2.name', label: 'Quote 2 — name', type: 'text' },
      { key: 'trust.quote2.company', label: 'Quote 2 — company', type: 'text' },
    ],
  },
  {
    id: 'footer',
    title: 'Footer',
    fields: [{ key: 'footer.tagline', label: 'Tagline', type: 'textarea' }],
  },
]
