import express from 'express'
import restaurantController from "../controllers/restaurant.controller.js";
const restaurantRouter = express.Router()

/**
 * @swagger
 * /api/v1/restaurant/add:
 *   post:
 *     summary: Registers a new restaurant
 *     tags: [Restaurant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: restaurant registered successfully
 *       400:
 *         description: Bad request
 */

restaurantRouter.post('/add', restaurantController.registerRestaurant)
export default restaurantRouter