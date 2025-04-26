import { useEffect, useState } from "react"
import { FetchRewievs, Review } from "../../data/FetchRewievs"


const Rewievs = () => {
    const [reviews, SetReviews] = useState<Review[]>([])

    useEffect(() => {
        const getReviews = async () => {
            const reviewsData = await FetchRewievs();
            SetReviews(reviewsData)
        }

        getReviews();
    }, [])

  return (
    <section className="p-8">
    <h2 className="text-4xl font-bold text-center mb-8">Vad våra kunder säger</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg font-semibold mb-2">{review.reviewerName}</p>
          <p className="text-yellow-500 mb-2">Betyg: {review.rating}/5</p>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Rewievs