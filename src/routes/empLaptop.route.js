import express from 'express'
import empLaptopController from '../controllers/empLaptop.controller.js'

const empLaptopRouter = express.Router()

/**
 * @swagger
 * /laptop/new:
 *   post:
 *     summary: Registers a new employee laptop
 *     tags: [Laptop]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               employeeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Laptop registered successfully
 *       400:
 *         description: Bad request
 */
empLaptopRouter.post('/new', empLaptopController.registerEmpLaptop)

/**
 * @swagger
 * /laptop/all:
 *   get:
 *     summary: Retrieves all employee laptops
 *     tags: [Laptop]
 *     responses:
 *       200:
 *         description: A list of all employee laptops
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   model:
 *                     type: string
 *                   employeeId:
 *                     type: integer
 */
empLaptopRouter.get('/all', empLaptopController.getAllLaps)

export default empLaptopRouter
