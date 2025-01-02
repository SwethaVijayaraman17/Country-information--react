import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CountryInformation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state: { img, name, major_language,
        major_religion, population, area, capital, dialing_code } } = location;

    const handleBack = () =>{
        navigate('/');
    }
    return (
        <>
            <div id='countryInformation'>
                <h1 id='selectedName'>{name}</h1>
                <div id='countryDiv'>
                    <img id='selectedImg' src={img} alt='' />
                    <div>
                        <p>Population: {population}</p>
                        <p>Area: {area}</p>
                        <p>Capital: {capital}</p>
                        <p>Major Language: {major_language}</p>
                        <p>Major Religion: {major_religion}</p>
                        <p>Dialing Code: {dialing_code}</p>

                    </div>
                </div>
            </div>
            <button id='backBtn' onClick={handleBack}>Back</button>
        </>
    )
}

export default CountryInformation;