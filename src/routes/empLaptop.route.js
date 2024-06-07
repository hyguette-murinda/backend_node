import express from 'express'
import empLaptopController from '../controllers/empLaptop.controller.js'


const empLaptopRouter = express.Router()


empLaptopRouter.post('/new', empLaptopController.registerEmpLaptop)
empLaptopRouter.get('/all', empLaptopController.getAllLaps)

export default empLaptopRouter