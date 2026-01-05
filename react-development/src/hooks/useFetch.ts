import { useState, useEffect } from 'react';
import type { Country } from '../types/Country';

const useFetch = (url: string) => {
    const [data, setData] = useState<Country[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                console.log('Fetching data from:', response);
              
                if (!response.ok) {
                    throw new Error(`Fetch error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('Data:', result);

                setData(result);
                setLoading(false);

            } catch (err) {
                console.log('fetch failed:', err);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('unknown error');
                }
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;