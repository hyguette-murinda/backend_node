import Restaurant from "../models/restaurant";
import { CreateRestaurantSchema } from "../validations/app.validation";

const registerRestaurant = async (req, res) => {
  try {
    const { error } = CreateRestaurantSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "error",
        message: error.details[0].message,
      });
    }
    const {name, address} = req.body;
    const resto = new Restaurant({
        name,
        address
    })
    await resto.save()
    console.log("restaurant registered")
    return res.status(201).json({
        status: "success",
        message: "restaurant registered successfully",
        data: resto
    })
}catch(error){
    console.log(error.message)
}
}

const restaurantController = {
    registerRestaurant
}
export default restaurantController;