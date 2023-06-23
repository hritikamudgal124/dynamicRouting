import React from 'react';
import { Link, Routes, Route, } from 'react-router-dom';
import UserDetails from './User';
import nextPage from './nextPage';
import './App.css';

function App() {
  const users = [1, 2, 3, 4];

  return (
  
      <div className="">
        <div className="mx-20 flex gap-5 my-24">
          {users.map((user) => {
            return (
              <Link to={`/users/${user}`}>user{user} </Link>
            );
          })}
        </div>
     
        <Routes>
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/users/:userId/nextPage/${location.pathname}?${searchParams.toString()}" element={<nextPage />} />
        </Routes>
   
        
      </div>
     
  );
}

export default App;
