import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './App.css'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

function ConnexionForm() { 
    
    const useStyles = makeStyles({
      root: {
        Width: 1275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

 const email=useRef("")
 
 const [responseLogin, setResponseLogin]=useState(["",false,""])

 function connexionFuntion(e){
        axios.post('http://localhost:8000/user/login', {"email":email.current.value})
        .then(response=>{
            console.log(response.data.token)
            setResponseLogin([response.data.Requete.description,true,response.data.token])

        }).catch(e=>{
            alert("connexion echoué, vérifier l'email")
            console.log(e)
        })
 }
  return (
    <div className="App">
      <header className="App-header">
      {responseLogin[1]?    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Description
        </Typography>
        <Typography variant="h6" component="p">
          {responseLogin[0]}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
         copier ce token de l'input 
        </Typography>
         <input type="text" value={responseLogin[2]}/>
      </CardContent>
    </Card>:""}<br/><br/>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Required UserName
        </Typography>
        <Typography variant="h6" component="p">
        <input required className="rounded-input" label="Required String" defaultValue="UserName" ref={email} />
        </Typography>
        <Typography className={classes.title} color="textSecondary">
         Cliquer sur Valider pour se connecter
        </Typography>
        <button className="button" onClick={connexionFuntion}>Valider</button>
      </CardContent>
    </Card>
    </header>
    </div>
  );
}

export default ConnexionForm;



