const review=require("../models/reviewmodel")

exports.addreview = async (req, res) => {
    try {
        const { product_id, user_id, rating, review} = req.body;
        console.log('Request body:', req.body); // Add this line to log the request body
        if (!product_id || !user_id || !rating || !review) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const newReview = await review.create({
            product_id,
            user_id,
            rating,
            review,
        });
        res.status(200).json(newReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 exports.getreviewsById = async (req, res) => {
    try {
        const { user_id } = req.params;
        const reviews = await review.find({ user_id }).populate('user_id', 'name').populate('product_id', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getreviews = async (req, res) => {
    try {
        const reviews = await review.find().populate('user_id', 'name').populate('product_id', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletereview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await review.findByIdAndDelete(id);
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}