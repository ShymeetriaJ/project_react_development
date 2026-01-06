import type { Country } from "../types/Country";

interface CountryCardProps {
    country: Country;  
}

export const CountryCard = ({ country }: CountryCardProps) => {
    const handleClick = () => {
        console.log('Clicked country:', country.name.common);
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