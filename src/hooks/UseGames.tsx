import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'
interface Game{
    id: number,
    name: string,
    released:string
    
}
interface GameResponse{
    count: number,
    results: Game[]
}
const UseGames = () => {


    const [games, setGames] = useState<Game[]>([])
    const [error,setError] = useState()
    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<GameResponse>("/games",{signal:controller.signal})
            .then(res => setGames(res.data.results) 
            )
            .catch(e => {
                if (e instanceof CanceledError)
                    return
                    setError(e.message)
            })   
        return ()=> controller.abort()

                     
    }, []); 

  return {games,error,setGames,setError}
}

export default UseGames
