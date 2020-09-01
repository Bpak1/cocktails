//search gebruiken, maar deze wel even op een apparte pagina plaatsen,
// of een andere geschikt interface ideetje verzinnen
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SearchByIngredient = () => {

  const [ searchTerm, setSearchTerm] = useState('Gin');
  const [ debouncedSearchTerm, setDebouncedSearchTerm ] = useState(searchTerm);
  const [ results, setResults] = useState([]);
  let { term } = useParams();

  if(term==''){
    let useSearchTerm = 'Lime';
  }else{
    let useSearchTerm = searchTerm;
  }

  console.log("Search " + term);
  //searchTerm hier of op term of op de default gin zetten, kijken of dit kan met useState
  //wellicht overschijrven met setState of een andere hook

  useEffect(() =>{
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(term, searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term, searchTerm]);



  useEffect(() => {
    const search = async () => {
      const { data } = await axios({
        'method':'GET',
        'url':'https://the-cocktail-db.p.rapidapi.com/filter.php',
        'headers':{
          'content-type':'application/octet-stream',
          'x-rapidapi-host':'the-cocktail-db.p.rapidapi.com',
          'x-rapidapi-key':'49adf3a5ccmsh5d525b0005370d3p1b460bjsn7b0add17579e',
          'useQueryString':true
        },'params':{
          'i': debouncedSearchTerm
        },
    });

    setResults(data.drinks);

    };
    search();
  }, [debouncedSearchTerm]);

  let renderResults;

  if(results){
      renderResults =
        results.map((result, key) => {
           return (
             <div key={result.idDrink} className="item" style={{marginBottom:"20px"}}>
               <img src={result.strDrinkThumb} width="200" alt={result.strDrink} className="ui avatar image"/>
               <div className="content">
                  <a href={`../cocktail/${result.idDrink}`}  className="header">
                    {result.strDrink}
                   </a>
                </div>
                <div className="description">
                  {result.strInstructions}
                </div>
             </div>
           );
          });
      }

  return (
    <div>

      <div className="ui list" style={{marginTop:"30px"}}>
      <h3>Cocktails with <i>{debouncedSearchTerm}</i></h3>

        {renderResults }
      </div>
    </div>
  );
}

export default SearchByIngredient;
