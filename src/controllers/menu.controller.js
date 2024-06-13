import Menu from '../models/menu.js';
import { CreateMenuSchema } from '../validations/app.validation.js';

const registerMenu = async (req, res) => {
    try {
        // Validate the request body
        const { error } = CreateMenuSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                status: "error",
                message: error.details[0].message,
            });
        }

        // Extract data from request body
        const { restaurant, categories } = req.body;

        // Create a new Menu instance
        const menu = new Menu({
            restaurant,
            categories,
        });

        // Save the menu to the database
        await menu.save();

        // Log success message and send response
        console.log("Menu registered successfully");
        return res.status(201).json({
            status: "success",
            message: "Menu registered successfully",
            data: menu,
        });
    } catch (error) {
        // Log the error and send response
        console.error("Error registering menu:", error.message);
        return res.status(500).json({
            status: "error",
            message: "An error occurred while registering the menu",
        });
    }
};
const menuController ={
    registerMenu,
}
export default menuController
