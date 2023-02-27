import dbConnect from "../../../db/dbconnect";
import Archival from "../../../models/Archive";

dbConnect();

//unique record: get, edit, delete

export default async (req, res) => {
    const { 
        query: { id },
        method 
    } = req;
    
    switch (method) {
        case "GET":
            try{
                const archive = await Archival.findById(id);
                if(!archive){
                    res.status(404).json({success:false, message:"archive not found"});
                }
                res.status(200).json({success:true, archive});
            }catch(err){
                res.status(400).json({success:false})
            }
            break;
        case "PUT":
            try{
                const archive = await Archival.findByIdAndUpdate(id, req.body, {
                    new:true,
                    runValidators:true
                });
                if(!archive){
                    res.status(404).json({success:false, message:"archive not found"});
                }
                res.status(200).json({success:true, archive});
            }catch(err){
                res.status(400).json({success:false, err})
            }
            break;
        case "DELETE":
            try{
                const archive = await Archival.deleteOne({_id:id});
                if(!archive){
                    res.status(404).json({success:false, message:"archive not found"});
                }
                res.status(200).json({success:true, archive});
            }catch(err){
                res.status(400).json({success:false})
            }
            break;
        default:
            res.status(405).json({success:false, message: "Method not allowed" });
            break;
    }
}