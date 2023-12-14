
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
            // const token2 = process.env.NEXT_PUBLIC_ACCESSTOKEN;
            // const testnum = process.env.NEXT_PUBLIC_TESTNUM;
            // const prodnum = process.env.NEXT_PUBLIC_PRODNUM;
            // var data2 = JSON.stringify({
            //     "messaging_product": "whatsapp",
            //     // "to": `${country}${phone}`,
            //     "to": `${country}9604772415`,
            //     "type": "template",
            //     "template": {
            //     "name": "ios_invoice_test",
            //     "language": {
            //         "code": "en_US"
            //     },
            //     "components": [
            //         {
            //             "type": "body",
            //             "parameters": [{
            //                 "type": "text",
            //                 "text":`${invURL}`
            //             }]
            //         }],
            //     }
            // });
            
            //     //   console.log(token2);
            //     var config = {
            //         method: 'post',
            //         url: `https://graph.facebook.com/v15.0/${prodnum}/messages`,
            //         headers: { 
            //         'Authorization': `Bearer ${token2}`,
            //         'Content-Type': 'application/json'
            //         },
            //         data : data2
            //     };
                //whatsapp api end

            // axios(config)
            // .then(function (response: { data: any; }) {
            //     setStatus("successful");
            // })
            // .catch(function (error: any) {
            //     console.log("error: "+error);
            // });
            // //whatsapp invoicing end
            // console.log("sent");

            const url = 'https://api.gupshup.io/wa/api/v1/msg';
                    const apiKey = 'hxhwqn1fkegzultwocnwt8s6jgtfmqo2';
                  
                    const data = {
                      channel: 'whatsapp',
                      source: '918888063456',
                      destination: `91${phone}`,
                      message: `{"type":"text","text":"Invoice\\nYou can download the invoice for your payment from here ${invURL}\\nSFC gym"}`,
                      'src.name': 'SFCGym',
                    };
                  
                    try {
                      const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                          'Cache-Control': 'no-cache',
                          'Content-Type': 'application/x-www-form-urlencoded',
                          'apikey': apiKey,
                        },
                        body: new URLSearchParams(data).toString(),
                      });
                  
                      if (response.ok) {
                        const responseData = await response.json();
                        setStatus("successful");
                        console.log('Message sent successfully:', responseData);
                      } else {
                        console.error('Failed to send message:', response.status, response.statusText);
                      }
                    } catch (error) {
                        console.log("error: "+error);
                      console.error('An error occurred:', error);
                    }

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