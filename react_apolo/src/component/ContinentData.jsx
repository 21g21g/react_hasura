 import { gql,useQuery } from "@apollo/client"

 const ContinentData = () => {
    const {data,loading,error}=useQuery(gql`
    query fetchCountries{
       countries{
           capital
           currency
         }
       }
    `)
    console.log(data?.countries.map((country)=>{
        return country.capital
    })||[])
    if(loading){
        return  <p>Loading...</p>
    }
    if(error){
        return <p>error:{error.message}</p>
    }
  return (
    <div>
      {data?.countries.map((country)=>{
        return(
            <div key={country.id}>
                <h1>{country.capital}</h1>
            </div>
        )
      })}
        
    </div>
  )
}

export default ContinentData
