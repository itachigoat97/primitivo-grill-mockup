interface DividerProps {
  text: string
  highlight: string
}

export default function Divider({ text, highlight }: DividerProps) {
  return (
    <div className="divider reveal">
      <p className="divider-text">
        &ldquo;{text}<br />
        <span>{highlight}</span>&rdquo;
      </p>
    </div>
  )
}
