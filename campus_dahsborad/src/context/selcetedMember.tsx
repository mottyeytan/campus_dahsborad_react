import { createContext, useState, type ReactNode } from "react";
import type {tasks, member as TypeOfMember} from "../interface/member"

interface SelectedContextType {
    value: tasks[]
    setValue: (tasks: tasks[]) => void
}

export const selctedContext = createContext<SelectedContextType>({
    value: [],
    setValue: () => {}
})

interface ContextProviderProps {
    children: ReactNode
}



export default function ContextProvider({ children }: ContextProviderProps){
    const [selctedMember, setSelectedMember] = useState<tasks[]>([])

    return (
        <selctedContext.Provider value={
            { value: selctedMember,
            setValue: setSelectedMember }
        }>


        {children}

            </selctedContext.Provider>



    )

}