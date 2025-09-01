import '../componets.css/FilterBar.css'
import { useContext, type ChangeEvent } from 'react'
import { selectedViewContext } from '../context/selcetedView'
import { selectedActiveContext } from '../context/selctedActive'
import { searchContext, type SearchContextType } from '../context/search'


export default function FilterBar(){
    const { setView} = useContext(selectedViewContext)
    const { active, setActive} = useContext(selectedActiveContext)
    const { search, setSearch} = useContext(searchContext)

    function handleSearch(e: ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value)
    }

    return (
        <div className='filter-bar'>
            <input type='checkbox' id='toggle-button' onClick={() => setActive(!active)} checked={active} /> 
            <label htmlFor='toggle-button' className='input-label-toggle' >Show only active members</label>
            
            <div className="switch-layout">
            <button className= "grid-view"  onClick={() => setView('grid')} >GRID VIEW </button>
            <button className= "list-view" onClick={() => setView('list')}>LIST VIEW </button>

            </div>


            <div className= "search-bar">
                <input type='text' placeholder='Search for an Event' value={search} onChange={handleSearch} />
            </div>

        </div>
    )
}