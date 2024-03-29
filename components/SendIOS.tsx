import html2canvas from "html2canvas"
import { SetStateAction, useState } from 'react';
import {jsPDF} from "jspdf"
import Button from "./Button";
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'

const SendIOS = ({rootElementID, url, phone}:any) => {
    const cloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_URI;
    const [pdfSrc, setpdfSrc] = useState();
    const [Status, setStatus] = useState("not sent");
    const [uploadData, setUploadData] = useState();
    var pdfURL = "";
    const [country, setCountry] = useState("91");

    function handleChange(e:any) {
        setpdfSrc(e.target.files[0]);
    }
    console.log("url: "+url);
    const handleCountry = (e: React.ChangeEvent<any>) => {
        setCountry(e.target.value);
        console.log(country);
    }

    async function UploadFileDocument(){
        try{
            const input  = document.getElementById(rootElementID) as HTMLElement;

            console.log("click")
            setStatus("sending");

            html2canvas(input).then(async (canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("l", "pt", "a4");
            pdf.addImage(imgData, 'JPEG', 22, 22, 800, 550);

            var blob = pdf.output('blob');
            
            var formData = new FormData();
            formData.append('file', imgData);
            formData.append('upload_preset', 'invoice');
            try{
              const data = await fetch( `${cloudinary}`,{
                method: 'POST',
                body: formData
              }).then(r => r.json());
              pdfURL = data.secure_url;
              setpdfSrc(data.secure_url);
              setUploadData(data);
              setStatus("uploaded");
            }catch(error){
                console.log("err:"+error);
            }
            console.log("PDF: "+pdfURL);
            //whatsapp api start
            // const token2 = process.env.NEXT_PUBLIC_ACCESSTOKEN;
            // const testnum = process.env.NEXT_PUBLIC_TESTNUM;
            // const prodnum = process.env.NEXT_PUBLIC_PRODNUM;
            // var data2 = JSON.stringify({
            //     "messaging_product": "whatsapp",
            //     "to": `${country}${phone}`,
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
            //                 "text":`${pdfURL}`
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
                

                // const sendMessage = async () => {
                    const url = 'https://api.gupshup.io/wa/api/v1/msg';
                    const apiKey = 'hxhwqn1fkegzultwocnwt8s6jgtfmqo2';
                  
                    const data = {
                      channel: 'whatsapp',
                      source: '918888063456',
                      destination: '918237610776',
                      message: `{"type":"text","text":"Invoice\\nYou can download the invoice for your payment from here ${pdfURL}\\nSFC gym"}`,
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
                //   };


            // axios(config)
            // .then(function (response: { data: any; }) {
            //     // console.log(JSON.stringify(response.data));
            //     // Router.push('/invoice');
            //     setStatus("successful");
            // })
            // .catch(function (error: any) {
            //     console.log("error: "+error);
            // });
            // //whatsapp invoicing end
            // console.log("sent");

        });
        }
        catch(e){
            console.log("err:"+e);
        }

    } 

    return (
      <div className="flex justify-center item-center align-middle capitalize">
        {/* <input type="text" 
            name="file" 
            id="file" 
            className="border rounded border-gray-800 px-2 w-12 text-center" 
            placeholder="+91" 
            onChange={handleCountry} 
            value={country}/>
        <span className="text-lg px-2 pr-4"> {Status} </span> */}
        
        <div className='' onChange={handleChange} >
            {
                !pdfSrc && !uploadData &&(
                    <Button label="ios" onClick={UploadFileDocument} className="bg-yellow-500 onclick hover:bg-yellow-400 px-3"/>
                )
            }
            { pdfSrc && !uploadData && (
              <p className=''>
                <Button label="ios" className="bg-purple-600 hover:bg-purple-500 px-3"/>
              </p>
            )}

            {uploadData && (
              <Button label="ios" className="bg-green-500 hover:bg-green-400 px-3"/>
            )}
          </div> 
      </div>
      
    )
  }
  
  export default SendIOS