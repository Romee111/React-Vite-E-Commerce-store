import React, { useState } from 'react';
import { useProducts } from '../hooks/producthooks';
 import '../styling/productstats.css';
import {useParams}  from 'react-router-dom';
function ProductStats({ product_id }) {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const { addreviews } = useProducts();
    const {user_id} = useParams();
    const [newReview, setNewReview] = useState(null);

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const review = await addreviews({ product_id, user_id, rating, review: reviewText });
            setNewReview(review);
            console.log('Added review:', review);
            setRating(0);
            setReviewText('');
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fa fa-star ${i <= rating ? 'checked' : ''}`}
                    onClick={() => setRating(i)}
                    style={{ cursor: 'pointer' }}
                />
            );
        }
        return stars;
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="review-form">
                <label>
                    Rating:
                    <div>{renderStars()}</div>
                </label>
                <br />
                <label>
                    Review:
                    <textarea value={reviewText} onChange={handleReviewTextChange} required />
                </label>
                <br />
                <button type="submit" className='review-btn' > Submit Review</button>
            </form>
            {newReview && (
                <div className="review">
                    <p><strong>{newReview.user_id}</strong></p>
                    <p>Rating: {newReview.rating}</p>
                    <p>{newReview.review}</p>
                    <hr />
                </div>
            )}
        </>
    );
}

export default ProductStats;
