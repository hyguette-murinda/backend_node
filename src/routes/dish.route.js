import express from 'express'
import dishController from '../controllers/dish.controller.js'
const dishRouter = express.Router()

/**
 * @swagger
 * /api/v1/dish/add:
 *   post:
 *     summary: Register a new dish
 *     tags: [Dish]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 *     responses:
 *       201:
 *         description: Dish registered successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
dishRouter.post('/add', dishController.registerDish);

export default dishRouter