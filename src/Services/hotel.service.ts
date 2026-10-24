// import { BlockList } from "net";
import { HOTELDTO } from "../dto/Hotel.dto";
import { createHotel, getHotelById } from "../repositories/Hotel.repostries";
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