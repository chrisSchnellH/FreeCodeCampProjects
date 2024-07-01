import React from "react";

const QuoteBox = ({ quote, author, fetchQuote }) => {
    return (
        <div className="quote-box">
            <p id="text">{quote}</p>
            <p id="author">- {author}</p>
            <button id="new-quote" onClick={fetchQuote}>New Quote</button>
        </div>
    );
};

export default QuoteBox;