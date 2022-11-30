import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
    
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

export const updateHotel = async (req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true})
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err)
    }
}


export const deleteHotel = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted.");
    }catch(err){
        next(err)
    }
}


export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    }catch(err){
        next(err)
    }
}
 


export const getHotels = async (req,res,next)=>{
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
};


export const countByCity = async (req, res, next) => {
    const addresses = req.query.addresses.split(",");
    try {
      const list = await Promise.all(
        addresses.map((address) => {
          return Hotel.countDocuments({ address: address });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
};


export const countByType = async (req, res, next) => {
    try {
      const hostelCount = await Hotel.countDocuments({ type: "hostel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      //const resortCount = await Hotel.countDocuments({ type: "resort" });
      //const villaCount = await Hotel.countDocuments({ type: "villa" });
      //const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hostel", count: hostelCount },
        { type: "apartments", count: apartmentCount },
        ]);
    } catch (err) {
      next(err);
    }
};
  
// { type: "resorts", count: resortCount },
// { type: "villas", count: villaCount },
// { type: "cabins", count: cabinCount },
      


export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
};
  