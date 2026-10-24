import express from 'express'
import {createHotelHandler, getAllHotelsHandler, getHotelByIdHandler, softdeleteHotelHandler, updateHotelHandler } from "../../controllers/hotel.contoller";
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';
// import { getHotelById } from "../../repositories/Hotel.repostries";

const hotelRouter=express.Router();
hotelRouter.post('/',validateRequestBody(hotelSchema),createHotelHandler);
hotelRouter.get('/:id',getHotelByIdHandler);
// hotelRouter.delete('/:id',deleteHotelHandler);
hotelRouter.put("/:id", updateHotelHandler);
hotelRouter.get("/", getAllHotelsHandler);
hotelRouter.delete("/:id",softdeleteHotelHandler);

export default hotelRouter;
