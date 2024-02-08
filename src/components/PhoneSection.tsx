import { IoWifi } from "react-icons/io5";
import { FaSignal } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMore } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaFaceGrin } from "react-icons/fa6";
import useData from "../hooks/useData";
import { FaCamera } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiWifiOff } from "react-icons/fi";
import { PiWifiLow } from "react-icons/pi";
import { PiWifiMediumBold } from "react-icons/pi";
import MessageCard from "./MessageCard";
import { BiNoSignal } from "react-icons/bi";
import { TbScreenshot } from "react-icons/tb";
import styles from '../cssmodules/scroll.module.css'
import html2canvas from 'html2canvas';


const URL_DEFAULT="https://firebasestorage.googleapis.com/v0/b/fake-wsp.appspot.com/o/iluminati-image-default.jpg?alt=media&token=d21d8388-b616-4dbe-80de-f9b14027a8f0"
const WIFI_OPTIONS ={
    none:<FiWifiOff size={14} />,
    md:<PiWifiMediumBold size={14}/>,
    lw:<PiWifiLow size={14}/>,
    full:<IoWifi size={16}/>
}
const CONNECTION_OPTION = {
    none:<BiNoSignal size={16}/>,
    "3G":<span className="flex gap-1 items-center"><FaSignal  size={16}/>3G</span>,
    "4G":<span className="flex gap-1 items-center"><FaSignal  size={16}/>4G</span>,
    "wf":<FaSignal  size={16}/>
}

const PhoneSection = () => {
    const {name,clock,message,urlImg,online,listText,
        wifiOption,connectionOption,changeRangeBattery,seeBattery,range} =useData()


        const takeScreenshot = () => {
            // Seleccionamos el elemento que queremos capturar
            const elementToCapture = document.getElementById('captureMe');
            if (elementToCapture) {
              html2canvas(elementToCapture).then((canvas) => {
                // Creamos un elemento <a> para descargar la imagen
                const link = document.createElement('a');
                link.download = 'screenshot.png';
                link.href = canvas.toDataURL();
                link.click();
              });
            }
        };
  return (
    <>
        <button 
            className="fixed p-2 bg-green-400 hover:bg-green-600 
            rounded-lg bottom-2 right-2 flex items-center gap-2"
            onClick={takeScreenshot}
        ><TbScreenshot />Screenshot</button>
        <section className="min-w-[370px] md:min-w-[400px] h-[600px] bg-white shadow-2xl rounded-lg flex flex-col " id="captureMe">
            
            <div className="flex justify-between items-center px-4 pt-1 bg-[#075e54]">
                <div className="text-white">
                    {clock} 
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-white text-[11px]">
                        {connectionOption?
                        CONNECTION_OPTION[connectionOption]:null  
                        }
                    </span>
                    {connectionOption==="wf"?
                        <span className="text-white">{wifiOption?WIFI_OPTIONS[wifiOption ] :<IoWifi size={18}/>}</span>:null
                    }
                    <div className="w-[22px] h-[12px]  border-2 border-slate-50 rounded-sm flex  items-center relative justify-center ">
                        {seeBattery&&
                            <span className="text-[8px] absolute top-0 left-0 bottom-0 right-0 z-30 flex justify-center items-center text-slate-50">
                                {range}
                            </span>
                        }
                        <span className={`bg-slate-500 h-[8px]  left-[0px]  mx-auto absolute ${Number(range) <=20?"bg-red-500":""}`} style={{ width: `${changeRangeBattery()}px` }}>
                        
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-2 py-3 bg-[#075e54] space-x-1">
                <span className="text-white"><IoArrowBackOutline size={20}/></span>
                <div className=" rounded-full size-11">
                    <img src={urlImg ? urlImg:URL_DEFAULT} alt="image profile fake" className="w-full h-full rounded-full"/>
                </div>
                <div className="grow">
                    <h1 className="text-md text-white ">
                        {name}
                    </h1>
                    <p className="text-sm text-white">{online}</p>
                </div>
                <div className="flex items-center space-x-5 ">
                    <span className="text-white"><FaVideo size={20}/></span>
                    <span className="text-white"><FaPhoneAlt size={15}/></span>
                    <span className="text-white"><AiOutlineMore size={20}/></span>
                </div>
            </div>
            <div className="bg-[#ece5dd] grow flex flex-col pb-2">
                <div className={`grow px-2 py-1 overflow-y-auto max-h-[456px] ${styles.chatContainer}`}>
                    {
                        listText.length ? 
                        listText.map(card=>(
                            <MessageCard key={card.id} card ={card}/>
                        ))    
                        : null
                    }
                </div>

                <div className="flex items-center gap-1 px-1">
                    <div className="grow ">
                        <div className="w-full rounded-2xl h-9 max-h-[80px] bg-white flex items-center px-2 space-x-2" >
                            <span className="text-slate-500"><FaFaceGrin /></span>
                            <p className={`pl-2  grow max-h-[80px] overflow-y-auto break-words 
                                max-w-[260px] ${styles.chatContainer}`}>{message}
                            </p>
                            <span className="-rotate-90 text-slate-500"><GoPaperclip /></span>
                            <span className="text-slate-500"><FaCamera /></span>
                        </div>
                    </div>
                    <div className="rounded-full p-3 bg-[#25d366] text-white">
                        <BiSolidMicrophone />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PhoneSection