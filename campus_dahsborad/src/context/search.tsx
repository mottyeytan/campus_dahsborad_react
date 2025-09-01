import { createContext, useState, type ReactNode } from "react";

export interface SearchContextType {
    search: string
    setSearch: (value: string) => void
}

export const searchContext = createContext<SearchContextType>({
    search: "",
    setSearch: () => {}
})

export default function SearchContextProvider({ children }: { children: ReactNode }){
    const [search, setSearch] = useState("")

    return (
        <searchContext.Provider value={{ search, setSearch: setSearch }}>{children}</searchContext.Provider>
    )
}