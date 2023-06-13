
import { useState } from 'react';
import Button from "./Button";
const axios = require('axios').default;

const SendLater = ({label,url, phone}:any) => {
    
    const [pdfSrc, setpdfSrc] = useState();
    const [Status, setStatus] = useState("not sent");
    const [uploadData, setUploadData] = useState();
    var invURL = url;
    const [country, setCountry] = useState("91");

    function handleChange(e:any) {
        setpdfSrc(e.target.files[0]);
    }

    async function UploadFileDocument(){
        try{
            
            setStatus("sending");

            //whatsapp api start
            const token2 = process.env.NEXT_PUBLIC_ACCESSTOKEN;
            const testnum = process.env.NEXT_PUBLIC_TESTNUM;
            const prodnum = process.env.NEXT_PUBLIC_PRODNUM;
            var data2 = JSON.stringify({
                "messaging_product": "whatsapp",
                "to": `${country}${phone}`,
                "type": "template",
                "template": {
                "name": "ios_invoice_test",
                "language": {
                    "code": "en_US"
                },
                "components": [
                    {
                        "type": "body",
                        "parameters": [{
                            "type": "text",
                            "text":`${invURL}`
                        }]
                    }],
                }
            });
            
                //   console.log(token2);
                var config = {
                    method: 'post',
                    url: `https://graph.facebook.com/v15.0/${prodnum}/messages`,
                    headers: { 
                    'Authorization': `Bearer ${token2}`,
                    'Content-Type': 'application/json'
                    },
                    data : data2
                };
                //whatsapp api end

            axios(config)
            .then(function (response: { data: any; }) {
                setStatus("successful");
            })
            .catch(function (error: any) {
                console.log("error: "+error);
            });
            //whatsapp invoicing end
            console.log("sent");

        }
        catch(e){
            console.log("err:"+e);
        }

    }

    return (
      <div className="text-blue-500 uppercase">
        
        <div className='' onChange={handleChange} >
            {
                !pdfSrc && !uploadData &&(
                    <button onClick={UploadFileDocument} className="" >{label}</button>
                )
            }
            { pdfSrc && !uploadData && (
              <p className=''>
                <button className="" >{label}</button>
              </p>
            )}

            {uploadData && (
              <p className=''>
                <button className="" >{label}</button>
              </p>
            )}
          </div> 
      </div>
      
    )
  }
  
  export default SendLater;