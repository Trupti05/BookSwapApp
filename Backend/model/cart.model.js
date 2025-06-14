import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',  // Reference to the User model
        required: true 
    },
    items: [
        {
            book: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book',  // Reference to the Book model
                required: true
            },
            type: {
                type: String,
                enum: ['buy', 'rent'],  // Specifies if the item is for buy or rent
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ]
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
