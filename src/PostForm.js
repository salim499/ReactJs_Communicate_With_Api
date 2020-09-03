import React, { useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import './App.css'

function PostForm() {
 const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      
 const classes = useStyles();
 
 const id=useRef("")
 const name=useRef("")
 const type=useRef("")
 const price=useRef("")
 const rating=useRef("")
 const warranty_years=useRef("")
 const available=useRef("")
 const token=useRef("")

 function postFuntion(e){

        axios.post('http://localhost:8000/product', {"id":id.current.value,"name":name.current.value,"type":type.current.value, "price":price.current.value, 
        "rating":rating.current.value, "warranty_years":warranty_years.current.value, 
        "available":available.current.value, "token":token.current.value})
        .then(response=>{
            console.log(response)
            alert("le produit est ajouté avec succés")
        }).catch(e=>{
            alert("ajout échoué, il faut inséré un token valide")
        })
 }
  return (
    <div className="App">
      <header className="App-header">
      <form className={classes.root} noValidate autoComplete="off">
      <div className="forms">
      <input className="rounded-input" required  label="Required Number" defaultValue="id" ref={id} /><br/>
      <input className="rounded-input" required  label="Required String" defaultValue="name" ref={name} /><br/>
        <input className="rounded-input" required  label="Required String" defaultValue="type" ref={type}/><br/>
        <input type="number" className="rounded-input" required  label="Required Number" defaultValue="price" ref={price} /><br/>
        <input className="rounded-input" required  label="Required String" defaultValue="rating" ref={rating}/><br/>
        <input className="rounded-input" required  label="Required String" defaultValue="warranty_years" ref={warranty_years} /><br/>
        <input className="rounded-input" required  label="Required String" defaultValue="available" ref={available} /><br/>
        <input className="rounded-input" required  label="Required String" defaultValue="token" ref={token} /><br/>
      </div>
    </form><br/>
    <button className="button" onClick={postFuntion}>envoyer</button>
    </header>
    </div>
  );
}

export default PostForm;



