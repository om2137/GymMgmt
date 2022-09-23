import dbConnect from "../../../db/dbconnect";
import Invoice from "../../../models/Invoice";

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
                const invoice = await Invoice.findById(id);
                if(!invoice){
                    res.status(404).json({success:false, message:"Invoice not found"});
                }
                res.status(200).json({success:true, invoice});
            }catch(err){
                res.status(400).json({success:false})
            }
            break;
        case "PUT":
            try{
                const invoice = await Invoice.findByIdAndUpdate(id, req.body, {
                    new:true,
                    runValidators:true
                });
                if(!invoice){
                    res.status(404).json({success:false, message:"Invoice not found"});
                }
                res.status(200).json({success:true, invoice});
            }catch(err){
                res.status(400).json({success:false, err})
            }
            break;
        case "DELETE":
            try{
                const invoice = await Invoice.deleteOne({_id:id});
                if(!invoice){
                    res.status(404).json({success:false, message:"Invoice not found"});
                }
                res.status(200).json({success:true, invoice});
            }catch(err){
                res.status(400).json({success:false})
            }
            break;
        default:
            res.status(405).json({success:false, message: "Method not allowed" });
            break;
    }
}