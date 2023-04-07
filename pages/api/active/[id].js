// import dbConnect from "../../../db/dbconnect";
import Active from "../../../models/Active";

// dbConnect();

//unique record: get, edit, delete

export default async (req, res) => {
    const { 
        query: { id },
        method 
    } = req;
    
    switch (method) {
        case "GET":
            try{
                const active = await Active.findById(id);
                if(!active){
                    res.status(404).json({success:false, message:"active not found"});
                }
                res.status(200).json({success:true, active});
            }catch(err){
                res.status(400).json({success:false})
            }
            break;
        case "PUT":
            try{
                const active = await Active.findByIdAndUpdate(id, req.body, {
                    new:true,
                    runValidators:true
                });
                if(!active){
                    res.status(404).json({success:false, message:"active not found"});
                }
                res.status(200).json({success:true, active});
            }catch(err){
                res.status(400).json({success:false, err})
            }
            break;
        case "DELETE":
            try{
                const active = await Active.deleteOne({_id:id});
                if(!active){
                    res.status(404).json({success:false, message:"active not found"});
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