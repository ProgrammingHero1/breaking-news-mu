import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b093438169e44148aa7051053a7a930e';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
  useEffect( () =>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b093438169e44148aa7051053a7a930e';
    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article = {article}></News>)
      }
    </div>
  );
}

export default App;
