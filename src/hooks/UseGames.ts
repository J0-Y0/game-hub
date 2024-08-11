
import UseData from "./UseData";
import { Genre } from "./UseGenres";
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

const UseGames = (selectedGenre: Genre | null) => {
  return UseData<Game>("games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);
};

export default UseGames;
