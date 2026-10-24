import express from 'express'
import {createHotelHandler, getHotelByIdHandler } from "../../controllers/hotel.contoller";
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';
// import { getHotelById } from "../../repositories/Hotel.repostries";

const hotelRouter=express.Router();
hotelRouter.post('/',validateRequestBody(hotelSchema),createHotelHandler);
hotelRouter.get('/:id',getHotelByIdHandler);

export default hotelRouter
