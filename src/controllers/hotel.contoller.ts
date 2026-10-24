import { Request,Response ,NextFunction} from "express"
import { createHotelServices, deleteHotelService, getAllHotelsService, getHotelByIdServices, updateHotelService } from "../Services/hotel.service"
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req:Request,res:Response,next:NextFunction){

    const hotelResponse=await createHotelServices(req.body);

    res.status(StatusCodes.CREATED).json({
        message:hotelResponse,
        success:true,
    })

}

export async function getHotelByIdHandler(req:Request,res:Response,next:NextFunction){

    const hotelResponse=await getHotelByIdServices(Number(req.params.id));

    res.status(StatusCodes.OK).json({
        message:hotelResponse,
        success:true,
    })

}

export async function getAllHotelsHandler(req:Request,res:Response,next:NextFunction) {
    const hotelResponse=await getAllHotelsService();;
    res.status(200).json({
        message:hotelResponse,
        success:true,

    })
    
    
}
export async function deleteHotelHandler(req:Request,res:Response,next:NextFunction) {
const hotelResponse=await deleteHotelService(Number(req.params.id));
    res.status(StatusCodes.ACCEPTED).json({
        message: "Hotel deleted successfully",
        success:true,
        data:hotelResponse

    })
    
    
}
export async function updateHotelHandler(req:Request,res:Response,next:NextFunction) {
    const hotelResponse=await updateHotelService(Number(req.params.id),req.body);
    res.status(StatusCodes.ACCEPTED).json({
        message: "Hotel deleted successfully",
        success:true,
        data:hotelResponse

    })
    
    
}

