import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Menu = () => {
    const {pathname}=useLocation()
    
  return (
    <nav className="mb-5">
        <ul className="flex gap-3">
            <li><Link 
                    className={`px-2 py-1 hover:text-white hover:bg-[#075e54] 
                    rounded-xl transition-colors ${pathname === "/"? "bg-[#075e54] text-white":"bg-slate-300 "}`} to="/"
                >Phone</Link>
            </li>
            <li>
                <Link
                    to="battery" 
                    className={`px-2 py-1 hover:text-white hover:bg-[#075e54] 
                    rounded-xl  transition-colors" to="battery 
                    ${pathname === "/battery"? "bg-[#075e54] text-white":"bg-slate-300 "}`}
                >battery</Link>
                </li>
            <li>
                <Link 
                    className={`px-2 py-1 hover:text-white hover:bg-[#075e54] rounded-xl 
                    transition-colors 
                    ${pathname === "/connection"? "bg-[#075e54] text-white":"bg-slate-300"}`} 
                    to="connection"
                >connection</Link>
            </li>
            <li>
                <Link 
                className={`px-2 py-1 hover:text-white hover:bg-[#075e54] rounded-xl 
                 transition-colors  ${pathname === "/message"? "bg-[#075e54] text-white":"bg-slate-300"}`}
                to="message"
                >message</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu