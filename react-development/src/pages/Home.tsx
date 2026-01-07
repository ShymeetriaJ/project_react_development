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

    const filteredCountries = countries.filter(country => {

        const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = !selectedRegion || country.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    if (loading) {
        return (
            <>
                <Navbar />
                <main role="main" aria-live="polite" aria-busy="true">
                    <Spinner />
                </main>
            </>
        );
    }
    if (error) {
        return (
            <>
                <Navbar />
                <main role="main" aria-live="assertive">
                     <ErrorMessage message={error} />
                </main>
               
            </>
        );
    }

    return (
    <>  
    <Navbar />
    <div className='controls-container'>

        <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
        />

        <FilterDropdown
            selectedRegion={selectedRegion}
            onRegionChange={setSelectedRegion}
        />
    </div>

        <div className='countries-grid'>
            {filteredCountries.map(country => (
                <CountryCard
                key={country.name.common}
                country={country}
                />
            ))}
        </div>

    </>
);
};


