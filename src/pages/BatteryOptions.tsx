import {ChangeEvent } from 'react'
import useData from "../hooks/useData";
const BatteryOptions = () => {
  const{range, setRange,seeBattery,setSeebattery}=useData()
  const handleChangeBatteryOptions= (e:ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    if (value === "sb") {
      setSeebattery(true); 
      return
    }
    if(value==="hb"){
      setSeebattery(false)
      return
    }
  }
  return (
    <>
      <label htmlFor="percent">Battery percent</label>
      <div className="flex gap-2">
        <span>0</span>
        <input 
          type="range" 
          id="percent" 
          name="percent" 
          min="0" 
          max="100"
          value={range}
          onChange={e => setRange(e.target.value)}
        />
        <span>{range}%</span>
      </div>
      <div>
        <div className="space-x-3 flex items-ceenter">
          <label htmlFor="hiddenBattery">Don't show percentage</label>
          <input 
            type="radio" 
            value="hb" 
            name="option" 
            id="hiddenBattery"
            checked={seeBattery===false}
            onChange={handleChangeBatteryOptions}
          />
        </div>
        <div className="space-x-3 flex items-center">
          <label htmlFor="seeBattery">Show percentage</label>
          <input 
            type="radio" 
            value="sb" 
            name="option" 
            id="hiddenBattery"
            checked={seeBattery===true}
            onChange={handleChangeBatteryOptions}
          />
        </div>
      </div>
    </>
  );
}
export default BatteryOptions;
