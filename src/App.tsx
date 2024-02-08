import { BrowserRouter,Route,Routes } from "react-router-dom"
import Main from "./layouts/Main"
import PhoneSettings from "./pages/PhoneSettings"
import Connection from "./pages/Connection"
import Messages from "./pages/Messages"
import BatteryOptions from "./pages/BatteryOptions"
import { DataProvider } from "./context/DataProvider"
function App() {
  return (
    <BrowserRouter>
    <DataProvider>
      <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<PhoneSettings/>}/>
            <Route path="battery" element={<BatteryOptions/>}/>
            <Route path="connection" element={<Connection/>}/>
            <Route path="message" element={<Messages/>}/>
          </Route>
      </Routes>
    </DataProvider>
    </BrowserRouter>
  )
}

export default App
