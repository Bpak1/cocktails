//dit ook omschrijven naar Hooks
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {Link } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  let location = useLocation();
  const detailID =  location.pathname.replace(/\\|\//g,'');
  const [ result, setResult] = useState([]);

  useEffect(() => {
    const detail = async () => {
      const { data } = await axios({
        'method':'GET',
        'url':'https://the-cocktail-db.p.rapidapi.com/lookup.php',
        'headers':{
          'content-type':'application/octet-stream',
          'x-rapidapi-host':'the-cocktail-db.p.rapidapi.com',
          'x-rapidapi-key':'49adf3a5ccmsh5d525b0005370d3p1b460bjsn7b0add17579e',
          'useQueryString':true
        },'params':{
          'i': detailID
        },
    });

    setResult(data.drinks);

    };
    detail();
  }, [detailID]);

  const renderResults = result.map((result) => {
   return (
     <div className="ui two column relaxed grid" style={{marginTop:"30px"}} key={result.idDrink}>
      <div className="column">
      <h3 className="header">{result.strDrink}</h3>
        <div  >
             <img src={result.strDrinkThumb} alt={result.strDrink} width="250"/>
         </div>
         <p style={{marginTop:"10px"}}>{result.strInstructions}</p>
        </div>
        <div className="column">
        <table className="ui basic right aligned table">
         <thead>
           <tr>
             <th className="left aligned">Ingredients</th>
          </tr>
        </thead>
        <tbody>
          <tr>
             <td className="left aligned">{result.strIngredient1}</td>
         </tr>
            <tr>
              <td className="left aligned">{result.strIngredient2}</td>
            </tr>
            <tr>
              <td className="left aligned">{result.strIngredient3}</td>

            </tr>
            <tr>
              <td className="left aligned">{result.strIngredient4}</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
   );
 });

  return (
    <div>
      {renderResults}
      <Link to="/" className="ui button" style={{marginTop:"20px"}}>Back to overview</Link>
    </div>
  );

};


export default Detail;


//volgende verdiepingspagina is linken naar https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
