import { useCountryContext } from '../context/CountryContext';
import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { FilterDropdown } from '../components/FilterDropdown';
import { CountryCard } from '../components/CountryCard';
import { Spinner } from '../components/Spinner';
import { ErrorMessage } from '../components/ErrorMessage';


export const Home = () => {
    const {
        countries,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        selectedRegion,
        setSelectedRegion
    } = useCountryContext();

    const filterCountries = countries.filter(country => {

        const matchesSearch = country.name.commom.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = !selectedRegion || country.region === selectedRegion;

        return matchesSearch && matchesRegion;
    });

    return (
    <>
    </>
);
}


