
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

const UseGames = (selectedGenre: Genre | null,selectedPlatform:Platform|null) => {
  return UseData<Game>("games", {
    params: {
      genres: selectedGenre?.id,
      platforms:selectedPlatform?.id
    }
  }, [selectedGenre?.id, selectedPlatform?.id]);
};

export default UseGames;
