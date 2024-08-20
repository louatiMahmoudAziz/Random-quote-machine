import './App.css';
import React from 'react';

const quotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    text: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the end, we only regret the chances we didn’t take.",
    author: "Lewis Carroll"
  },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  }
];

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    let index = Math.floor(Math.random() * quotes.length); 
    this.setState({
      quote: quotes[index].text,  
      author: quotes[index].author 
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        <button id="new-quote" onClick={this.fetchQuote}>
          New Quote
        </button>
        <a 
          id="tweet-quote" 
          href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    );
  }
}

export default QuoteMachine;
