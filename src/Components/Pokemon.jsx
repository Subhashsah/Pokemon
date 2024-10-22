 import React, { useEffect, useState } from 'react'
 import '../index.css' 
import PokemonCard from './PokemonCard'
 export default function Pokemon() {
 const[pokemon ,setpokemon]= useState([])
 const[loading,setloading]=useState(true)
 const[error,seterror]=useState("")
 const[search,setSearch]=useState("")

const api="https://pokeapi.co/api/v2/pokemon?limit=500"
const fetchPokemon=async()=>{
 try {
    const res=await fetch(api);
    const data=await res.json();
    const detailedPokemon = data.results.map(async(currElem)=>{
      const resp=await fetch(currElem.url)
      const fullData= await resp.json();
      return(fullData)  
})
 const detailedResponse= await Promise.all(detailedPokemon) 
 setpokemon(detailedResponse)
 setloading(false)
 
 } catch (err) {
  seterror(err)
  setloading(false)
    
 }
 
}
    useEffect(()=>{
     fetchPokemon();
    },[])
  const handleOnChange=(e)=>(setSearch(e.target.value))

  const searchPokemon=pokemon.filter((currPokemon)=>currPokemon.name.toLowerCase().includes(search.toLowerCase()))
  if(loading)
  {
    return(
      <div>
      <h1 className="text-2xl">loading...</h1>
    </div>
    )
 
  };
  if(error){
    return(
      <div>
        <h1>Error:{error.message}</h1>
      </div>
    )
  }
   return (
     <>
    
     <div className="flex justify-center flex-col items-center gap-2 header ">
     <h2 className="md:text-4xl text-2xl">Lets Catch Pokémon</h2>
     <input className=" border-b-2 border-gray-700 px-3 py-1 hover:outline-none" type="text" value={search} placeholder="Search" onChange={handleOnChange} />
    </div>
    <div className="container md:mx-auto w-[90%] ">
     <ul className="cards flex flex-wrap gap-4 mt-4  "> 
      {
        searchPokemon.map((currElem)=>{
          return<PokemonCard key={currElem.id} details={currElem}/>
        })
      }
     </ul>
    </div>
     </>
   )
 }
 