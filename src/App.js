import {useState, useEffect} from 'react';
import { useGlobalState } from './store';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, HashRouter} from "react-router-dom";




import Menu from './Menu';
import MainMint from './Components/MainMint';
import MintPage from './Components/MintPage';
import NavBar from './NavBar';
import License from './Components/License';
import MintLoc from './Components/MintLoc';





function App() {
  
  // const [accounts, setAccounts] = useState([]);
  // const [nfts] = useGlobalState('nfts');
  
  return (
    
  
    <div className="overlay">
      <div className="App  "> 


      
        <BrowserRouter>
          

          {/* <Routes> 
                <Route path="mint" element={<MintPage/>} >
                      <Route path="/mint" element={<MainMint nfts= {nfts} accounts = {accounts} setAccounts = {setAccounts}/>}></Route>
                </Route>
        
          </Routes>  */}

          <Routes>
            
            
              {/* MENU */}

              <Route path="/" element={ <Menu/> } />
              {/* <Route  path="/menu" element={<Menu />}/>
              <Route  path="/" element={() => (<Navigate to='/menu'/>)} />  
 */}



              {/* NAVBAR  */}

              {/* <Route path="/" element={<NavBar />}/>  */}
              <Route  path="/shinnverse" element={<NavBar />}/>
              {/* <Route  path="/" element={() => (<Navigate to='/shinnverse'/>)} />   */}
              


            {/* <Route path="/" element={<Navigate to="/shinnverse" />}/> */}
              
              
              <Route path="/mint" element={ <MintLoc  />} />
            
              
              <Route path="license" element={ <License/>} />

            
              
            
              
              {/* <Route path="mint">
                <MainMint accounts = {accounts} setAccounts = {setAccounts} />

              </Route> */}

        
          </Routes>
        </BrowserRouter>
   

      
        
      
      </div>
    </div>

   

    
  );
}

export default App;



