import React, {useEffect, useState} from 'react';

const terms = ["Gin", "Vodka", "Whiskey", "Tequila", "Scotch"];
const [ term, setTerm ] = useState('Gin');

export const Menu = <div className="row">
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
