import html2canvas from "html2canvas"
import {jsPDF} from "jspdf"
import Button from "./Button";

const SavePdf = ({rootElementID, downloadFileName}:any) => {
    
    const downloadFileDocument =()=>{
        try{
            const input  = document.getElementById(rootElementID) as HTMLElement;
            html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("l", "pt", "a4");
            pdf.addImage(imgData, 'JPEG', 22, 22, 800, 550);
            pdf.save(`${downloadFileName}.pdf`);
        });
        }
        catch(e){
            console.log("err:"+e);
        }

    }
    return (
      <div>
        <Button label="save" onClick={downloadFileDocument} className="bg-red-500 hover:bg-red-400 px-3"/>       
      </div>
    )
  }
  
  export default SavePdf