const CartModal = require('../models/cartmodal'); // Updated the model name to CartModal
const Product = require('../models/productmodel');

// Add item to cart
exports.addItemToCart = async (req, res) => {
  try {
    const { user_id, product_id, totalItem, discount } = req.body;
    
    // Find the product and its price
    const product = await Product.findById(product_id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Find user's cart
    const cart = await CartModal.findOne({ userId: user_id });
    const productPrice = product.price;
    const totalDiscountPrice = discount ? productPrice * (1 - discount / 100) * totalItem : productPrice * totalItem;

    if (cart) {
      // If cart exists, update it
      const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === product_id);
      if (existingItemIndex > -1) {
        // If the product already exists in the cart, update the quantity and price
        cart.items[existingItemIndex].quantity += totalItem;
        cart.items[existingItemIndex].price += totalDiscountPrice;
      } else {
        // If the product doesn't exist, add it to the cart
        cart.items.push({ productId: product_id, quantity: totalItem, price: totalDiscountPrice });
      }
      cart.totalPrice += totalDiscountPrice;
      await cart.save();
    } else {
      // Create a new cart if it doesn't exist
      const newCart = new CartModal({
        userId: user_id,
        items: [{ productId: product_id, quantity: totalItem, price: totalDiscountPrice }],
        totalPrice: totalDiscountPrice
      });
      await newCart.save();
    }

    res.status(200).json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove item from cart
exports.removeItemFromCart = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;

    // Find the user's cart
    const cart = await CartModal.findOne({ userId: user_id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === product_id);
    if (itemIndex > -1) {
      // If the product exists in the cart, remove it
      const itemPrice = cart.items[itemIndex].price;
      cart.totalPrice -= itemPrice;
      cart.items.splice(itemIndex, 1); // Remove the item
      await cart.save();
      return res.status(200).json({ message: 'Item removed from cart' });
    }

    res.status(404).json({ message: 'Item not found in cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View cart
exports.viewCart = async (req, res) => {
  try {
    const { user_id } = req.params;

    // Find the user's cart and populate the product details
    const cart = await CartModal.findOne({ userId: user_id }).populate('items.productId', 'name price');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clear cart
exports.clearCart = async (req, res) => {
  try {
    const { user_id } = req.body;

    // Find and delete the user's cart
    const cart = await CartModal.findOneAndDelete({ userId: user_id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    res.status(200).json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getItemsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cart = await CartModal.findOne({ userId: user_id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
 
