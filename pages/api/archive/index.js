// import dbConnect from "../../../db/dbconnect";
import Archive from "../../../models/Archive";

// dbConnect();

// get, post records

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try{
        const archives = await Archive.find({});
        res.status(200).json({success:true, archive:archives});
      }catch(err){
        res.status(400).json({success:false})
      }
      break;

    case "POST":
      try{
        const archive = await Archive.create(req.body);
        res.status(200).json({success:true, archive:archive});
      }catch(err){
        res.status(400).json({success:false+err+"text"})
        console.log("error:om "+err);
      }
      break;

    default:
      res.status(405).json({success:false, message: "Method not allowed" });
      break;
  }
}