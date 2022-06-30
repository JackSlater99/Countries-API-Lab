import React, {useState} from "react";
import CountryContainer from "../containers/CountryContainer";


const CountryForm = ({onCountrySubmit}) => {

const [countryName, setCountryName] = useState("")

const handleCountryChange = (evt) => {
  setCountryName(evt.target.value)
}

const handleCountryNameChange = (evt) => {
    evt.preventDefault();
    const countryNameToSubmit = countryName.trim();

    onCountrySubmit({
        countryName: countryNameToSubmit
    })

    setCountryName("")
}

  return (
    <form onSubmit = {handleCountryNameChange}>
      <input 
        type="text"
        placeholder="Country Name"
        value={countryName}
        onChange={handleCountryChange}
      />
      <input 
        type="submit"
        value="Post"
      />
    </form>
  )

}
export default CountryForm;