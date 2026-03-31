interface ReserveProps {
  title: string
  text: string
  reservationUrl: string
  hours: string
  address: string
  phone: string
  instagramUrl: string
  instagramHandle: string
  googleMapsEmbed: string
}

export default function Reserve({
  title, text, reservationUrl, hours, address, phone,
  instagramUrl, instagramHandle, googleMapsEmbed,
}: ReserveProps) {
  return (
    <section className="reserve" id="reserve">
      <div className="reserve-content">
        <div className="section-label reveal">Reservations</div>
        <h2
          className="section-title reveal reveal-delay-1"
          dangerouslySetInnerHTML={{ __html: title.replace('\n', '<br>') }}
        />
        <p className="reserve-sub reveal reveal-delay-2">{text}</p>
        <a
          href={reservationUrl}
          target="_blank"
          rel="noopener"
          className="reserve-cta reveal reveal-delay-3"
        >
          <span>Reserve Now</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <div className="reserve-info reveal reveal-delay-4">
          <div className="reserve-info-block">
            <div className="reserve-info-label">Hours</div>
            <div
              className="reserve-info-value"
              dangerouslySetInnerHTML={{ __html: hours.replace(/\n/g, '<br>') }}
            />
          </div>
          <div className="reserve-info-block">
            <div className="reserve-info-label">Location</div>
            <div
              className="reserve-info-value"
              dangerouslySetInnerHTML={{ __html: address.replace(/\n/g, '<br>') }}
            />
          </div>
          <div className="reserve-info-block">
            <div className="reserve-info-label">Contact</div>
            <div className="reserve-info-value">
              <a href={`tel:${phone}`} style={{ color: 'var(--cream-dim)' }}>{phone}</a><br />
              <a href={instagramUrl} target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>
                {instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {googleMapsEmbed && (
          <div className="reserve-map reveal reveal-delay-5">
            <iframe
              src={googleMapsEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </section>
  )
}
