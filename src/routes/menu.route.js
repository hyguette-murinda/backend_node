import expess from 'express'
import menuController from '../controllers/menu.controller';
const menuRouter = expess.Router()

/**
 * @swagger
 * /api/v1/menu/add:
 *   post:
 *     summary: Registers a new menu
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               restaurant:
 *                 type: string
 *                 description: The ID of the restaurant to which the menu belongs
 *               categories:
 *                 type: object
 *                 properties:
 *                   food:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         description:
 *                           type: string
 *                         price:
 *                           type: number
 *                         isAvailable:
 *                           type: boolean
 *                           default: true
 *                   drinks:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         description:
 *                           type: string
 *                         price:
 *                           type: number
 *                         isAvailable:
 *                           type: boolean
 *                           default: true
 *     responses:
 *       201:
 *         description: Menu registered successfully
 *       400:
 *         description: Bad request
 */

menuRouter.post('/add', menuController.registerMenu);
