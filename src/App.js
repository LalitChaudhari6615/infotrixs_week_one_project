import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Quote from "./components/Quote";
import Search from "./components/Search";

function App() {
  const [quote, setQuote] = useState(null);
  const [searchAuthor, setSearchAuthor] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    axios.get("https://api.quotable.io/random").then((response) => {
      setQuote(response.data);
    });
  };

  const searchByAuthor = () => {
    axios
      .get(`https://api.quotable.io/quotes?author=${searchAuthor}`)
      .then((response) => {
        const quotesByAuthor = response.data.results;
        if (quotesByAuthor.length > 0) {
          const randomIndex = Math.floor(Math.random() * quotesByAuthor.length);
          setQuote(quotesByAuthor[randomIndex]);
        }
      });
  };

  return (
    <div className="App">
      <div className="header">Quote of the Day</div>
      <Quote quote={quote} />
      <Search
        searchAuthor={searchAuthor}
        setSearchAuthor={setSearchAuthor}
        searchByAuthor={searchByAuthor}
      />
    </div>
  );
}

export default App;
