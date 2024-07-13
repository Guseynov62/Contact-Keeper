
import { useState } from 'react';
import './App.css';
import { data } from './json';

function App() {
  const [search , setSearch]=useState('')
  
  return ( 
    <div className="App">
      <h1>Contact Keeper</h1>
      <form>
        <input placeholder='Search contact' id='search' onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        {data.filter((item)=>{
          return search.toLocaleLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)
        }).map((item) => (

          <tbody>
            <tr key={item.id}>
              <th>{item.first_name}</th>
              <th>{item.last_name}</th>
              <th>{item.email}</th>
              <th>{item.phone}</th>
            </tr>
          </tbody>
        ))}

      </table>
    </div>
  );
}

export default App;
