interface GalleryItemData {
  _id: string
  label: string
  order: number
  image?: { asset?: { url: string } }
  localImage?: string
  objectPosition?: string
}

interface GalleryProps {
  items: GalleryItemData[]
}

const fallbackImages: { src: string; position: string }[] = [
  { src: '/images/interior-diningroom-dryaging.jpg', position: 'center 40%' },
  { src: '/images/food-tartare-dryaging-steak.jpg', position: 'center top' },
  { src: '/images/food-risotto-dryaging-cabinet.jpg', position: 'right top' },
  { src: '/images/food-steaks-mash-berry.jpg', position: 'center top' },
  { src: '/images/food-tartare-steak-bread.jpg', position: 'left top' },
  { src: '/images/food-cured-meats-burrata-carpaccio.jpg', position: 'center top' },
  { src: '/images/food-risotto-tartare-steak-dessert.jpg', position: 'center top' },
  { src: '/images/food-meat-platter-tartare-fries.jpg', position: 'left top' },
  { src: '/images/food-tartare-braised-dessert.jpg', position: 'center top' },
  { src: '/images/food-tartare-salad-table.jpg', position: 'center top' },
  { src: '/images/food-steak-filet-winesetting.jpg', position: 'center center' },
]

export default function Gallery({ items }: GalleryProps) {
  return (
    <section className="gallery" id="gallery">
      <div className="section-label reveal">Gallery</div>
      <h2 className="section-title reveal reveal-delay-1">
        A Glimpse<br />Inside
      </h2>

      <div className="gallery-grid">
        {items.map((item, i) => {
          const fb = fallbackImages[i % fallbackImages.length]
          const imgSrc = item.image?.asset?.url || fb.src
          const objPos = fb.position

          return (
            <div key={item._id} className={`gallery-item reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
              <img
                src={imgSrc}
                alt={item.label}
                className="gallery-placeholder"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: objPos,
                }}
              />
              <div className="gallery-item-label">{item.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
