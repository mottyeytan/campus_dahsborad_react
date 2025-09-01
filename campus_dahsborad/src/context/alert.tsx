import { createContext, useState, type ReactNode } from "react";

interface AlertContextType {
    alert: boolean
    setAlert: (alert: boolean) => void
}

export const alertContext = createContext<AlertContextType>({
    alert: false,
    setAlert: () => {}
})

export default function AlertContextProvider({ children }: { children: ReactNode }){
    const [alert, setAlert] = useState(false)

    return (
        <alertContext.Provider value={{ alert, setAlert }}>{children}</alertContext.Provider>
    )
}