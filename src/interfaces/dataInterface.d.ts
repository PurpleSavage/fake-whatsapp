import { messageI } from "./messageInterface";

export type Wifi ="none"|"md"|"lw"|"full"
export type ConnectionTypes = "none"|"3G"|"4G"|"wf"

export interface DataProviderContextProps{
    name:string,
    clock:string,
    online:string,
    message:string,
    text:string,
    enabled:boolean,
    hourText:string,
    messageStatus:string,
    listText:messageI[],
    connectionOption:ConnectionTypes |undefined,
    wifiOption:Wifi |undefined,
    range:string,
    urlImg:string,
    seeBattery:boolean
    setText:React.Dispatch<React.SetStateAction<string>>,
    setClock:React.Dispatch<React.SetStateAction<string>>,
    setName:React.Dispatch<React.SetStateAction<string>>,
    setOnline:React.Dispatch<React.SetStateAction<string>>,
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    setEnabled:React.Dispatch<React.SetStateAction<boolean>>,
    setHourText:React.Dispatch<React.SetStateAction<string>>,
    setMessageStatus:React.Dispatch<React.SetStateAction<string>>,
    setListText:React.Dispatch<React.SetStateAction<messageI[]>>,
    setConnectionOption:React.Dispatch<React.SetStateAction<ConnectionTypes|undefined>>,
    setWifiOption:React.Dispatch<React.SetStateAction<Wifi|undefined>>,
    setRange:React.Dispatch<React.SetStateAction<string>>,
    setUrlImg:React.Dispatch<React.SetStateAction<string>>,
    setSeebattery:React.Dispatch<React.SetStateAction<boolean>>,
    changeRangeBattery:()=>number,
    updateConversation:(msg:messageI)=>void
    
}
export interface DataProviderProps{
    children: ReactNode;
}