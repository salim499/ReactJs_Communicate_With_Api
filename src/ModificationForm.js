import React, { useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

function ModificationForm(props) {
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

 function modificationFuntion(e){
        console.log(props.idf)
        axios.post(`http://localhost:8000/product/patch/${props.idf}`, {"id":id.current.value,"name":name.current.value,"type":type.current.value, "price":price.current.value, 
        "rating":rating.current.value, "warranty_years":warranty_years.current.value, 
        "available":available.current.value, "token":token.current.value})
        .then(response=>{
            alert("modification faite avec succés")
            console.log(response)
        }).catch(es=>{
            alert("modification échoué")
            console.log(es)
        })
 }
  return (
    <div className="App">
      <header className="App-header">
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <input required className="rounded-input" label="Required Number" defaultValue="id" ref={id} /><br/>
        <input required className="rounded-input" label="Required String" defaultValue="name" ref={name} /><br/>
        <input required className="rounded-input" label="Required String" defaultValue="type" ref={type}/><br/>
        <input required className="rounded-input" label="Required Number" defaultValue="price" ref={price} /><br/>
        <input required className="rounded-input" label="Required String" defaultValue="rating" ref={rating}/><br/>
        <input required className="rounded-input" label="Required String" defaultValue="warranty_years" ref={warranty_years} /><br/>
        <input required className="rounded-input" label="Required String" defaultValue="available" ref={available} /><br/>
        <input required className="rounded-input" label="Required String" defaultValue="token" ref={token} /><br/>
      </div>
    </form>
    <button className="button" onClick={modificationFuntion}>envoyer</button>
    </header>
    </div>
  );
}

export default ModificationForm;



