import { Country } from "../types/Country";
import { CountryProvider } from "../context/CountryContext";
import {BASE_URL, ENDPOINTS} from "../utils/api";
import useFetch from "../hooks/useFetch";
import { Children } from "react";

interface CountryCardProps {
    name: string,
    population: number,
    Region: string,
    Capital: string,
    flag: {
        png: string,
        svg: string,
    };
    
}
export const CountryCard = ({ country }: CountryCardProps) => {
    const url = `${BASE_URL}${ENDPOINTS.ALL}`;

    const { data, loading, error } = useFetch(url);

    const value = {
        countries: data || [],
        loading: loading,
        error: error,
    };


    return (
        <div onClick={handleClick}>
            {/}
        </div>
    );
}