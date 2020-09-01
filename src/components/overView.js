import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OverView = () => {
  const terms = ["Gin", "Vodka", "Whiskey"
];
  const [ term, setTerm ] = useState('Gin');
  const [ debouncedTerm, setDebouncedTerm ] = useState(term);
  const [ results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 10);

    return () =>{
      clearTimeout(timerId);
    };
  }, [term]);

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
          'i': debouncedTerm
        },
    });

    setResults(data.drinks);

    };
    search();
  }, [debouncedTerm]);

  const menu = <div className="row">
      <div className="ui top attached tabular menu">
        {terms.map((t) => (
          <div
            className={["item", term === t ? "active" : null].filter(Boolean).join(" ")} //filter boolean is om de andere waarden op 0 te zetten
            onClick={(e) => setTerm(t)}
            key={t}
          >
            {t}
          </div>
        ))}
      </div>
    </div>;

  if(!results){
    return (
      <div className="ui stackable four column grid" style={{marginTop:"30px"}}>
        {menu}
        No results to show
      </div>
    );
  }else{
   const renderResults = results.map((result, key) => {
      return (
        <div key={result.idDrink} className="column" style={{marginBottom:"20px"}}>
          <a href={`cocktail/${result.idDrink}`}>
            <div className="card">
              <img src={result.strDrinkThumb} width="200" alt={result.strDrink}/>
              <div className="header">{result.strDrink}</div>
            </div>
          </a>
        </div>
      );
    });

  return (
      <div className="ui stackable four column grid" style={{marginTop:"30px"}}>
        { menu }
        <div className="row">
          {  renderResults }
        </div>
      </div>
  );
};
}

export default OverView;

//https://rapidapi.com/theapiguy/api/the-cocktail-db?endpoint=apiendpoint_49b98879-938e-4479-b0da-718468fb87bc
//https://the-cocktail-db.p.rapidapi.com/list.php
