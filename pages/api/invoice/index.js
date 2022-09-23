import dbConnect from "../../../db/dbconnect";
import Invoice from "../../../models/Invoice";

dbConnect();

// get, post records

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try{
        const invoices = await Invoice.find({});
        res.status(200).json({success:true, invoice:invoices});
      }catch(err){
        res.status(400).json({success:false})
      }
      break;

    case "POST":
      try{
        const invoice = await Invoice.create(req.body);
        res.status(200).json({success:true, invoice:invoice});
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