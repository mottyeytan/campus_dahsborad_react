
import './App.css'
import FilterBar from './componets/FilterBar'
import MemberCard from './componets/MemberCard'
import profile1 from './assets/profile1.png'

function App() {

  return (
    <>
    <div className='container'>
          <h1 className= "title" >Campus Club Dashboard</h1>

          <FilterBar/>

          <MemberCard
           id={1}
           name='Glenda Garcia'
           image={profile1}
           role='CO-Organizer'
           isActive={true}
          />






















          <footer className='footer'>
            <p>© 2025 Campus Coding Club
            </p>
          </footer>
          
      </div>

    </>
  )
}

export default App
