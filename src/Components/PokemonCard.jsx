import React from 'react'

export default function PokemonCard({details}) {
  return (
    
        <li className="bg-white w-[250px] h-[275px] flex flex-col justify-start items-center gap-2 rounded-md shadow-lg p-4 transition-transform transform hover:scale-105" >
            
            <img className="h-20 w-32 " src={details.sprites.other.dream_world.front_default} alt={details.name} />
            <h2 className="text-xl capitalize">{details.name}</h2>
            <h3 className="bg-green-600 px-3 py-[4px] rounded-xl">
                {
                    details.types.map((currElem)=>(currElem.type.name)).join(",")}
            </h3>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <p className="text-sm"><b>Height:</b><span>{details.height}</span></p>
              <p className="text-sm"><b>weight:</b><span>{details.weight}</span></p>
              <p className="text-sm"><b>Speed:</b><span>{details.stats[5].base_stat}</span></p>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 tracking-tighter">
  <div className="flex flex-col items-center">
    <p className="text-sm"><b>Experience:</b></p>
    <span className="text-sm">{details.base_experience}</span>
  </div>

  <div className="flex flex-col items-center">
    <p className="text-sm"><b>Attack:</b></p>
    <span className="text-sm">{details.stats[1].base_stat}</span>
  </div>

  <div className="flex flex-col items-center">
    <p className="text-sm"><b>Speed:</b></p>
    <span className="text-sm">
      {details.abilities.map((currElem) => currElem.ability.name).slice(0, 1).join(",")}
    </span>
  </div>
</div>

        </li>

  )
}
