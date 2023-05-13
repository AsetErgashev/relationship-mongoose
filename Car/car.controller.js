import asyncHandler from 'express-async-handler'
import Car from '../model/Car.js'
import { validationResult } from 'express-validator'

export const newCar = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
    return res.status(400).json({message: "Error Please Correct Your Request", errors})
    }

    req.body.createdBy = req.user.userId
    const car = await Car.create(req.body)

    car.save()
    res.json({message: 'Car created Succesfully'})
}


export const getCarById = asyncHandler(async(req,res) => {
    const {id} = req.params
    
    const car = await Car.findById(id)
    res.json(car)
})


export const getCars = asyncHandler(async(req,res) => {
    const cars = await Car.find()
    
    res.json(cars)
})


export const updateCar = async(req,res) => {
    const { id } = req.params;
    const { name, price} = req.body;

    const car = await Car.findByIdAndUpdate(id, { name, price }, { new: true });

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json(car)
}


export const deletreCar = asyncHandler(async(req,res) => {
    const {id} = req.params

    const car = await Car.findByIdAndDelete(id)
    res.json({message: 'Car deleted succesfully!'})
}) 
