
import { createContext, useEffect, useState } from "react";
import { myAxios } from "../Api/MyAxios";


export const ApiContext = createContext()

export const ApiProvider = ({children}) => {
    const [receptLista, setReceptLista] = useState([])
    
    const getAdat = async (vegpont, callback) => {
        try {
            const response = await myAxios.get(vegpont)
            setReceptLista(response.data)
            callback([...response.data])
        } catch(err){
            console.log("Hiba történt az adatok lekérésekor")
        } finally {

        }
    }

    const postAdat = async (vegpont, adat) => {
        try {
            const response = await myAxios.post(vegpont, adat)
            console.log(response)

        } catch(err){
            console.log("Hiba történt az adatok lekérésekor")
        } finally {

        }
    }




    

    useEffect(() => {
        getAdat("http://localhost:8000/api/receptek", setReceptLista)
    }, [])
    
    return (
        <ApiContext.Provider value={{receptLista, getAdat}}>
            {children}
        </ApiContext.Provider>
    )

}