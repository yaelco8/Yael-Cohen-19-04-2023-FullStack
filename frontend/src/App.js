import React from 'react';
import routes from './routes'
import {Routes, Route} from 'react-router-dom'
import { Header } from './cmps/Header';




function App() {
  return (
    <div className="App">
<Header/>
   <Routes>
    {routes.map((route)=>{
      return <Route path={route.path} key={route.path} element={route.component}/>

    })}
   </Routes>
    </div>
  );
}

export default App;
