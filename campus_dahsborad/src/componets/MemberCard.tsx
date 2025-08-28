import { useState } from 'react'
import type {MouseEvent} from 'react'
import '../componets.css/MemberCard.css'

interface MemberCardProps {
    id: number
    name: string
    image: string
    role: string
    isActive: boolean
}

export default function MemberCard({id, name, image, role, isActive}: MemberCardProps){
    return (
        <div className='member-card'>
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
    
