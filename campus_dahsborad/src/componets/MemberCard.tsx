import { useContext, useState } from 'react'
import type {MouseEvent} from 'react'
import '../componets.css/MemberCard.css'
import type { tasks } from '../interface/member'



export default function MemberCard({id, name, image, role, isActive, onClick, tasks}: {id: number, name: string, image: string, role: string, isActive: boolean, onClick: (tasks: tasks[]) => void, tasks: tasks[]}){
    

    
    return (
            <div className= "member-card" onClick={() => onClick(tasks)}>
           <div className="member-card-image">
            <img src={image} alt={name} />
           </div>
           <div className="member-card-details">
            <div className="member-card-name">{name}</div>
            <div className="member-card-role">{role}</div>
           </div>

           <button className = "role-button"
           >
            Role
           </button>
           
           
        </div>
    )
}
    
