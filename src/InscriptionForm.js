import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import './App.css'
function InscriptionForm() {
 const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      
 const classes = useStyles();
 
 const email=useRef("")
 const password=useRef("")

 const [responseSignup, setResponseSignup]=useState(["",false])

 function inscriptionFuntion(e){
        axios.post('http://localhost:8000/user/signup', {"email":email.current.value,"password":password.current.value})
        .then(response=>{
            console.log(response.data.Requete.description)
            setResponseSignup([response.data.Requete.description,true])
        }).catch(e=>{
            console.log(e)
        })
 }
  return (
    <div className="App">
      <header className="App-header">
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <input required className="rounded-input" label="Required String" defaultValue="UserName" ref={email} /><br/>
        <input required className="rounded-input" label="Required String" defaultValue="password" ref={password} /><br/>
      </div>
    </form><br/>
    <button className="button" onClick={inscriptionFuntion}>Valider</button>
    </header>
    {responseSignup[1]?alert(responseSignup[0]):null}
    </div>
  );
}

export default InscriptionForm;



