import { useState,FormEvent } from "react"
import { uploadFiles } from "../firebase/config"
import useData from "../hooks/useData"
import Spinner from "../components/Spinner"

const PhoneSettings = () => {
  const {setName,setMessage,setClock,setOnline,clock,name,online,message,setUrlImg} =useData()
  const [file,setFile]=useState<File|null>(null)
  const[loader,setLoader]=useState(false)
  const handleSubmit=async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!file) return
    setLoader(true)
    try {
      const result =await uploadFiles(file)
      setUrlImg(result)
    } catch (error) {
      console.log(error)
    }finally{
      setLoader(false)
    }
  }
  return (
      <form className=" w-5/6 bg-slate-200 shadow-xl rounded-lg flex flex-col gap-4 py-4 relative" onSubmit={handleSubmit}>
        {loader && <Spinner/>}
        <div className="flex flex-col w-2/3 mx-auto">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              placeholder="Jhon Does" 
              className="h-10 px-3"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
        </div>
        <div className="flex flex-col w-2/3 mx-auto ">
            <label>Profile Picture</label>
            <label 
                htmlFor="imageProfile" 
                className="bg-green-600 hover:bg-green-700 transition-colors rounded-md px-3 w-[150px] 
                text-white font-semibold text-center cursor-pointer"
            >Upload Picture</label>
            <input 
                id="imageProfile" 
                type="file" 
                placeholder="Jhon Does" 
                className="hidden" 
                onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
            />
        </div>
        <div className="flex flex-col w-2/3 mx-auto">
            <label htmlFor="name">Phone Clock</label>
            <input 
              type="text" 
              placeholder="9:41 AM" 
              className="h-10 px-3"
              onChange={(e)=>setClock(e.target.value)}
              value={clock}
            />
        </div>
        <div className="flex flex-col w-2/3 mx-auto">
            <label htmlFor="name">Online</label>
            <input 
              type="text" 
              placeholder="Online" 
              className="h-10 px-3" 
              onChange={(e)=>setOnline(e.target.value)}
              value={online}
            />
        </div>
        <div className="flex flex-col w-2/3 mx-auto">
            <label htmlFor="name">Message</label>
            <input 
              type="text" 
              placeholder="message" 
              className="h-10 px-3"
              onChange={(e)=>setMessage(e.target.value)}
              value={message}
            />
        </div>
        <div className="flex items-center justify-center">
          <input 
            type="submit" 
            value="Add information" 
            className="bg-green-600 w-2/3 text-white
             hover:bg-green-700 cursor-pointer font-semibold" 
          />
        </div>
      </form>
   
  )
}

export default PhoneSettings