import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("")
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text is conver into upper case", 'success')
    }
    const handleLwClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text is conver into lower case", 'success')
    }
    const handleClearClick = () => {
        setText('');
    }
    
    const handleRemoveSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove the extra space from your text", 'success')
    }
    
    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text is copied to your clipbord", 'success')
    }

    const handleOnChage = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChage}  style={{backgroundColor: props.mode === 'dark'? 'gray' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
            <button onClick={handleLwClick} className="btn btn-primary mx-1">Convert to LowerCase</button>
            <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
            <button onClick={handleCopyClick} className="btn btn-primary mx-1">Copy Text</button>
            <button onClick={handleRemoveSpaceClick} className="btn btn-primary mx-1">Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>You text summary</h1>
            <p>{text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters are in your text.</p>
            <p>{0.008 * text.split(" ").length} minutes need for read this text</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter the text to preview here"}</p>
        </div>
    </>
  );
}
