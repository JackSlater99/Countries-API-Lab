import React from "react";  

const FavouriteCountry = ({favCountry}) => {
    
    return(
        <div>
            <p>{favCountry.countryName}</p>
        </div>
    )
}

export default FavouriteCountry