const DATA_API = "https://dummyjson.com/products";

export interface Review {
  rating: number;
  comment: string;
  reviwereName: string;
}

export const FetchRewievs = async (): Promise<Review[]> => {
  const response = await fetch(DATA_API);
  const data = await response.json();
  const allReviews: Review[] = data.products.flatMap((product: any) =>
    product.reviews.map((review: any) => ({
      rating: review.rating,
      comment: review.comment,
      reviwereName: review.reviwereName,
    }))
  );


  const highRated = allReviews.filter(review => review.rating > 4)

  return highRated.slice(0, 10)
};


