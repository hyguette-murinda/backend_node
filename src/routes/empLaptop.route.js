import express from 'express'
import empLaptopController from '../controllers/empLaptop.controller'


const empLaptopRouter = express.Router()


empLaptopRouter.post('/new', empLaptopController.registerEmpLaptop)

export default empLaptopRouter