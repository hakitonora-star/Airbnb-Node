import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { HOTELDTO } from "../dto/Hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData:HOTELDTO){
    const hotel=await Hotel.create({
        name:hotelData.name,
        address:hotelData.address,
        location:hotelData.location,
        rating:hotelData.rating,
        rating_count:hotelData.ratingCount
        
    });

    logger.info(`Hotel.created:${hotel.id}`);
    return hotel;



}
export async function getHotelById(id:number) {
    const hotel=await Hotel.findByPk(id)
    if(!hotel){
        logger.error(`Hotel not found :${id}`);
        throw new NotFoundError("Hotel not found");
    }
    return hotel;
    
}

    export async function deleteHotel(id: number) {
    const hotel = await Hotel.findByPk(id);
    if(!hotel){
        return null;
    }
    await hotel.destroy();
 logger.info(`Hotel.deleted:${hotel. name}`);
    return hotel;
}
  
export async function updateHotel(id: number,hotelData: HOTELDTO) {
    const hotel = await Hotel.findByPk(id);

    if (!hotel) {
        return null;
    }

    await hotel.update({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating,
        rating_count: hotelData.ratingCount
    });

    logger.info(`Hotel updated: ${hotel.name}`);

    return hotel;
}

export async function getAllHotels() {
    const hotels = await Hotel.findAll();
    return hotels;
}
