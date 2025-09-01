import { useContext, useState } from 'react'
import type {MouseEvent} from 'react'
import '../componets.css/MemberCard.css'
import type { tasks } from '../interface/member'
import { alertContext } from '../context/alert'




export default function MemberCard({id, name, image, role, isActive, onClick, tasks}: {id: number, name: string, image: string, role: string, isActive: boolean, onClick: (tasks: tasks[]) => void, tasks: tasks[]}){
    
    const {setAlert } = useContext(alertContext)
    
    return (
            <div className={`member-card ${!isActive ? 'inactive' : ''}`} onClick={ () => !isActive ? setAlert(true) : (setAlert(false), onClick(tasks)) }>
           <div className="member-card-image">
            <img src={image} alt={name} />
           </div>
           <div className="member-card-details">
            <div className="member-card-name">{name}</div>
            <div className="member-card-role">{role}</div>
            <div className="member-card-isActive">{isActive ? 'Active' : 'Inactive'}</div>
           </div>

           <button className = "role-button"
           >
            Role
           </button>
           
           
        </div>
    )
}
    
