import React from 'react';
import CountryContainer from '../containers/CountryContainer';

const Country= ({selectedCountry}) => {
    if (selectedCountry === null) {
        return null;
    }
    return (
        <>
            <img src={selectedCountry.flags.png} width="500" height="600"/>
            <h2>{selectedCountry.name.common}</h2>
            <p>Region: {selectedCountry.region}</p>
            <p>Population: {selectedCountry.population}</p>
            <p>Capital City: {selectedCountry.capital}</p>
            <p>Timezone: {selectedCountry.timezones}</p>
        </> 
    )
}

export default Country