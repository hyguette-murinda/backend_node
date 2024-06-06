import EmpLaptop from "../models/empLaptop.js";
import { ApiResponse } from "../responses/api.response.js";
import { CreateEmpLaptopSchema } from "../validations/app.validation.js";

const registerEmpLaptop = async (req, res) =>{
    try{
        const {error} = CreateEmpLaptopSchema.validate(req.body)
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const {laptopid, firstname, lastname, nationalid, mobile, email, department, position, laptopmanu, model, serialnumber} = req.body
        const empLaptop = new EmpLaptop({
            laptopid, 
            firstname, 
            lastname, 
            nationalid, 
            mobile, 
            email, 
            department, 
            position, 
            laptopmanu, 
            model, 
            serialnumber
        })
        await empLaptop.save()
        console.log("laptop registered")
        return res.status(201).json(new ApiResponse(true, "laptop registered successfully", empLaptop))

    }catch(error){
        console.log(error.message)
    }
}

 const getAllLaps = async (req, res) =>{
    try{
        const laps = await EmpLaptop.find()
        laps.forEach(async (lap) =>{
            console.log("laps")
        })
        console.log(laps)
        return res.status(200).json(new ApiResponse(true, "users got", laps))
    } catch(error){
        console.log(error.message);
    }
 }
const empLaptopController = {
    registerEmpLaptop,
    getAllLaps
}
export default empLaptopController