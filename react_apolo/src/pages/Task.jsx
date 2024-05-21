import { gql,useMutation,useQuery } from "@apollo/client"
 const Task = () => {
    const {data,loading,error}=useQuery(gql`
    query{
        task{
          id
          title
          description
          status
       }
      }
    
    `)
    const handleClick=(id)=>{
        console.log(id)
        deleteTodo({variables:{id}})
      

    }
    const [deleteTodo]=useMutation(gql`
    mutation deleteTaskByid($id:uuid!){
        delete_task_by_pk(id:$id){
           id
         }
     }
    `)
    if(loading) return <p>loading...</p>
    if(error) return <p>error {error.message}</p>
  return (
    <div>
        <table className="w-full border-collapse border">
            <thead>
                <tr>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
            {data?.task.map((task)=>{
            return(
                <tr key={task.id}>
                    <td className="px-4 py-2"> {task.title}</td>
                    <td className="px-4 py-2">{task.description}</td>
                    <td className="px-4 py-2">{task.status}</td>
                    <td className="px-4 py-2">
                        <button onClick={()=>handleClick(task.id)} className="text-orange-700">delete</button>
                    </td>
      

                </tr>
            )
        })}
                
            </tbody>
        </table>
        
    </div>
  )
}
export default Task
