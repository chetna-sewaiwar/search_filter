import React, { useState } from 'react';

function App() {
  const [Data] = useState([
    "Chetna",'Meghana',"Nidhi",'Sulekha',"Pooja","Deghana"
  ]);

  const [search, setSearch] = useState('');

  const filter = Data.filter((data) =>
    data.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Filter Method</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
      />
        {filter.map((item, index) => (
          <h3 key={index}>
            {item}

          </h3>
        ))} 
    </div>
  );
}

export default App;