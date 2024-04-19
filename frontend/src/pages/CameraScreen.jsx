import { useState} from "react";
import { useDropzone } from 'react-dropzone';

export default function CameraScreen(){
const [inputImage, setInputImage] = useState(null);
const [predictedValue, setPredictedValue] = useState('');
const PAT = 'e6ad4f1b243a4cb6a7530811da88978c';
const USER_ID = 'clarifai';       
const APP_ID = 'main';
const MODEL_ID = 'food-item-recognition';
const MODEL_VERSION_ID = '1d5fd481e0cf4826aa72ec3ff049e044';    

const onDrop = (acceptedFiles) => {
  const file = acceptedFiles[0];
  predictImage(file);
};

const { getRootProps, getInputProps } = useDropzone({ onDrop });

const predictImage = (imageFile) => {
  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.onload = () => {
    const base64String = reader.result.split(',')[1];
    send(base64String);
  };
};




const send = async(imageUrl)=>{
  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                  "base64": imageUrl
                }
            }
        }
    ]
});
const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
  },
  body: raw
};
  
      await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(result => setPredictedValue(result.outputs[0].data.concepts[0].name))
      .catch(error => console.log('error', error))

}



const handleImageChange = (e) => {
  const file = e.target.files[0];
  setInputImage(file);
};
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!inputImage) return;

  try {
    const imageUrl = URL.createObjectURL(inputImage);
    console.log(imageUrl)
    const response = await send(imageUrl);
    console.log(response)
  } catch (error) {
    console.error('Error predicting image:', error);
  }
};



  return(
    <>
      <div {...getRootProps()} className="bg-white w-1/2 h-1/2 rounded-xl">
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select an image</p>
      </div>
    </>
  )
}