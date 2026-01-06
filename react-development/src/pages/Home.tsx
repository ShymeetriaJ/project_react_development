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

        const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = !selectedRegion || country.region === selectedRegion;

        return matchesSearch && matchesRegion;
    });
// while loading
    if (loading) {
        return (
            <>
            <Navbar />
            <Spinner />
            </>
        );
    }
// loading error
    if (error) {
        return (
            <>
            <Navbar />
            <ErrorMessage message={error} />
            </>
        );
    }

    return (
    <>
    <Navbar />
    <div className='controls-container'>

        <SearchBar
            searchTerm='{searchTerm}'
            onSearchChange={setSearchTerm}
        />

        <FilterDropdown
            selectedRegion={selectedRegion}
            onRegionChange={setSelectedRegion}
        />
    </div>

        <div className='countries-grid'>
            {filterCountries.map(country => (
                <CountryCard
                key={country.name.common}
                country={country}
                />
            ))}
        </div>

    </>
);
};


