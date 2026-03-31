import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Foto Galleria',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'label',
      title: 'Etichetta',
      type: 'string',
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
    select: { title: 'label', media: 'image' },
  },
})
