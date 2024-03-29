import html2canvas from "html2canvas"
import { SetStateAction, useState } from 'react';
import {jsPDF} from "jspdf"
import Button from "./Button";
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'

const SendPdf = ({rootElementID, phone}:any) => {
    const cloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_URI;
    const [pdfSrc, setpdfSrc] = useState();
    const [Status, setStatus] = useState("not sent");
    const [uploadData, setUploadData] = useState();
    var pdfURL = "";
    const [country, setCountry] = useState("91");

    function handleChange(e:any) {
        setpdfSrc(e.target.files[0]);
    }

    const handleCountry = (e: React.ChangeEvent<any>) => {
        setCountry(e.target.value);
        console.log(country);
    }

    async function UploadFileDocument(){
        try{
            const input  = document.getElementById(rootElementID) as HTMLElement;
            const apiUrl = 'https://api.gupshup.io/wa/api/v1/template/msg';
            const apiKey = 'hxhwqn1fkegzultwocnwt8s6jgtfmqo2';

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
            //     // "type": "template",
            //     // "template": {
            //     // "name": "sfc_welcome",
            //     // "language": {
            //     //     "code": "en"
            //     // },
            //     // "components": [
            //     //     {
            //     //         "type": "header",
            //     //         "parameters": [
            //     //         {
            //     //             "type": "document",
            //     //             "document": {
            //     //                 "link": `${pdfURL}`,
            //     //                 "filename":"invoice"
            //     //             }
            //     //         }
            //     //         ]
            //     //     }
            //     //     ]
            //     // }
            //     "type": "text",
            //     "text": { // the text object
            //         "body": "test"
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

                const requestOptions = {
                    method: 'POST',
                    headers: {
                      'Cache-Control': 'no-cache',
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'apikey': apiKey,
                    },
                    body: new URLSearchParams({
                      channel: 'whatsapp',
                      source: '918888063456',
                      destination: '918237610776',
                      'src.name': 'SFCGym',
                      template: '{"id":"52dfec70-15bc-4a57-a398-09724602f6dc","params":[]}',
                      message: '{"document":{"id":"872f1751-878b-40d9-bf8b-42ce075a81b8"},"type":"document"}',
                    }).toString(),
                  };
                  
                  fetch(apiUrl, requestOptions)
                    .then(response => {
                      if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                      }
                      
                      return response.json();
                    })
                    .then(data => {
                      setStatus("successful");  
                      console.log('Success:', data);
                      // Handle the response data as needed
                    })
                    .catch(error => {
                      console.error('Error:', error.message);
                      // Handle errors here
                    });

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
        <input type="text" 
            name="file" 
            id="file" 
            className="border rounded border-gray-800 px-2 w-12 text-center" 
            placeholder="+91" 
            onChange={handleCountry} 
            value={country}/>
        <span className="text-lg px-2 pr-4"> {Status} </span>
        
        <div className='' onChange={handleChange} >
            {
                !pdfSrc && !uploadData &&(
                    <Button label="Send" onClick={UploadFileDocument} className="bg-yellow-500 onclick hover:bg-yellow-400 px-3"/>
                )
            }
            { pdfSrc && !uploadData && (
              <p className=''>
                <Button label="send" className="bg-purple-600 hover:bg-purple-500 px-3"/>
              </p>
            )}

            {uploadData && (
              <Button label="Send" className="bg-green-500 hover:bg-green-400 px-3"/>
            )}
          </div> 
      </div>
      
    )
  }
  
  export default SendPdf