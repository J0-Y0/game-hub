
import UseData from './UseData';

export interface Genre {
  id: number;
  name: string;
  games_count: number;
  image_background:string
}

const UseGenres = () => {

  return UseData < Genre>("genres");
  
}

export default UseGenres
