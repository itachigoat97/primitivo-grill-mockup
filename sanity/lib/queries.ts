export const siteSettingsQuery = `*[_type == "siteSettings"][0]`

export const menuCategoriesQuery = `*[_type == "menuCategory"] | order(order asc) {
  _id, title, order,
  items[] { name, description, tag, price }
}`

export const experienceCardsQuery = `*[_type == "experienceCard"] | order(order asc) {
  _id, title, description, iconSvg, order
}`

export const galleryItemsQuery = `*[_type == "galleryItem"] | order(order asc) {
  _id, label, order,
  image { asset-> { _id, url } }
}`

export const reviewsQuery = `*[_type == "review" && featured == true] {
  _id, text, author, source, stars
}`
