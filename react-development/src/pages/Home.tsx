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
            <main id="main-content" role="main">
                <section
                    className='controls-container'
                    aria-label='search and filter controls'
                >

                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                    />

                    <FilterDropdown
                        selectedRegion={selectedRegion}
                        onRegionChange={setSelectedRegion}
                    />
                </section>
    
                <section
                    className='countries-grid'
                    aria-label='Countries list'
                    role='list'
                >
                    {filteredCountries.length === 0 ? (
                        <div role='status' aria-live="polite">
                            <p>No countries found</p>
                        </div>
                    ) : (

                        filteredCountries.map(country => (
                            <div key={country.name.common} role="listitem">
                                <CountryCard country={country} />
                            </div>
                
                        ))
                    )}
                </section> 
        
                <div
                    role='status'
                    aria-live='polite'
                    aria-atomic="true"
                    className='sr-only'
                >
                    Showing {filteredCountries.length} of {countries.length} countries
                </div>
            </main>
       </>
    );
};


