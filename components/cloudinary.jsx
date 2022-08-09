import { useState } from 'react';
import { useEffect } from "react";

 function Cloudi({theurl}) {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  
  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'gym-mgmt-assets');
    
    const data = await fetch('https://api.cloudinary.com/v1_1/dqpsoptzm/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());
    
    setImageSrc(data.secure_url);
    console.log(data.secure_url);
    setUploadData(data);
    theurl(data.secure_url);
  }
  
  return (
    <>
    <div className="">     
      {/* <main className="flex flex-col justify-center align-center text-center p-5"> */}
        {/* <h1 className="text-6xl p-5">
          Image Uploader
        </h1>

        <p className="text-2xl p-8">
          Upload your image to Cloudinary!
        </p> */}
        
        <form className="max-w-96 max-h-96 rounded p-4 text-md text-center" type="file" method="post" onChange={handleOnChange} onSubmit={handleOnSubmit} >
          
          <div className='flex mx-auto p-4 justify-center' >
            <img src={imageSrc} className="align-center max-w-20 max-h-20  " />
          </div>
          <p className='pb-4'>
              <input type="file" className='rounded' name="file" />
            </p>
          <div className='flex mx-auto p-4 justify-center'>
            {imageSrc && !uploadData && (
              <p className=''>
                <button className='bg-purple-600 p-2 hover:bg-purple-500 rounded text-white'>Upload Files</button>
              </p>
            )}

            {uploadData && (
              
              <code className='bg-green-500 rounded text-white p-2'>
                <pre>
                  {/* {JSON.stringify(uploadData, null, 2)} */}
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