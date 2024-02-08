import MyToggle from "../components/MyToggle"
import useData from "../hooks/useData"
import { PiChecksBold } from "react-icons/pi";
import { PiCheck } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { FormEvent,ChangeEvent } from 'react'
import { messageI } from "../interfaces/messageInterface";
const MESSAGE_STATUS={
  none:<span className="text-slate-600"><CiClock2 size={12}/></span>,
  sent:<span className="text-slate-500"><PiCheck size={16} /></span>,
  delivered:<span className="text-slate-500"><PiChecksBold size={18} /></span>,
  read:<span className="text-sky-600"><PiChecksBold size={16} /></span>,
  default:<span></span>
}
const Messages = () => {
  const {name,text,setText,setHourText,hourText,enabled,
    updateConversation,setMessageStatus,messageStatus} = useData()
    const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if([text,hourText].includes("")){
        return 
      }
      let valuemessage:JSX.Element |null  =null
      switch(messageStatus){
        case "none":
          valuemessage = MESSAGE_STATUS.none
          break
        case "sent":
          valuemessage=MESSAGE_STATUS.sent
          break
        case "delivered":
          valuemessage=MESSAGE_STATUS.delivered
          break
        case "read":
          valuemessage=MESSAGE_STATUS.read
          break
        default:
          valuemessage=MESSAGE_STATUS.default
          break
      }
      if(!valuemessage) return
      const objMessaje:messageI={
        id:crypto.randomUUID(),
        state:enabled,
        content:text,
        hour:hourText,
        messageOption:valuemessage
      }
      updateConversation(objMessaje)
    }
    const handleRadioChange = (e:ChangeEvent<HTMLInputElement>) => {
      setMessageStatus(e.target.value)
    }
  return (
    <>
      <div className="flex gap-2 items-center">
        <p>{name}</p>
        <MyToggle/>
        <p>You</p>
      </div>
      <form className="w-5/6 bg-slate-200 shadow-xl rounded-lg  gap-4 py-4 mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-col w-2/3 mx-auto">
          <label htmlFor="textConversation  ">Select what to insert</label>
          <textarea id="textConversation " className="px-2 h-40" onChange={e=>setText(e.target.value)} value={text}/>
        </div>
        <div className="flex flex-col w-2/3 mx-auto">
          <label htmlFor="hour">Hour</label>
          <input type="text" placeholder="10:40" className="pl-2" onChange={e=>setHourText(e.target.value)} value={hourText} />
        </div>
        <div className="w-2/3 mx-auto mt-2">
          <p>Message Status:</p>
          <div className="flex items-center gap-2"> 
            <input 
              type="radio" 
              id="none" 
              name="status" 
              value="none" 
              checked={messageStatus==="none"}
              onChange={handleRadioChange}
            />
            <label 
              htmlFor="none" 
              className="flex items-center 0 gap-2"
            >None <span className="text-slate-500"><CiClock2 /></span></label>
          </div>
          <div className="flex items-center gap-2"> 
            <input 
              type="radio" 
              id="sent" 
              name="status" 
              value="sent"
              checked={messageStatus==="sent"}
              onChange={handleRadioChange}
            />
            <label 
              htmlFor="sent"
              className="flex items-center 0 gap-2"
            >Sent <span className="text-slate-500"><PiCheck /></span></label>
          </div>
          <div className="flex items-center gap-2"> 
            <input 
              type="radio" 
              id="delivered" 
              name="status" 
              value="delivered"
              checked={messageStatus==="delivered"}
              onChange={handleRadioChange}
            />
            <label 
              htmlFor="delivered" 
              className="flex items-center 0 gap-2"
            >Delivered <span className="text-slate-500"><PiChecksBold size={18} /></span></label>
          </div>
          <div className="flex items-center gap-2"> 
            <input 
              type="radio" 
              id="read" 
              name="status" 
              value="read"
              checked={messageStatus==="read"}
              onChange={handleRadioChange}
            />
            <label 
              htmlFor="read flex items-center" 
              className="flex items-center 0 gap-2"
            >Read <span className="text-sky-600"><PiChecksBold size={18} /></span></label>
          </div>
        </div>
        <div className="w-2/3 mx-auto mt-2 ">
          <input 
            type="submit" 
            className=" w-full cursor-pointer hover:bg-[#37ad63] bg-[#25d366]  text-white" 
            value="Add to Conversation"
          />
        </div>
      </form>
    </>
  )
}

export default Messages