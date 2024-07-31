import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
 
interface FetchResponse<T>{
  id:number,
  count: number,
  results: T[],
}

const UseData = <T>(endpoint:string) => {
  
   const [data, setData] = useState<T[]>([]);
   const [error, setError] = useState();
   const [loading, setLoading] = useState(false);
   useEffect(() => {
     setLoading(true);

     const controller = new AbortController();
     apiClient
       .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
       .then((res) => { 
         setData(res.data.results);
         setLoading(false);
       })
       .catch((e) => {
         if (e instanceof CanceledError) return;
         setError(e.message);
         setLoading(false);
       });
     return () => controller.abort();
   }, []);
   return { data, error, setData, setError, loading };
}

export default UseData
