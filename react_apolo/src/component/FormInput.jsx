import { useState } from "react"
import { gql,useMutation } from "@apollo/client"
const FormInput=()=>{
    // const title=useState(null)
    // const description=useState(null)
    // const status=useState("pending")
    const [task,setTask]=useState({
        title:null,
        description:null,
        status:"pending"
    })
    const [addTask] = useMutation(gql`
    mutation AddTask($title: String!, $description: String!, $status: String!) {
        insert_task(objects: { title: $title, description: $description, status: $status }) {
    returning{
      id
    }
           
        }
    }
`);
    const handleChange=(event)=>{
        setTask((prev)=>(
            {...prev,[event.target.name]:event.target.value}
        ))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await addTask({ variables: task });
            setTask({
                title: null,
                description: null,
                status: "pending"
            });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };
    return(
        <div className="w-full">
           <form onSubmit={handleSubmit} className="flex flex-col w-1/2 justify-center p-2">
            <input className="px-2 py-3 border" type="text" name="title" placeholder="enter title" value={task.title} onChange={handleChange}/>
            <input className="px-2 py-3 border"  type="text" name="description" placeholder="enter description" value={task.description} onChange={handleChange} />
            <select className="px-2 py-3 border"  value={task.status} name="status" onChange={handleChange}>
                <option value="pending">pending</option>
                <option value="confirmed">confirmed</option>
                <option value="canceled">canceled</option>

            </select>
            <button type="submit">submit</button>
           </form>
        </div>)
    
}
export default FormInput