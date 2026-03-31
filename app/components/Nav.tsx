interface NavProps {
  reservationUrl: string
}

export default function Nav({ reservationUrl }: NavProps) {
  return (
    <nav className="nav" id="nav">
      <div className="nav-logo">Primitivo Grill</div>
      <a href={reservationUrl} target="_blank" rel="noopener" className="nav-reserve">
        Reserve
      </a>
    </nav>
  )
}
