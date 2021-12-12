import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleclick = ()=> {
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to UpperCase","success" );

    }
  
        
    
    const handleclickempty = ()=> {
        let newText = (""); 
        setText(newText)
        props.showAlert("The textarea is empty now!","success" );

    }
    const handleOnChange = (event)=> {
        setText(event.target.value)

    }
    const [text,setText] =  useState('')
    return (
        <> 
        <div className='container' style= {{color: props.mode==='light'?'black':'white'}}>
            <h1> {props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange}  style= {{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='light'?'black':'white'}  }   id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleclick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleclickempty}>New Text Area</button>
        </div>
        <div className='container' style= {{color: props.mode==='light'?'black':'white'}}>
        <h1>Text Summary</h1>
        <p>{text.length} characters and {text.split(" ").length} words</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}
