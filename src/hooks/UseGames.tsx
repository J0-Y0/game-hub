import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface GameResponse {
  count: number;
  results: Game[];
}
const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState();
    const [loading,setLoading] = useState(false)
    useEffect(() => {
                  setLoading(true);

    const controller = new AbortController();
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
        .then((res) => {
            setGames(res.data.results); 
            setLoading(false)
        })
        .catch((e) => {

        if (e instanceof CanceledError) return;
          setError(e.message);
                                setLoading(false);

      });
    return () => controller.abort();
  }, []);
  return { games, error, setGames, setError, loading };
};

export default UseGames;
