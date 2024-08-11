
import UseData from './UseData';

export interface Platform {
    id: number;
    name: string;
    platforms: [];
}

const usePlatform = () => {

    return UseData<Platform>("/platforms/lists/parents");

}

export default usePlatform
