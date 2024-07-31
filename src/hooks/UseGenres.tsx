
import UseData from './UseData';

interface Genre {
  id: number;
  name: string;
  games_count: number;
  image_background:string
}

const UseGenres = () => {

  return UseData < Genre>("genres");
  
}

export default UseGenres
