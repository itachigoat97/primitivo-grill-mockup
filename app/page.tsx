import { client, isSanityConfigured } from '@/sanity/client'
import {
  siteSettingsQuery,
  menuCategoriesQuery,
  experienceCardsQuery,
  galleryItemsQuery,
  reviewsQuery,
} from '@/sanity/lib/queries'
import { fallbackData } from '@/sanity/lib/fallback'
import ClientEffects from './components/ClientEffects'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Divider from './components/Divider'
import Menu from './components/Menu'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Reserve from './components/Reserve'
import Footer from './components/Footer'

async function getData() {
  if (!isSanityConfigured || !client) return fallbackData
  try {
    const [settings, categories, cards, gallery, reviews] = await Promise.all([
      client.fetch(siteSettingsQuery),
      client.fetch(menuCategoriesQuery),
      client.fetch(experienceCardsQuery),
      client.fetch(galleryItemsQuery),
      client.fetch(reviewsQuery),
    ])
    if (!settings) return fallbackData
    return { settings, categories, cards, gallery, reviews }
  } catch {
    return fallbackData
  }
}

export default async function Home() {
  const { settings, categories, cards, gallery, reviews } = await getData()

  return (
    <>
      <ClientEffects />
      <Nav reservationUrl={settings.reservationUrl} />
      <Hero
        tagline={settings.tagline}
        title1="Primitivo"
        title2="Grill"
        subtitle={settings.heroSubtitle}
        reservationUrl={settings.reservationUrl}
      />
      <About
        label={settings.aboutLabel}
        title={settings.aboutTitle}
        text1={settings.aboutText1}
        text2={settings.aboutText2}
        googleRating={settings.googleRating}
        googleReviews={settings.googleReviews}
        tripadvisorRating={settings.tripadvisorRating}
        tripadvisorReviews={settings.tripadvisorReviews}
        quote={settings.aboutQuote}
        quoteCite={settings.aboutQuoteCite}
      />
      <Divider text={settings.dividerQuote} highlight={settings.dividerHighlight} />
      <Menu categories={categories} />
      <Experience cards={cards} />
      <Gallery items={gallery} />
      <Reviews
        reviews={reviews}
        googleRating={settings.googleRating}
        googleReviews={settings.googleReviews}
        tripadvisorRating={settings.tripadvisorRating}
        tripadvisorReviews={settings.tripadvisorReviews}
      />
      <Reserve
        title={settings.reserveTitle}
        text={settings.reserveText}
        reservationUrl={settings.reservationUrl}
        hours={settings.hours}
        address={settings.address}
        phone={settings.phone}
        instagramUrl={settings.instagramUrl}
        instagramHandle={settings.instagramHandle}
        googleMapsEmbed={settings.googleMapsEmbed}
      />
      <Footer
        tagline={settings.heroSubtitle}
        instagramUrl={settings.instagramUrl}
        facebookUrl={settings.facebookUrl}
      />
    </>
  )
}
