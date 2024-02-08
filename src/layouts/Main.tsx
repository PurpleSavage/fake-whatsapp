import PhoneSection from "../components/PhoneSection"
import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"
const Main = () => {
  return (
    <div 
        className="min-h-screen  flex items-center flex-col md:flex-row "
    >
        <aside className="w-full md:w-1/3  flex justify-center flex-col items-center">
            <Menu/>
            <Outlet/>
        </aside>
        <div className=" w-2/3 flex justify-center items-center py-4">
          <PhoneSection/>
        </div>
    </div>
  )
}

export default Main