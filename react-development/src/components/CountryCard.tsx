import type { Country } from "../types/Country";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
    country: Country;  
}

export const CountryCard = ({ country }: CountryCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/country/${country.cca3}`);
    };

    return (
        <div onClick={handleClick}>
            <img 
                src={country.flags.png} 
                alt={`Flag of ${country.name.common}`} 
            />
            <h3>{country.name.common}</h3>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital?.[0] || 'N/A'}</p>
        </div>
    );
};