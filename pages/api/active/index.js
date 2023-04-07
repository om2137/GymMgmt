// import dbConnect from "../../../db/dbconnect";
import Active from "../../../models/Active";

// dbConnect();

// get, post records

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try{
        const actives = await Active.find({});
        res.status(200).json({success:true, active:actives});
      }catch(err){
        res.status(400).json({success:false})
      }
      break;

    case "POST":
      try{
        const active = await Active.create(req.body);
        res.status(200).json({success:true, active:archive});
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