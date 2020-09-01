//dit ook omschrijven naar Hooks
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {Link } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  let location = useLocation();
  const detailID = location.pathname.replace(/\\|\//g,'').slice(8);

  console.log("detailID " + detailID);
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

  if(!result){
    return (
      <div className="ui two column relaxed grid" style={{marginTop:"30px"}}>
        <div className="column">
          <h3>No result</h3>
          <p>Please make sure you enter a right drink id.</p>
          <Link to="/" className="ui button" style={{marginTop:"40px"}}>Back to overview</Link>
        </div>
      </div>
    );
  }else{
    const renderResults = result.map((result) => {
     return (
       <div className="ui two column relaxed grid" style={{marginTop:"30px"}} key={result.idDrink}>
        <div className="column">
        <h3 className="header">{result.strDrink}</h3>
          <div>
               <img src={result.strDrinkThumb} alt={result.strDrink} width="250"/>
           </div>
           <p style={{marginTop:"10px"}}>{result.strInstructions}</p>
          </div>
          <div className="column">
          <table className="ui basic right aligned table">
           <thead>
             <tr>
               <th className="left aligned">Ingredients</th>
               <th className="left aligned">Measurements</th>

            </tr>
          </thead>
          <tbody>
              { !!result.strIngredient1 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient1}`} >{result.strIngredient1} </Link></td>
                  { !!result.strMeasure1 &&
                    <td className="left aligned">{result.strMeasure1} </td>
                  }
                </tr>
              }
              { !!result.strIngredient2 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient2}`} >{result.strIngredient2}</Link></td>
                  { !!result.strMeasure2 &&
                    <td className="left aligned">{result.strMeasure2} </td>
                  }
                </tr>
              }
              { !!result.strIngredient3 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient3}`} >{result.strIngredient3}</Link></td>
                  { !!result.strMeasure3 &&
                    <td className="left aligned">{result.strMeasure3} </td>
                  }
                </tr>
              }
              { !!result.strIngredient4 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient4}`} >{result.strIngredient4}</Link></td>
                  { !!result.strMeasure4 &&
                    <td className="left aligned">{result.strMeasure4} </td>
                  }
                </tr>
              }
              { !!result.strIngredient5 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient5}`} >{result.strIngredient5}</Link></td>
                  { !!result.strMeasure5 &&
                    <td className="left aligned">{result.strMeasure5} </td>
                  }
                </tr>
              }
              { !!result.strIngredient6 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient6}`} >{result.strIngredient6}</Link></td>
                  { !!result.strMeasure6 &&
                    <td className="left aligned">{result.strMeasure6} </td>
                  }
                </tr>
              }
              { !!result.strIngredient7 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient7}`} >{result.strIngredient7}</Link></td>
                  { !!result.strMeasure7 &&
                    <td className="left aligned">{result.strMeasure7} </td>
                  }
                </tr>
              }
              { !!result.strIngredient8 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient8}`} >{result.strIngredient8}</Link></td>
                  { !!result.strMeasure8 &&
                    <td className="left aligned">{result.strMeasure8} </td>
                  }
                </tr>
              }
              { !!result.strIngredient9 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient9}`} >{result.strIngredient9}</Link></td>
                  { !!result.strMeasure9 &&
                    <td className="left aligned">{result.strMeasure9} </td>
                  }
                </tr>
              }
              { !!result.strIngredient10 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient10}`} >{result.strIngredient10}</Link></td>
                  { !!result.strMeasure10 &&
                    <td className="left aligned">{result.strMeasure10} </td>
                  }
                </tr>
              }
              { !!result.strIngredient11 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient11}`} >{result.strIngredient11}</Link></td>
                  { !!result.strMeasure11 &&
                    <td className="left aligned">{result.strMeasure11} </td>
                  }
                </tr>
              }
              { !!result.strIngredient12 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient12}`} >{result.strIngredient12}</Link></td>
                  { !!result.strMeasure12 &&
                    <td className="left aligned">{result.strMeasure12} </td>
                  }
                </tr>
              }
              { !!result.strIngredient13 &&
                <tr>
                  <td className="left aligned"><Link to={`../SearchByIngredient/${result.strIngredient13}`} >{result.strIngredient13}</Link></td>
                  { !!result.strMeasure13 &&
                    <td className="left aligned">{result.strMeasure13} </td>
                  }
                </tr>
              }
              { !!result.strIngredient14 &&
                <tr>
                  <td className="left aligned">{result.strIngredient14}</td>
                  { !!result.strMeasure14 &&
                    <td className="left aligned">{result.strMeasure14} </td>
                  }
                </tr>
              }
              { !!result.strIngredient15 &&
                <tr>
                  <td className="left aligned">{result.strIngredient15}</td>
                  { !!result.strMeasure15 &&
                    <td className="left aligned">{result.strMeasure15} </td>
                  }
                </tr>
              }
            </tbody>
          </table>
          </div>
      </div>
     );
   });

    return (
      <div style={{marginBottom:"20px"}}>
        {renderResults}
        <Link to="/" className="ui button" style={{marginTop:"20px"}}>Back to overview</Link>
      </div>
    );
  }
};

export default Detail;

//volgende verdiepingspagina is linken naar https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
