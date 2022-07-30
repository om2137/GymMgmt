import dbConnect from "../../../db/dbconnect";
import Member from "../../../models/Member";

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
                const member = await Member.findById(id);
                if(!member){
                    res.status(404).json({success:false, message:"Member not found"});
                }
                res.status(200).json({success:true, member});
            }catch(err){
                res.status(400).json({success:false})
            }
            break;
        case "PUT":
            try{
                const member = await Member.findByIdAndUpdate(id, req.body, {
                    new:true,
                    runValidators:true
                });
                if(!member){
                    res.status(404).json({success:false, message:"Member not found"});
                }
                res.status(200).json({success:true, member});
            }catch(err){
                res.status(400).json({success:false, err})
            }
            break;
        case "DELETE":
            try{
                const member = await Member.deleteOne({_id:id});
                if(!member){
                    res.status(404).json({success:false, message:"Member not found"});
                }
                res.status(200).json({success:true, member});
            }catch(err){
                res.status(400).json({success:false})
            }
            break;
        default:
            res.status(405).json({success:false, message: "Method not allowed" });
            break;
    }
}