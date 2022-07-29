import dbConnect from "../../../db/dbconnect";
import Member from "../../../models/Member";

dbConnect();

// get, post records

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try{
        const members = await Member.find({});
        res.status(200).json({success:true, member:members});
      }catch(err){
        res.status(400).json({success:false})
      }
      break;

    case "POST":
      try{
        const member = await Member.create(req.body);
        res.status(200).json({success:true, member:member});
      }catch(err){
        res.status(400).json({success:false+err})
      }
      break;

    default:
      res.status(405).json({success:false, message: "Method not allowed" });
      break;
  }
}