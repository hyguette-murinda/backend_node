import EmpLaptop from "../models/empLaptop";
import { ApiResponse } from "../responses/api.response";
import { CreateEmpLaptopSchema } from "../validations/app.validation";

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
    }catch(error){
        console.log(error.message)
    }
}
const empLaptopController = {
    registerEmpLaptop,
}
export default empLaptopController