import express from 'express'
import { authSecury } from '../middleware/auth.middleware.js'
import { deletreCar, getCarById, getCars, newCar, updateCar } from './car.controller.js'
import { check } from 'express-validator'

const router = express.Router()

router.route('/car').post(
    [
        check('name','Name is required').notEmpty(),
        check('price', 'Price is required').isLength({min: 3, max: 10})
    ],
    authSecury, newCar
)

router.route('/car').get(authSecury, getCars)
router.route('/car/:id').delete(authSecury, deletreCar)
router.route('/car/:id').get(authSecury, getCarById)
router.route('/car/:id').put(authSecury, updateCar)

export default router