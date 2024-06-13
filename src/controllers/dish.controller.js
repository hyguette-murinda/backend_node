import Dish from '../models/dish.js';
import { CreateDishSchema } from '../validations/app.validation.js';
const registerDish = async (req, res) => {
    try {
        const { error } = CreateDishSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                status: "error",
                message: error.details[0].message,
            });
        }

        // Extract dish details from the request body
        const { name, description, price, isAvailable, category, menuId } = req.body;

        // Create a new dish instance
        const dish = new Dish({
            name,
            description,
            price,
            isAvailable,
            category,
            menuId
        });

        // Save the dish to the database
        await dish.save();

        return res.status(201).json({
            status: "success",
            message: "Dish registered successfully",
            data: dish
        });
    } catch (error) {
        console.error("Error registering dish:", error.message);
        return res.status(500).json({
            status: "error",
            message: "An error occurred while registering the dish",
        });
    }
};

const dishController ={
    registerDish,
}
export default dishController