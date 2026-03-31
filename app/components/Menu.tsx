interface MenuItem {
  name: string
  description: string
  tag?: string
  price?: string
}

interface MenuCategory {
  _id: string
  title: string
  order: number
  items: MenuItem[]
}

interface MenuProps {
  categories: MenuCategory[]
}

export default function Menu({ categories }: MenuProps) {
  return (
    <section className="section menu" id="menu">
      <div className="section-label reveal">The Menu</div>
      <h2 className="section-title reveal reveal-delay-1">
        Crafted<br />with Fire
      </h2>

      {categories.map((cat) => (
        <div key={cat._id} className="menu-category reveal reveal-delay-2">
          <div className="menu-category-title">
            {cat.title}
            <span className="menu-category-num">
              {String(cat.order).padStart(2, '0')}
            </span>
          </div>
          {cat.items?.map((item, i) => (
            <div key={i} className="menu-item">
              <div className="menu-item-name">{item.name}</div>
              <div className="menu-item-desc">{item.description}</div>
              {item.tag && <span className="menu-item-tag">{item.tag}</span>}
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
