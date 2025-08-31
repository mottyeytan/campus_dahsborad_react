
import './App.css'
import FilterBar from './componets/FilterBar'
import MemberCard from './componets/MemberCard'
import members from "./DATA/members.json"
import ContextProvider from './context/selcetedMember'
import {useContext, useState} from 'react'
import {selctedContext} from './context/selcetedMember'
import type { tasks } from './interface/member'
import Taskpanel from './componets/TaskPanel' 




function AppContent() {
  const { value, setValue } = useContext(selctedContext);
  console.log(value)

  const [selectedMember, setSelectedMember] = useState(false)
  
  function handleClick(tasks: tasks[]){
    setValue(tasks)
    setSelectedMember(true)
  }
  return (
    <div className='container'>
      <h1 className="title">Campus Club Dashboard</h1>

      <FilterBar/>

      {members.map(member => {
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


      <Taskpanel tasks={value} selectedMember={selectedMember}/> 

      <footer className='footer'>
        <p>© 2025 Campus Coding Club</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <ContextProvider>
      <AppContent />
    </ContextProvider>
  )
}

export default App
