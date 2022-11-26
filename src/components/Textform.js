import React,{useState} from 'react'

export default function Textform(props) {
  const handleTheClick=()=>{
    console.log("function was trigerred");
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{//this function means that the set value of the textbox can be changed
    console.log("on change");
    setText(event.target.value)
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClearClick=()=>{
    let newText="";
    setText(newText);
  }
  const handleCopyClick=()=>{
console.log('copied');
var text=document.getElementById("myBox");
text.select();
text.setSelectionRange(0,9999);
navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const[text,setText]=useState('enter text here');
  //setText("lololol");
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'light'}}></textarea>
 <button className="btn btn-primary my-3 mx-2" onClick={handleTheClick}>Convert to upper case</button>
 <button className="btn btn-primary my-3 mx-2"  onClick={handleLowClick}>Convert to lower case</button>
 <button className="btn btn-primary my-3 mx-2"  onClick={handleClearClick}>Clear text</button>
 <button className="btn btn-primary my-3 mx-2"  onClick={handleCopyClick}>Copy text</button>
 <button className="btn btn-primary my-3 mx-2"  onClick={handleExtraSpaces}>Remove extra spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>your text summary</h1>
  <p>{text.split (" ").length} words {text.length} characters</p>
  <p>{0.008*text.split(" ").length}Minutes read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"enter something to preview"}</p>
</div>
  </>  
  )
}
