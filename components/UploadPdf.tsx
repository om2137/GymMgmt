import html2canvas from "html2canvas"
import { SetStateAction, useState } from 'react';
import {jsPDF} from "jspdf"
import Button from "./Button";
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'

const UploadPdf = ({rootElementID, phone}:any) => {
    const cloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_URI;
    const [pdfSrc, setpdfSrc] = useState();
    const [Status, setStatus] = useState("not sent");
    const [uploadData, setUploadData] = useState();
    var pdfURL = "";

    function handleChange(e:any) {
        setpdfSrc(e.target.files[0]);
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
            formData.append('file', blob);
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
        
        });
        }
        catch(e){
            console.log("err:"+e);
        }

    }

    return (
      <div className="flex justify-center item-center align-middle">
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
              <div className="w-96 text-center">{pdfSrc}</div>
            )}
        </div> 
      </div>
      
    )
  }
  
  export default UploadPdf