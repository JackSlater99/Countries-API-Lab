import React, {useState, useEffect} from 'react'; 
import CountryList from '../components/CountryList'; 
import Country from '../components/Country'; 
import CountryForm from '../components/CountryForm'; 
import './CountryContainer.css' 
import FavoriteList from '../components/FavouriteList'; 

const CountryContainer = () => { 
    const [countries, setCountries] = useState([]) 
    const [selectedCountry, setSelectedCountry] = useState(null) 
    const [favCountries, setFavCountries] = useState([]) 
    
    useEffect(() => { 
        getCountries(); 
    }, []) 
    
    const getCountries = (() => { 
        fetch('https://restcountries.com/v3.1/all') 
        .then(res => res.json()) 
        .then(countries => setCountries(countries)) 
    }) 

    const onCountryClick = function(country){
        setSelectedCountry(country)
    }
    
    const addCountry = function(submittedCountry){ 
        submittedCountry.id = Date.now();
        const updatedCountries = [...favCountries, submittedCountry] 
        setFavCountries(updatedCountries) 
    }
    
    return ( 
        <div className="main-container"> 
            <h2>Favourite Countries</h2>
            <FavoriteList favCountries={favCountries}/> 
            <h3>Add favorite Country.</h3> 
            <CountryForm onCountrySubmit={(favCountry) => addCountry(favCountry)}/> 
            <CountryList countries = {countries} onCountryClick={onCountryClick}/> 
            <Country selectedCountry={selectedCountry}/> 
        </div> 
        
        ) 
    } 
    
    export default CountryContainer

