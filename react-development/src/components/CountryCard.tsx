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
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <h3>{country.name.common}</h3>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital?.[0] || 'N/A'}</p>
        </div>
    );
};