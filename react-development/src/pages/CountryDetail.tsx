import { useParams, useNavigate } from 'react-router-dom';
import { useCountryContext } from '../context/CountryContext';
import { Navbar } from '../components/Navbar';
import { Spinner } from '../components/Spinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { useEffect } from 'react';

export const CountryDetail = () => {
   
    const { code } = useParams<{ code: string }>();
    const navigate = useNavigate()
    
    const { countries, loading, error } = useCountryContext();
    
    const country = countries.find(c => c.cca3 === code);
  
    useEffect(() => {
        if (country) {
            document.title = `${country.name.common} - Where in the world?`;
        }
        return () => {
            document.title = 'Where in the world?';
        };
    }, [country]);

    if (loading) {
        return (
            <>
                <Navbar />
                <main role='main' aria-live='polite' aria-busy='true'>
                    <Spinner />
                </main>
                
            </>
        );
    }
    if (error) {
        return (
            <>
                <Navbar />
                <main role='main' aria-live='assertive'>
                    <ErrorMessage message={error} />
                </main>
                
            </>
        );
    }
    
    if (!country) {
        return (
            <>
                <Navbar />
                <main role='main' aria-live='assertive'>
                    <ErrorMessage message="Country not found" />
                </main>
                
            </>
        );
    }
    const currencies = Object.values(country.currencies || {})
        .map(curr => curr.name)
        .join(', ');

    const languages = Object.values(country.languages || {}).join(', ');

    const nativeNameObj = country.name.nativeName;
    const nativeName = nativeNameObj 
    ? Object.values(nativeNameObj)[0]?.common 
    : country.name.common;


    const handleBorderClick = (borderCode: string) => {
        navigate(`/country/${borderCode}`);
    };
    
    return (
        <>
            <Navbar />
            
            <div className="country-detail-container">
                <button onClick={() => navigate('/')}>
                    Back
                </button>
                <div className='detail-content'>
                    <img 
                        src={country.flags.png} 
                        alt={`Flag of ${country.name.common}`} 
                        className='detail-flag'
                    />
                    <div className='detail-info'>
                        <h1>{country.name.common}</h1>
                        
                        <div className='info-section'>
                            <p><strong>Native Name: </strong>{nativeName}</p>
                            <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
                            <p><strong>Region: </strong>{country.region}</p> 
                            {country.subregion && (
                                <p><strong>Sub Region:</strong> {country.subregion}</p>
                                )}
                            <p><strong>Capital: </strong>{country.capital?.[0] || 'N/A'}</p>
                        </div>
                        <div className='info-section'>
                            {country.tld && country.tld.length > 0 && (
                                <p><strong>Top Level Domain: </strong>{country.tld.join(', ')}</p>
                            )}
                            <p><strong>Currencies: </strong>{currencies || 'N/A'}</p>
                            <p><strong>Languages: </strong>{languages || 'N/A'}</p>
                        </div>

                        {country.borders && country.borders.length > 0 && (
                            <div className='border-countries'>
                                <strong>Border Countries:</strong>
                                <div className='border-buttons'>
                                    {country.borders.map(borderCode => (
                                        <button
                                            key={borderCode}
                                            onClick={() => handleBorderClick(borderCode)}
                                            className='border-button'>{borderCode}
                                        </button> ))}
                                </div>
                         </div>)}
                    </div>
                </div>
            </div>
        </>
   );
};