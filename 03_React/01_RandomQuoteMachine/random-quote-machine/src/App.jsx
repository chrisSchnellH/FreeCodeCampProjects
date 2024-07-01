import { useEffect, useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');


  const fetchQuote = async () => {
    let randomNumber = Math.floor(Math.random() * 16)
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    let authorString = data[randomNumber].author;
    let commaIndex = authorString.indexOf(',');
    console.log(data[randomNumber].text);
    setQuote(data[randomNumber].text);
    setAuthor(authorString.substring(0, commaIndex));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Random Quote generator</h1>
      <QuoteBox quote={quote} author={author} fetchQuote={fetchQuote} />
    </div>
  );
}

export default App;
