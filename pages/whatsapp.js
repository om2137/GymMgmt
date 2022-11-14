import baseUrl from '../helper/baseUrl';
const axios = require('axios').default;

export async function getStaticProps(context) {
  console.log('working');
  
  const res = await axios(`${baseUrl}/webhook`);
  
}

const token = process.env.ACCESSTOKENS;
// const test = process.env.TOKEN;


export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try{
        const test = process.env.TOKEN;

        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if (mode && token) {
          if (mode === "subscribe" && token === test) {
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
          } else {
            res.sendStatus(403);
          }
        }
        res.status(200);
      }catch(err){
        res.status(400).json({success:false})
      }
      break;

    case "POST":
      try{
        axios({
          method: "POST", 
          url:
            "https://graph.facebook.com/v15.0/113161734938557/messages?access_token=" +token,
          data: {
            messaging_product: "whatsapp",
            to: from,
            text: { body: "Ack: " + "thank you" },
          },
          headers: { "Content-Type": "application/json" },
        });
        res.status(200);
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