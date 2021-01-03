import React, { useEffect, useRef, useState } from 'react'
import Config from './config';
import './App.css'
import * as firebase from 'firebase'

function App() {   
    useEffect(()=>{
    // Initialize Firebase
    let database=firebase.database()
    let temperature1=database.ref('temperature1')
    let temperature2=database.ref('temperature2')
    let temperature3=database.ref('temperature3')
   /* let radiateur1=database.ref('radiateur1')
    let radiateur2=database.ref('radiateur2')
    let radiateur3=database.ref('radiateur3')  */
    setInterval(function(){
      temperature1.set(Math.floor(Math.random() * Math.floor(50)),
      (err)=>{
        if(err){
          console.log(err)
        }else{
          console.log(err)
        }
      })
      }, 
      Math.floor(Math.random() * Math.floor(10))*1000);
      setInterval(function(){
        temperature2.set(Math.floor(Math.random() * Math.floor(50)),
        (err)=>{
          if(err){
            console.log(err)
          }else{
            console.log(err)
          }
        })
        }, 
        Math.floor(Math.random() * Math.floor(10))*1000);
        setInterval(function(){
          temperature3.set(Math.floor(Math.random() * Math.floor(50)),
          (err)=>{
            if(err){
              console.log(err)
            }else{
              console.log(err)
            }
          })
          },
      Math.floor(Math.random() * Math.floor(10))*1000);
    },[])
 
  return (
    <div className="App">
      <header className="App-header">
  
    </header>
    </div>
  );
}

export default App;



