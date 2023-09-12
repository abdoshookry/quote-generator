import "./App.css";
import React, { useState } from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const getShareText = () => quote.author + " once said: " + quote.content;

  const copy = () => {
    navigator.clipboard.writeText(getShareText());
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="icons">
          <div className="icon">
            <TwitterShareButton
              url=" "
              title={getShareText()}
              hashtag="#quotes"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className="icon">
            <LinkedinShareButton
              source="www.example.com"
              summary={getShareText()}
              url="www.example.com"
              title={getShareText()}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div className="icon">
            <WhatsappShareButton url=" " title={getShareText()}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
