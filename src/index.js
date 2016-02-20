// create a new component and this component shoud produce some html

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCs8erOdTQmU51nQalFssF18LKySS-b-zU';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('.container'));
//take this component's generated HTML and put it on the page (in the DOM)
