import React from "react";  
import FavouriteCountry from "./FavouriteCountry";

const FavoriteList = ({favCountries}) => {
    
    const favouriteNodes = favCountries.map(country => {
        return(
            <FavouriteCountry favCountry={country} key={country.id}/>
        )
    })
    
    return(

        <>
            {favouriteNodes}
        </>
    )
}

export default FavoriteList