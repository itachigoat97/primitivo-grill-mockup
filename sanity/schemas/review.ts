import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Recensione',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Testo Recensione',
      type: 'text',
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autore',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'source',
      title: 'Fonte',
      type: 'string',
      options: {
        list: [
          { title: 'Google', value: 'Google' },
          { title: 'TripAdvisor', value: 'TripAdvisor' },
        ],
      },
    }),
    defineField({
      name: 'stars',
      title: 'Stelle',
      type: 'number',
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({
      name: 'featured',
      title: 'In Evidenza',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'author', subtitle: 'source' },
  },
})
