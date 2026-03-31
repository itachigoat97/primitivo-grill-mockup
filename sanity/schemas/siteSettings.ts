import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Impostazioni Sito',
  type: 'document',
  fields: [
    defineField({
      name: 'restaurantName',
      title: 'Nome Ristorante',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sottotitolo Hero',
      type: 'string',
    }),
    defineField({
      name: 'reservationUrl',
      title: 'Link Prenotazione',
      type: 'url',
    }),
    defineField({
      name: 'aboutLabel',
      title: 'About - Label',
      type: 'string',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About - Titolo',
      type: 'string',
    }),
    defineField({
      name: 'aboutText1',
      title: 'About - Paragrafo 1',
      type: 'text',
    }),
    defineField({
      name: 'aboutText2',
      title: 'About - Paragrafo 2',
      type: 'text',
    }),
    defineField({
      name: 'aboutQuote',
      title: 'About - Citazione',
      type: 'text',
    }),
    defineField({
      name: 'aboutQuoteCite',
      title: 'About - Fonte Citazione',
      type: 'string',
    }),
    defineField({
      name: 'dividerQuote',
      title: 'Frase Divisore',
      type: 'string',
    }),
    defineField({
      name: 'dividerHighlight',
      title: 'Parte Evidenziata Divisore',
      type: 'string',
    }),
    defineField({
      name: 'googleRating',
      title: 'Voto Google',
      type: 'string',
    }),
    defineField({
      name: 'googleReviews',
      title: 'Numero Recensioni Google',
      type: 'string',
    }),
    defineField({
      name: 'tripadvisorRating',
      title: 'Voto TripAdvisor',
      type: 'string',
    }),
    defineField({
      name: 'tripadvisorReviews',
      title: 'Numero Recensioni TripAdvisor',
      type: 'string',
    }),
    defineField({
      name: 'hours',
      title: 'Orari',
      type: 'text',
    }),
    defineField({
      name: 'address',
      title: 'Indirizzo',
      type: 'text',
    }),
    defineField({
      name: 'phone',
      title: 'Telefono',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'googleMapsEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
    }),
    defineField({
      name: 'reserveTitle',
      title: 'Sezione Prenotazione - Titolo',
      type: 'string',
    }),
    defineField({
      name: 'reserveText',
      title: 'Sezione Prenotazione - Testo',
      type: 'text',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Impostazioni Sito' }),
  },
})
