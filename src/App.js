import {useState} from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, HashRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';





import MainMint from './MainMint';
import NavBar from './NavBar';

import MintPage from './Components/MintPage';

import License from './Components/License';




function App() {
  const [accounts, setAccounts] = useState([]);
  
  return (
    
  
    <div className="overlay">
    <div className="App overflow-hidden "> 


    
      <BrowserRouter>
        

        <Routes> 
              <Route path="mint" element={<MintPage/>} >
                    <Route path="/mint" element={<MainMint accounts = {accounts} setAccounts = {setAccounts}/>}></Route>
              </Route>
      
        </Routes> 

        <Routes>
           

            <Route path="/" element={<NavBar />}/> 
            <Route  path="/shinnverse" element={<NavBar />}/>
             <Route  path="/" element={() => (<Navigate to='/shinnverse'/>)} />  
            

          {/* <Route path="/" element={<Navigate to="/shinnverse" />}/> */}
            
        
            
           
            <Route path="/mint" element={<MainMint accounts = {accounts} setAccounts = {setAccounts}/>}> </Route>
            
        
            
            <Route path="license" element={ <License/>} />

           
             
           
            
            {/* <Route path="mint">
              <MainMint accounts = {accounts} setAccounts = {setAccounts} />

            </Route> */}

      
        </Routes>
      </BrowserRouter>
      {/* <MainMint path="mint" accounts = {accounts} setAccounts = {setAccounts} /> */}

     
       
    
    </div>
    </div>

   

    
  );
}

export default App;



