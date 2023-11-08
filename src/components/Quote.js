import React from "react";

function Quote({ quote }) {
  return (
    <div className="quote-box">
      {quote && (
        <>
          <p className="quote-content">{quote.content}</p>
          <div className="author-container">
            <strong>By {quote.author}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Quote;
