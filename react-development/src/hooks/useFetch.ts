import { useState, useEffect } from 'react';
import type { Country } from '../types/Country';

const useFetch = (url: string) => {
    const [data, setData] = useState<Country[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
              
                if (!response.ok) {
                    throw new Error(`Fetch error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                setLoading(false);

            } catch (err) {
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