// import { BlockList } from "net";
import { HOTELDTO } from "../dto/Hotel.dto";
import { createHotel, getAllHotels, getHotelById, softDelete, updateHotel } from "../repositories/Hotel.repostries";
import { NotFoundError } from "../utils/errors/app.error";
// import { BadRequestError } from "../utils/errors/app.error";

// const blocklistedAddresses=[
//     "123 Fake st",
//     "456 Elm st",
//     "789 Maple Ave",
// ];
// export function isAddressBlockListed(address:string):boolean{
//     return blocklistedAddresses.includes(address);
// }

export async function createHotelServices(hotelData:HOTELDTO) {
    // if(isAddressBlockListed(hotelData.address)){
    //     throw new BadRequestError("Address is Blocklisted")

    // }
    const hotel=await createHotel(hotelData);
    return hotel
    
}

export async function getHotelByIdServices(id:number) {
   
    const hotel=await getHotelById(id);
    return hotel;
    
}

// export async function deleteHotelService(id:number){
//     const hotel =await deleteHotel(id);
//     if(!hotel){
//          throw new NotFoundError("Hotel not found");
//     }
//     return hotel;
// }
export async function updateHotelService(id:number,hotelData:HOTELDTO) {
    const hotel =await updateHotel(id,hotelData);
    if(!hotel){
         throw new NotFoundError("Hotel not found");
    }
    return hotel;

    
}
export async function getAllHotelsService() {
    const hotels = await getAllHotels();
    return hotels;
}
export async function softDeleteHotelService(id:number){
    const hotel =await softDelete(id);
    if(!hotel){
         throw new NotFoundError("Hotel not found");
    }
    return hotel;
}