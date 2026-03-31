interface GalleryItemData {
  _id: string
  label: string
  order: number
  image?: { asset?: { url: string } }
}

interface GalleryProps {
  items: GalleryItemData[]
}

const placeholderGradients = [
  'linear-gradient(135deg, #1a1008, #2a1a0a 30%, #3d2511 60%, #1a0f06)',
  'linear-gradient(160deg, #0f0a06, #2a1a0a 40%, #1a100a)',
  'linear-gradient(200deg, #1a1510, #301e10 50%, #0f0a06)',
  'linear-gradient(135deg, #0d0906, #251508 40%, #1a0f08)',
  'linear-gradient(180deg, #1a1208, #2a180a 50%, #0f0906)',
]

export default function Gallery({ items }: GalleryProps) {
  return (
    <section className="gallery" id="gallery">
      <div className="section-label reveal">Gallery</div>
      <h2 className="section-title reveal reveal-delay-1">
        A Glimpse<br />Inside
      </h2>

      <div className="gallery-grid">
        {items.map((item, i) => (
          <div key={item._id} className={`gallery-item reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
            {item.image?.asset?.url ? (
              <img
                src={item.image.asset.url}
                alt={item.label}
                className="gallery-placeholder"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div
                className="gallery-placeholder"
                style={{ background: placeholderGradients[i % placeholderGradients.length] }}
              />
            )}
            <div className="gallery-item-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
