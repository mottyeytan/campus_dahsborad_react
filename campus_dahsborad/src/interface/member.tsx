export interface member {
    id: number
    name: string
    image: string
    role: string
    isActive: boolean
    tasks: tasks[]
    
}

export interface tasks {
    id: string
    task: string
    done: boolean
}