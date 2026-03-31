import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'menuCategory',
  title: 'Categoria Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome Categoria',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordine',
      type: 'number',
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'items',
      title: 'Piatti',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Piatto',
          fields: [
            defineField({ name: 'name', title: 'Nome', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Descrizione', type: 'text', rows: 2 }),
            defineField({ name: 'tag', title: 'Tag (es. Signature, Premium)', type: 'string' }),
            defineField({ name: 'price', title: 'Prezzo (opzionale)', type: 'string' }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'description' },
          },
        },
      ],
    }),
  ],
  orderings: [{ title: 'Ordine', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', order: 'order' },
    prepare: ({ title, order }) => ({ title: `${order}. ${title}` }),
  },
})
