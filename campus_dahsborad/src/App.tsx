
import './App.css'
import FilterBar from './componets/FilterBar'
import MemberCard from './componets/MemberCard'
import members from "./DATA/members.json"
import ContextProvider from './context/selcetedMember'
import {useContext, useState} from 'react'
import {selctedContext} from './context/selcetedMember'
import type { tasks } from './interface/member'
import Taskpanel from './componets/TaskPanel' 
import SelectedViewProvider, { selectedViewContext } from './context/selcetedView'
import SelectedActiveProvider, { selectedActiveContext } from './context/selctedActive'
import SearchContextProvider, { searchContext } from './context/search'
import type { SearchContextType } from './context/search'

function AppContent() {
  const { value, setValue } = useContext(selctedContext);
  const { view } = useContext(selectedViewContext);
  const { active } = useContext(selectedActiveContext);
  const { search } = useContext(searchContext);

  const [selectedMember, setSelectedMember] = useState(false)
  
  function handleClick(tasks: tasks[]){
    setValue(tasks)
    setSelectedMember(true)
  }


  return (
    <div className='container'>
      <h1 className="title">Campus Club Dashboard</h1>

      <FilterBar />
      
    <div className={view === 'grid' ? 'grid' : 'list'} id='members-container'>
      
      {active && search === "" ? members.filter(member => member.isActive === active).map(member => {
        return(
          
          <MemberCard 
            key={member.id}
            id={member.id}
            name={member.name}
            image={member.image}
            role={member.role}
            isActive={member.isActive}
            onClick={handleClick}
            tasks={member.tasks}
          />
          
        )
      }) : members.filter(member => member.name.toLowerCase().includes(search.toLowerCase())).map(member => {
        return(
          <MemberCard 
            key={member.id}
            id={member.id}
            name={member.name}
            image={member.image}
            role={member.role}
            isActive={member.isActive}
            onClick={handleClick}
            tasks={member.tasks}
          />
        )
      })}
      </div>


      <Taskpanel tasks={value} selectedMember={selectedMember}/> 

      <footer className='footer'>
        <p>© 2025 Campus Coding Club</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <SearchContextProvider>
      <SelectedViewProvider>
        <SelectedActiveProvider>
        <ContextProvider>
            <AppContent />
          </ContextProvider>
        </SelectedActiveProvider>
      </SelectedViewProvider>
    </SearchContextProvider>
  )
}

export default App
