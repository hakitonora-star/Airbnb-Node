import { Request,Response ,NextFunction} from "express"
import { createHotelServices, getHotelByIdServices } from "../Services/hotel.service"

export async function createHotelHandler(req:Request,res:Response,next:NextFunction){

    const hotelResponse=await createHotelServices(req.body);

    res.status(201).json({
        message:hotelResponse,
        success:true,
    })

}

export async function getHotelByIdHandler(req:Request,res:Response,next:NextFunction){

    const hotelResponse=await getHotelByIdServices(Number(req.params.id));

    res.status(200).json({
        message:hotelResponse,
        success:true,
    })

}

export async function getAllHotelsHandler(req:Request,res:Response,next:NextFunction) {
    res.status(501);
    
}
export async function deleteHotelHandler(req:Request,res:Response,next:NextFunction) {
    res.status(501);
    
}
export async function updateHotelHandler(req:Request,res:Response,next:NextFunction) {
    res.status(501);
    
}