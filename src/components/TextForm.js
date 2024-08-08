import React,{useState} from 'react'

export default function TextForm(props) {

const handleUpClick = () => {
 //console.log("Clicked" + text);//
  let newText = text.toLocaleUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase!",  "Success")
}

const handleLowClick = () => {
  //console.log("Clicked" + text);//
   let newText = text.toLocaleLowerCase();
   setText(newText);
   props.showAlert("Converted to Lowercase!",  "Success")
 }

 const handleClear = () => {
  //console.log("Clicked" + text);//
   let newText = " ";
   setText(newText);
   props.showAlert("Text Cleared!",  "Success")
 }

 const handleSpace = () => {
  //console.log("Clicked" + text);//
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Extra space handled!",  "Success")
 }

 const handleCopy = () => {
  var text =  document.getElementById ('mybox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text Copied!",  "Success")
 }

const handleOnChange = (event) => {
 // console.log("Changed")//
  setText(event.target.value);
}


  const [text,setText] = useState ("")
  return (
    
    <>
    <div className="container "style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleLowClick} >Convert to Lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
    <button className="btn btn-primary mx-3" onClick={handleClear} >Clear Text</button>
    <button className="btn btn-primary mx-3" onClick={handleSpace} >Remove Extra Spaces</button>
    </div>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Summary</h1>
      <p>{text.split(" ").length} Words And {text.length} characters </p>
      <p> {0.008 * text.split(" ").length } Minutes required to read  </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>    
    </div>
    </>
  )
}
  