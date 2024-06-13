import Restaurant from "../models/restaurant.js";
import { CreateRestaurantSchema } from "../validations/app.validation.js";

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

const getAllRestos = async (req, res) =>{
    try{
        const restos = await Restaurant.find()
        return res.status(200).json({
            status: "success",
            data: restos
        })
    }catch(error){
        console.log(error.message)
    }
}

const restaurantController = {
    registerRestaurant,
    getAllRestos
}
export default restaurantController;