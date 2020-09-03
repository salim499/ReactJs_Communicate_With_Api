import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ModificationForm from './ModificationForm';
import axios from 'axios'
const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  table: {
    minWidth: 650,
  },
}));



function Home() {
  const token=useRef("")
  const [updates,setUpdates]=useState(false)
  const [idf,setIdf]=useState("")
  const [deleteReussi,setDeleteReussi]=useState("false")
  const [products, setProduct]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/product')
     .then(res=>{
       setProduct(res.data.Produits)  
          console.log(res.data.Produits)
     })
     .catch(err=>{
         console.log(err)
     })
   },[deleteReussi==="true"])

   function deleteFunction(e){
    axios.post(`http://localhost:8000/product/delete/${e.target.name}`,{"token":token.current.value})
    .then(response=>{
        setDeleteReussi("true")
        console.log(response)
    }).catch(e=>{
        alert("il faut insérer un token valide, connectez vous pour obtenir un token")
    })
    setDeleteReussi("false")
   }

   function updateFunction(e){
       setUpdates(true)
       setIdf(e.target.name)
   }

  const classes = useStyles();
  return (
    updates?<ModificationForm idf={idf}></ModificationForm>:
    <div className="App">
      <header className="App-header">
      <label>Insérer le token ici s'il vous plait</label><br/>
      <input className="rounded-input" required  defaultValue="token" ref={token} /><br/><br/>
         <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">type</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">rating</TableCell>
            <TableCell align="right">warranty_years</TableCell>
            <TableCell align="right">available</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.warranty_years}</TableCell>
              <TableCell align="right">{row.available}</TableCell>
              <TableCell align="right">
                  <button className="button" name={row._id} onClick={updateFunction}>Modifier</button>
                  <button className="button" name={row._id} onClick={deleteFunction}>Supprimer</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </header>
    </div>
  );
}

export default Home;



