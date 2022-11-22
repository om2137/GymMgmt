import { useState } from 'react';
import Button from './Button'

 function Cloudi({theurl}) {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const cloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_URI;

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */
  function handleOnChange(changeEvent) {
    try{
      const reader = new FileReader();

      reader.onload = function(onLoadEvent) {
        setImageSrc(onLoadEvent.target.result);
        setUploadData(undefined);
      }

      reader.readAsDataURL(changeEvent.target.files[0]);
    }catch(err){
      console.log(err);
    }
  }  

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    //below is the input
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'gym-mgmt-assets');
    // formData.append('upload_preset', 'invoice');
    const data = await fetch( cloudinary, {
      method: 'POST',
      body: formData
    }).then(r => r.json());
    
    setImageSrc(data.secure_url);
    setUploadData(data);
    theurl(data.secure_url);
  }
  
  return (
    <>
    <div className="">     
        <div></div>
        <form className="max-w-96 max-h-96  rounded p-4 text-md text-center" type="file" method="post" onChange={handleOnChange} onSubmit={handleOnSubmit} >
          <p className='pb-4 '>
              
              <label htmlFor='formid'  className="w-full bg-yellow-500 hover:bg-yellow-500 px-3 text-white uppercase py-2 rounded font-normal text-sm ">
                choose file
                <input type="file" id='formid' className='hidden w-32 sm:w-full rounded' name="file" />
              </label>
              
            </p>
          
          <div className='flex mx-auto p-4 justify-center' >
            <img src={imageSrc} className="align-center max-w-20 max-h-20 rounded " />
          </div>
          
          <div className='flex mx-auto p-4 justify-center '>
            {imageSrc && !uploadData && (
              <p className=''>
                <Button label="Upload" className="bg-purple-600 hover:bg-purple-500 px-3"/>
              </p>
            )}

            {uploadData && (
              
              <code className='bg-green-500 rounded text-white p-2'>
                <pre>
                  Uploaded
                </pre>
              </code>
            )}
          </div>
          
        </form>
      {/* </main> */}
    </div>
    </>
  )
}
export default Cloudi; 