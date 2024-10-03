import React,{useState} from 'react'

export default function TextForm( props) {
     const handelUpClick = () =>{
        console.log("uppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText)
         }

         const handelLoClick = () =>{
          console.log("uppercase was clicked" +text);
          let newText=text.toLowerCase();
          setText(newText)
         }
     const handelOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
        
     }
     const handelClClick=()=>{
      setText('');
     }
     const handelCopy=()=>{
      var text=document.querySelector('#mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
     }
     const handelExtraSpace=()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "))
     }
    const[text,setText]=useState('');
  return (<>
  <div className="container" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
    <div>

        <h1>{props.heading}</h1>
     
  <div className="mb-3">
 
    
    <textarea className='form-control' id='mybox' style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white',
      color:props.mode==='dark'?'white':'black'
    }} value={text} onChange={handelOnChange} rows='8'></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handelUpClick}>convert to uppercase</button> 
    <button className="btn btn-primary mx-2" onClick={handelLoClick}>convert to lower case</button> 
    <button className="btn btn-primary mx-2" onClick={handelClClick}>clear text </button> 
    <button className="btn btn-primary mx-2" onClick={handelCopy}>copy text </button> 
    <button className="btn btn-primary mx-2" onClick={handelExtraSpace}>remove extra space</button> 


  </div>
  <div className="container my-3">
    <h1>your text summery</h1>
    <p>{text.split(" ").length-1} word and {text.length} character</p>
    <p>{ 0.008 * (text.split(" ").length-1)} menuts read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview in above box"}</p>

  </div>
  </div>
  
  </>
   
  )
}
