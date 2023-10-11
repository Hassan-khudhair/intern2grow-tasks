import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import React, {useState} from 'react';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied');
  }
  
  let shareUrl = "google.com";




  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
      <div className="share">
        <h3>share <FontAwesomeIcon icon={faShare}/></h3>
        <div className="icons">
          <FacebookShareButton 
                url={shareUrl}
                quote={quote.content}
                hashtag={`#${quote.author.split(' ')[0]}_${quote.author.split(' ')[1]}`}
          >
            <FacebookIcon size={40} />
          </FacebookShareButton>

          <LinkedinShareButton
            url={shareUrl}
            title={quote.content}
            summary={quote.author}
          >
            <LinkedinIcon size={40}/>
          </LinkedinShareButton>

          <TwitterShareButton 
            url={shareUrl}
            title={quote.content} 
            hashtags={[`${quote.author.split(' ')[0]}_${quote.author.split(' ')[1]}`]}
            >
            <TwitterIcon size={40} />
          </TwitterShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={quote.content}
            description={quote.author}>
            <WhatsappIcon size={40} />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  )
}


export default App;
