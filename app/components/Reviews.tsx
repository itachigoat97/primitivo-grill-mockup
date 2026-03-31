interface ReviewData {
  _id: string
  text: string
  author: string
  source: string
  stars: number
}

interface ReviewsProps {
  reviews: ReviewData[]
  googleRating: string
  googleReviews: string
  tripadvisorRating: string
  tripadvisorReviews: string
}

export default function Reviews({
  reviews, googleRating, googleReviews, tripadvisorRating, tripadvisorReviews,
}: ReviewsProps) {
  return (
    <section className="section reviews" id="reviews">
      <div className="section-label reveal">What They Say</div>
      <h2 className="section-title reveal reveal-delay-1">
        Voices<br />from the Table
      </h2>

      <div className="reviews-ratings reveal reveal-delay-2">
        <div className="rating-badge">
          <span className="rating-badge-score">{googleRating}</span>
          <div>
            <div className="rating-badge-stars">★★★★★</div>
            <div className="rating-badge-source">Google · {googleReviews}</div>
          </div>
        </div>
        <div className="rating-badge">
          <span className="rating-badge-score">{tripadvisorRating}</span>
          <div>
            <div className="rating-badge-stars">★★★★★</div>
            <div className="rating-badge-source">TripAdvisor · {tripadvisorReviews}</div>
          </div>
        </div>
      </div>

      {reviews.map((review, i) => (
        <div key={review._id} className={`review-card reveal reveal-delay-${i + 2}`}>
          <div className="review-stars">
            {Array.from({ length: review.stars }, (_, j) => (
              <span key={j}>★ </span>
            ))}
          </div>
          <p className="review-text">&ldquo;{review.text}&rdquo;</p>
          <div className="review-author">{review.author}</div>
          <div className="review-source">{review.source}</div>
        </div>
      ))}
    </section>
  )
}
