import './App.css';
import React, {useState} from 'react';
import useLocalstorage from './hooks/useLocalstorage';

const App = () => {
  const code = useLocalstorage('### heading' , '<h3 id="hello">heading</h3>');
  const [hide, hidePreview] = useState(true)

  const openMD = () => {
    hidePreview(true)
  }

  const openPreview = () => {
    hidePreview(false)
  }

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">MarkDown</button>
          <button onClick={openPreview}>Preview</button>
        </div>
        {
        hide ? 
          <div>
            <textarea value={code.code} />
          </div> : 
          <div>
            <textarea value={code.compiled} />
          </div>
        }
      </div>
    </>
  )
}


export default App;
