
import { useState } from "react"
import type { tasks } from "../interface/member"
import '../componets.css/TaskPanel.css'

interface TaskpanelProps {
    tasks: tasks[]
    selectedMember: boolean
}

export default function Taskpanel({tasks, selectedMember}: TaskpanelProps){
    const [completedTasks, setCompletedTasks] = useState<string[]>([])

    const toggleTask = (taskId: string) => {
        setCompletedTasks(prev => 
            prev.includes(taskId) 
                ? prev.filter(id => id !== taskId)
                : [...prev, taskId]
        )
    }

    return(
        <div className="taskpanel">
            <h1>Tasks</h1>

            {!selectedMember ? <p>select a member to see their tasks</p> : tasks.length > 0 ? (
                <ul className="tasks-list">
                    {tasks.map((task: tasks) => (

                        <li key={task.id} className="task-item">
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={completedTasks.includes(task.id)}
                                    onChange={() => toggleTask(task.id)}
                                />
                                <span className={completedTasks.includes(task.id) ? 'completed' : ''}>
                                    {task.task}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>no tasks found</p>
            )}
        </div>
    )
}
