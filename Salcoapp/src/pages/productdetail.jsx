import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/producthooks';
import '../styling/productdetail.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartaction'; // Import your action creator
import ProductStats from '../components/productstats';
import AddCart from '../components/addcart'; // Component for cart modal
import ImageLoader from '../components/siteloader';
import useCart from '../hooks/carthook';

const ProductDetail = () => {
    const { Id } = useParams(); // Assuming Id is the product ID.
    const [product, setProduct] = useState(null);
    const [userReviews, setUserReviews] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize dispatch for Redux
    const { getDetailProduct, getUserReview } = useProducts();
    const { addCart } = useCart();
    const [showCartModal, setShowCartModal] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getDetailProduct(Id);
                setProduct(data);
                if (data.sizes && data.sizes.length > 0) {
                    setSelectedSize(data.sizes[0]); // Set default size if available
                }
                if (data.colors && data.colors.length > 0) {
                    setSelectedColor(data.colors[0]); // Set default color if available
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        const fetchUserReviews = async () => {
            try {
                const data = await getUserReview(Id);
                setUserReviews(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user reviews:", error);
            }
        };

        fetchProduct();
        fetchUserReviews();
    }, [Id, getDetailProduct, getUserReview]);

    if (loading) {
        return <div><ImageLoader /></div>;
    }

    if (!product) {
        return <div>No product data available</div>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, selectedSize, selectedColor }));
        setShowCartModal(true);
    };

    const handleBuyNow = () => {
        navigate('/order', {
            state: {
                product: {
                    ...product,
                    selectedSize,
                    selectedColor
                }
            }
        });
    };

    return (
        <div className="prd-container py-4 my-4">
            <div className="prd-row d-flex justify-content-center">
                <div className="col-md-4 col-sm-3 d-flex align-items-center justify-content-center">
                    <img
                        src={product.images[0]} // Updated to use the first image
                        alt={product.name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Brand: {product.brand}</p>
                    
                    {/* Size and Color Selection */}
                    <div className="mb-3">
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="d-flex align-items-center mb-3">
                                <label htmlFor="size-select" className="form-label" style={{ marginRight: '10px' }}>Size:</label>
                                <select
                                    id="size-select"
                                    className="form-select"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                    style={{ width: '20%' }}
                                >
                                    {product.sizes.map((size) => (
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {product.colors && product.colors.length > 0 && (
                            <div className="mb-3">
                                <p className="form-label" style={{ fontWeight: 'bold' }}>Color:</p>
                                <div className="color-options">
                                    {product.colors.map((color) => (
                                        <div key={color} className="form-check form-check-inline">
                                            <input
                                                type="radio"
                                                id={`color-${color}`}
                                                name="color"
                                                value={color}
                                                checked={selectedColor === color} // Ensure this correctly reflects the selected color
                                                onChange={(e) => setSelectedColor(e.target.value)} // Update state correctly
                                                className="form-check-input"
                                            />
                                            <label htmlFor={`color-${color}`} className="form-check-label">
                                                {color}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <hr />
                    <h5 className="prd-price">${product.price.toFixed(2)}</h5>

                    <div className="d-flex mt-2">
                        <button className="btn product-detail-btn" style={{ backgroundColor: "#001F3F", color: "white", borderRadius: "3px" }} onClick={handleAddToCart}>Add to Cart</button>
                        <button className="btn" style={{ backgroundColor: "#001F3F", color: "white", borderRadius: "3px", marginLeft: "20px" }} onClick={handleBuyNow}>Buy Now</button>
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
            <AddCart show={showCartModal} handleClose={() => setShowCartModal(false)} />
        </div>
    );
};

export default ProductDetail;
