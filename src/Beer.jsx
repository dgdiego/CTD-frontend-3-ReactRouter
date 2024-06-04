import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState({})

    const params = useParams()
    const navigate = useNavigate()

    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        //const endpoint = `https://api.punkapi.com/v2/beers/${params.id}`
        const endpoint = `https://api.sampleapis.com/beers/ale/${params.id}`
        const res = await fetch(endpoint)
        const data = await res.json()
        setBeer(data)
    }

    useEffect(()=>{
        getBeer()
    })
  
  
  return (
    <div>
        <h2>Cerveza numero... {params.id}</h2>
        <div className='card'>
            <img src={beer.image} alt="beer-detail" />
            <p>{beer.name}</p>
            <p>{beer.price}</p>
        </div>
        <button onClick={()=>navigate(-1)}>Go back</button>
    </div>

  )
}

export default Beer