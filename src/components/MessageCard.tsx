import { messageI } from "../interfaces/messageInterface"

const MessageCard = ({card}:{card:messageI}) => {
    const {state,content,hour,messageOption}=card
  return (
    <div className={` flex  ${state ? " justify-end":" justify-start"} my-2 `}>
        <div className={`px-2 py-1 rounded-md max-w-64 shadow-lg
        ${state ? "bg-[#dcf8c6]  ":" bg-[#f7f7f7]"} flex flex-wrap flex-col `}>
            <p className="max-w-fit break-words ">{content} </p>
            <div  className="text-[12px]  justify-end flex  items-center gap-0.5">
                <p className="ml-7 text-[10px]">{hour} </p>
                <div>
                    {messageOption}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageCard