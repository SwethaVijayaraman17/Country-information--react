import React from "react";
import { CountryJson } from "./CountryJson";
import { useNavigate } from "react-router-dom";

const CountryList = () => {
    const navigate = useNavigate()
    const handleClick = (countryObj) => {
        navigate('/countryDescription', { state: countryObj })
    }
    return (
        <>
            <h1>Countries</h1>
            <div id='countryCard'>
                {CountryJson.map((country, idx) => (
                    <div id={`countryCard${idx + 1}`} onClick={() => handleClick(country)}>
                        <img id={`countryImg${idx + 1}`} className="countryImg" src={country.img} alt='' />
                        <h3 id={`countryName${idx + 1}`}>{country.name}</h3>
                    </div>
                ))}
            </div>
            </>
    )
}

export default CountryList;