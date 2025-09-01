import { useState } from 'react'
import '../componets.css/FilterBar.css'
import type {MouseEvent } from 'react'
// import { view } from '../context/selcetedView'
import { useContext } from 'react'
import { selectedViewContext } from '../context/selcetedView'


export default function FilterBar(){
    const { setView} = useContext(selectedViewContext)
    const [isActive, setIsActive] = useState(false)
    const [search, setSearch] = useState('')


    function ToggleActive(){
        setIsActive(!isActive)

    }

    // function LayoutView(e: MouseEvent<HTMLButtonElement>){
    //     e.preventDefault()
    //     if(e.currentTarget.classList.contains('grid-view')){
    //         handleView(view.GRID)
    //         console.log('GRID')
    //     } else if(e.currentTarget.classList.contains('list-view')){
    //         handleView(view.LIST)
    //         console.log('LIST')
    //     }

    // }

    function SearchEvent(e: MouseEvent<HTMLInputElement>){
        e.preventDefault()
        setSearch(e.currentTarget.value)
        console.log(search)
    }


    return (
        <div className='filter-bar'>
            <input type='checkbox' id='toggle-button' onClick={ToggleActive} /> 
            <label htmlFor='toggle-button' className='input-label-toggle' >Show only active members</label>
            
            <div className="switch-layout">
            <button className= "grid-view"  onClick={() => setView('grid')} >GRID VIEW </button>
            <button className= "list-view" onClick={() => setView('list')}>LIST VIEW </button>

            </div>


            <div className= "search-bar">
                <input type='text' placeholder='Search for an Event'  />
            </div>

        </div>
    )
}