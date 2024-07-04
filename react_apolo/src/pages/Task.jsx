import { gql,useMutation,useQuery } from "@apollo/client"
// import { useState } from "react"
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
    // const [search,setSearch]=useState("")
    // const [searched,setSearched]=useState(data?data.task:[])
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
    // const handleSearch=(event)=>{
    //     setSearch(event.target.value)
    //     const searchterm=search.toLowerCase().trim()
    //     if(!searchterm){
    //         setSearched(data.task)

    //     }
    //     else{
    //         const see=data.task.filter((datas)=>datas.title.toLowerCase().includes(searchterm))
    //         console.log(see)
    //         setSearched(see)
    //     }

    // }

    // console.log(search)
  return (
    <div className="flex flex-col w-full px-10">
    {/* <div className="flex self-end">
        <input className="px-4 py-2 border" type="text" placeholder="search by title"  value={search} />
    </div> */}
        <table className="w-full border-collapse border mt-3  ">
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
