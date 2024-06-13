import mongoose, { Schema } from 'mongoose';
import Restaurant from './restaurant';
const menuSchema = new Schema({
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'restaurant',
        required: true,
    },
    categories: {
        food: [
            {
                name: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                },
                price: {
                    type: Number,
                    required: true,
                },
                isAvailable: {
                    type: Boolean,
                    default: true,
                },
            },
        ],
        drinks: [
            {
                name: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                },
                price: {
                    type: Number,
                    required: true,
                },
                isAvailable: {
                    type: Boolean,
                    default: true,
                },
            },
        ],
    },
});

const Menu = mongoose.model('menu', menuSchema);
export default Menu;
