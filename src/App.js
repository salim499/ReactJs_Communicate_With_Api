import React, { useEffect, useRef, useState } from 'react'
import Config from './config';
import './App.css'
import * as firebase from 'firebase'

function App() {   
    useEffect(()=>{
   
    setInterval(function(){
       firebase.firestore().collection("Chambre1")
       .add({date:new Date(), temperature:20})
      },10000) 
    },[])
 
  return (
    <div className="App">
      <header className="App-header">
  
    </header>
    </div>
  );
}

export default App;



