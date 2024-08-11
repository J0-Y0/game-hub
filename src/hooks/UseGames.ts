
import UseData from "./UseData";
import { Genre } from "./UseGenres";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null
  ordering:string | null
}

const UseGames = (gameQuery: GameQuery) => {
  return UseData<Game>("games", {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.ordering
    }
  }, [gameQuery]);
};

export default UseGames;
