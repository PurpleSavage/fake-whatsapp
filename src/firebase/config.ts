// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGIN_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export async function uploadFiles (file:any){
    const storageRef=ref(storage,crypto.randomUUID())
    await uploadBytes(storageRef,file)
    const url =await getDownloadURL(storageRef)
    return url
    
}