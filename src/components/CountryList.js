import React from 'react';
import Country from './Country';
import ListItem from './ListItem';

const CountryList = ({countries, onCountryClick}) => {

    const countryItems = countries.map((country, index) => {
        return <ListItem country={country} key={index} onCountryClick={onCountryClick}/>
    })

    const allPopulation = countries.map(country => country.population)
    const totalPopulation = 0;
    const sumPopulation = allPopulation.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        totalPopulation
);



    return (
        <>
            <p>Total Population: {sumPopulation}</p>
            <ul>
                {countryItems}
            </ul>
        </>
    )
}

export default CountryList