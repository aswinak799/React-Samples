import { useEffect, useState } from "react";
import { fetchUserPlaces } from "../http";

export function useFetch(fetchFn) {
    const [fetchedData, setFetchedData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setFetchedData(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        isFetching,
        fetchedData,
        setFetchedData,
        error
      }
}