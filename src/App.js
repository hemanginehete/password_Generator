import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase,setuppercase]=useState(false)
  let [lowercase,setlowercase]=useState(false)
  let [number,setnumber]=useState(false)
  let [Symbol,setsymbol]=useState(false) 
  let [passwordlen,setpasslen]=useState(10)
  let [fpass,setfpass]=useState('')

  let createpassword=()=>{
    let finalpass=''
   let charset=''
   if(uppercase || lowercase || number || Symbol){
    if(uppercase) charset+=UC;
    if(lowercase) charset+=LC;
    if(number) charset+=NC;
    if(Symbol) charset+=SC;
    for(let i=0;i<passwordlen;i++){
      finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
    }
    setfpass(finalpass)
   }
   else{
    //alert("atleast select one checkBox.....")
   }
  }

  let copypass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
    <div className='passwordBox'>
     <h2>Password Generator</h2>

     <div className='passwordBoxIn'>
      <input type='text' value={fpass} readOnly ></input>
      <button onClick={copypass}>Copy</button>
     </div>

    <div className='passwordLength'>
      <label>Password length</label>
      <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setpasslen(event.target.value)}></input>
    </div>

    <div className='passwordLength'>
      <label>Include UpperCase letter</label>
      <input type='checkBox' checked={uppercase} onClick={()=>setuppercase(!uppercase)} >
      </input>
    </div>

    <div className='passwordLength'>
      <label>Include LowerCase letter</label>
      <input type='checkBox' checked={lowercase} onClick={()=>setlowercase(!lowercase)} />
    </div>

    <div className='passwordLength'>
      <label>Include Number</label>
      <input type='checkBox' checked={number} onClick={()=>setnumber(!number)} />
    </div>

    <div className='passwordLength'>
      <label>Include Symbol</label>
      <input type='checkBox' checked={Symbol} onClick={()=>setsymbol(!Symbol)} />
    </div>
    <button className='btn' onClick={createpassword}>
      Generate Password
    </button>

    </div>
    </>
  );
}

export default App;
