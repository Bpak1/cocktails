//search gebruiken, maar deze wel even op een apparte pagina plaatsen,
// of een andere geschikt interface ideetje verzinnen
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const SearchBar = () => {
  const [ searchTerm, setSearchTerm] = useState('Gin');
  const [ debouncedSearchTerm, setDebouncedSearchTerm ] = useState(searchTerm);
  const [ results, setResults] = useState([]);

  let location = useLocation();
  const searchID = location.pathname.split('/');

  console.log("Search " + searchID);

  useEffect(() =>{
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

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
                  <a href={`cocktail/${result.idDrink}`}  className="header">
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
      <div>
        <div className="column ui search right floated" style={{ marginRight:"160px" }}>
          <div >
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search by Ingredient"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="ui list" style={{marginTop:"30px"}}>
        {renderResults }
      </div>
    </div>
  );
}

export default SearchBar;
