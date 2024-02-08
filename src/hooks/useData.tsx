import { useContext } from "react";
import DataContext from "../context/DataProvider";

const useData = () => {
    const context =useContext(DataContext)
    if(context === undefined || context ===null){
        throw new Error ("useThemeContext muse be used within a ThemeContextProvider")
    }
    return context
}

export default useData