import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/producthooks';
import '../styling/productdetail.css';

import ProductStats from '../components/productstats';
import addcart from '../components/addcart';

const ProductDetail = () => {
    const { Id } = useParams(); // Assuming Id is the product ID.
    const [product, setProduct] = useState(null);
    const { getDetailProduct, getUserReview } = useProducts();
    const [userReviews, setUserReviews] = useState([]);
    const navigate = useNavigate();
   

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getDetailProduct(Id);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        const fetchUserReviews = async () => {
            try {
                const data = await getUserReview(Id);
                setUserReviews(data);
            } catch (error) {
                console.error("Error fetching user reviews:", error);
            }
        };

        fetchProduct();
        fetchUserReviews();
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        dispatch(addcart(product._id));
    };

    const handleBuyNow = (product)=> {
        debugger
        navigate(`/checkout`, { state: { product } });
    };

    return (
        <div className="prd-container py-4 my-4">
            <div className="prd-row d-flex justify-content-center">
                <div className="col-md-4 col-sm-3 d-flex align-items-center justify-content-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Brand: {product.brand}</p>
                    <hr />
                    <h5 className="prd-price">${product.price.toFixed(2)}</h5>
                    <div className=" d-flex mt-2">
                        <button className="btn product-detail-btn" style={{backgroundColor: "#001F3F",color:"white",borderRadius:"3px"}} onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
                        <button className="btn" style={{backgroundColor: "#001F3F",color:"white",borderRadius:"3px",marginLeft:"20px"}}  onClick={() => handleBuyNow(product)}>Buy Now</button>
                    </div>
                </div>
                <div className="col-md-4 col-sm-3 prd-similar">
    <ProductStats product_id={Id} user_id={product.user_id} />
    <div className="reviews-section">
        <p className="reviews-title">Reviews</p>
        {userReviews.length === 0 ? (
            <p>No reviews yet. Be the first to review this product!</p>
        ) : (
            userReviews.map((review) => (
                <div key={review._id} className="review">
                    <p><strong>{review.user_id}</strong></p>
                    <p>Rating: {review.rating}</p>
                    <p>{review.review}</p>
                    <hr />
                </div>
            ))
        )}
    </div>
</div>

            </div>
        </div>
    );
};

export default ProductDetail