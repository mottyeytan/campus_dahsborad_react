import { createContext, useState, type ReactNode } from "react";


interface SelectedViewContextType {
    view: 'grid' | 'list'
    setView: (view: 'grid' | 'list') => void
}



export const selectedViewContext = createContext<SelectedViewContextType>({
    view: 'grid',
    setView: () => {}
})


export default function SelectedViewProvider(props: {children: ReactNode}) {
    const [view, setView] = useState<string>('grid')

    return (
        <selectedViewContext.Provider value={{
            view: view as 'grid' | 'list', 
            setView: (view: 'grid' | 'list') => setView(view)
        }}>
            {props.children}
        </selectedViewContext.Provider>
    )
}
