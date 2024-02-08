import { FiWifiOff } from "react-icons/fi";
import { PiWifiLow } from "react-icons/pi";
import { PiWifiMediumBold } from "react-icons/pi";
import { IoWifi } from "react-icons/io5";
import { useState } from "react";
import {ChangeEvent } from 'react'
import useData from "../hooks/useData";
import { Wifi } from "../interfaces/dataInterface";
import { ConnectionTypes } from "../interfaces/dataInterface";
const Connection = () => {
  
  const[modalWifiOptions,setModalWifiOptions]=useState(false)
  const {setWifiOption,setConnectionOption,connectionOption,wifiOption} =useData()
  const handleRadioChangeConnection = (e:ChangeEvent<HTMLInputElement>) => {
    const {value }=e.target
    if(value==="wf"){
      setModalWifiOptions(true)
      setConnectionOption(value)
    }else{
      setModalWifiOptions(false)
      setConnectionOption(value as ConnectionTypes)
    }
  }
  const handleRadioChangeWifi=(e:ChangeEvent<HTMLInputElement>)=>{
    const { value } = e.target;
    setWifiOption(value as Wifi)
  }
  return (
    <form className=" w-5/6 bg-slate-200 shadow-xl rounded-lg flex flex-col gap-4 py-4">
      <div className="mx-auto ">
        <h2>Connection options</h2>
        <label htmlFor="" className="flex items-center gap-2">
          <input 
            type="radio"  
            value="none"
            checked={connectionOption==="none"}
            onChange={handleRadioChangeConnection}
          />None
        </label>
        <label htmlFor="" className="flex items-center gap-2">
          <input 
            type="radio" 
            value="3G"
            checked={connectionOption==="3G"}
            onChange={handleRadioChangeConnection}
          />3G
        </label>
        <label htmlFor="" className="flex items-center gap-2">
          <input 
            type="radio" 
            value="4G"
            checked={connectionOption==="4G"}
            onChange={handleRadioChangeConnection}
          />4G
        </label>
        <label htmlFor="" className="flex items-center gap-2">
          <input 
            type="radio" 
            value="wf"
            checked={connectionOption==="wf"}
            onChange={handleRadioChangeConnection}
          />WiFi
        </label>
      </div>
      {modalWifiOptions && 
        <>
          <div className="mx-auto ">
            <h2>WiFi and signal options</h2>
            <label htmlFor="" className="flex items-center gap-2">
              <input 
                type="radio" 
                value="none"
                checked={wifiOption==="none"}
                onChange={handleRadioChangeWifi}
              />None <FiWifiOff size={18} />
            </label>
            <label htmlFor="" className="flex items-center gap-2">
              <input 
                type="radio" 
                value="md"
                checked={wifiOption==="md"}
                onChange={handleRadioChangeWifi}
              />Medium <PiWifiMediumBold size={18}/>
            </label>
            <label htmlFor="" className="flex items-center gap-2">
              <input 
                type="radio"
                value="lw"
                checked={wifiOption==="lw"}
                onChange={handleRadioChangeWifi} 
                />Low <PiWifiLow size={18}/>
            </label>
            <label htmlFor="" className="flex items-center gap-2">
              <input 
                type="radio"
                value="full"
                checked={wifiOption==="full"}
                onChange={handleRadioChangeWifi} 
              />WiFi<IoWifi size={18}/>
            </label>
          </div>
        </>
      }
      
    </form>
  )
}

export default Connection