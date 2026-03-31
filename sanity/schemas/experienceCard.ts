import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'experienceCard',
  title: 'Experience Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'iconSvg',
      title: 'Icona SVG (path)',
      type: 'text',
      description: 'Codice SVG per l\'icona',
    }),
    defineField({
      name: 'order',
      title: 'Ordine',
      type: 'number',
      validation: (r) => r.required().min(1),
    }),
  ],
  orderings: [{ title: 'Ordine', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', order: 'order' },
    prepare: ({ title, order }) => ({ title: `${order}. ${title}` }),
  },
})
