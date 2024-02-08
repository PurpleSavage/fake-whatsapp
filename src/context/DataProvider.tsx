import { createContext, useState } from "react";
import { Wifi, DataProviderContextProps,DataProviderProps, ConnectionTypes } from "../interfaces/dataInterface";
import { messageI } from "../interfaces/messageInterface";


const DataContext = createContext<DataProviderContextProps|null>(null)
const DataProvider:React.FC<DataProviderProps>=({children})=>{
    const [listText,setListText]=useState<messageI[]>([])
    const [name,setName]=useState("Jhon Does")
    const [clock,setClock]=useState("1:40 PM")
    const [online,setOnline]=useState("online")
    const [message,setMessage]=useState("message")
    const[text,setText]=useState("")
    const [hourText,setHourText]=useState("")
    const [enabled, setEnabled]=useState(false)
    const[messageStatus,setMessageStatus]=useState("")
    const [connectionOption,setConnectionOption]=useState< ConnectionTypes>()
    const [wifiOption,setWifiOption]=useState< Wifi>()
    const [range, setRange] = useState("100");
    const [seeBattery,setSeebattery]=useState(false)
    const[ urlImg,setUrlImg]=useState("")

    const updateConversation =(msg:messageI)=>{
        setListText([...listText,msg])
    }
    const changeRangeBattery = () => {
        const value = Math.floor((18 * Number(range)) / 100);
        return value ; 
      };
    return(
        <DataContext.Provider
            value={{
                name,
                clock,
                online,
                message,
                text,
                enabled,
                hourText,
                messageStatus,
                listText,
                connectionOption,
                wifiOption,
                range,
                seeBattery,
                urlImg,
                setName,
                setClock,
                setOnline,
                setMessage,
                setText,
                setEnabled,
                setHourText,
                setMessageStatus,
                updateConversation,
                setConnectionOption,
                setWifiOption,
                setListText,
                setRange,
                setSeebattery,
                changeRangeBattery,
                setUrlImg
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
export {
    DataProvider
}
export default DataContext