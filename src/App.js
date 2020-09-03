import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PostForm from './PostForm'
import Home from './Home'
import InscriptionForm from './InscriptionForm'
import ConnexionForm from './ConnexionForm'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  return (
    <Router>
    <div className="App">
      <header className="App-header">
         <Route path="/" exact component={Home}></Route>
         <Route path="/AjouterProduit" exact component={PostForm}></Route>
         <Route path="/Inscription" exact component={InscriptionForm}></Route>
         <Route path="/Connexion" exact component={ConnexionForm}></Route>
         <div className={classes.root}>
           <div className="footer">
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button><Link to="/">Home</Link></Button>
        <Button><Link to="/Inscription">Inscription</Link></Button>
        <Button><Link to="/Connexion">Connexion</Link></Button>
        <Button><Link to="/AjouterProduit">Ajout Produit</Link></Button>
      </ButtonGroup>
      </div>
      </div>
    </header>
    </div>
    </Router>
  );
}

export default App;



