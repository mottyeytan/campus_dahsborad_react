import { createContext, useState, type ReactNode } from "react";

interface SelectedActiveContextType {
    active: boolean
    setActive: (active: boolean) => void
}

export const selectedActiveContext = createContext<SelectedActiveContextType>({
    active: false,
    setActive: () => {}
})

export default function SelectedActiveProvider(props: {children: ReactNode}) {
    const [active, setActive] = useState(false)

    return (
        <selectedActiveContext.Provider value={{active, setActive}}>{props.children}</selectedActiveContext.Provider>
    )
}