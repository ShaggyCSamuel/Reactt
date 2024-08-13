import React,{useState} from 'react'

export default function TextForm(props) {

const handleUpClick = () => {
 //console.log("Clicked" + text);//
  let newText = text.toLocaleUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase!","success")
}

const handleLowClick = () => {
  //console.log("Clicked" + text);//
   let newText = text.toLocaleLowerCase();
   setText(newText);
   props.showAlert("Converted to Lowercase!","info")
 }

 const handleClear = () => {
  //console.log("Clicked" + text);//
   let newText = " ";
   setText(newText);
   props.showAlert("Text Cleared!","warning")
 }

 const handleSpace = () => {
  //console.log("Clicked" + text);//
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Extra space handled!","dark")
 }

 const handleCopy = () => {
  // var text =  document.getElementById ('mybox');
  // text.select();
  navigator.clipboard.writeText(text);
  props.showAlert("Text Copied!","danger")
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
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(3,62,62)':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleLowClick} >Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy} >Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClear} >Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleSpace} >Remove Extra Spaces</button>
    </div>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} characters </p>
      <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes required to read  </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview here"}</p>    
    </div>
    </>
  )
}
  