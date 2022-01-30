import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

const orderBy = (by, arr) => {
  if(by === 'upvotes'){
    return arr.sort((a, b) => b.upvotes - a.upvotes);
  }

  if(by === 'date'){
    return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return arr;
}

function App({articles}) {

  const [sortBy, setSortBy] = useState('upvotes');

    return (
        <div className="App">
            <h8k-navbar header={title} />
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button
                  data-testid="most-upvoted-link"
                  className="small"
                  onClick={()=>setSortBy('upvotes')}
                >
                  Most Upvoted
                </button>
                <button
                  data-testid="most-recent-link"
                  className="small"
                  onClick={()=>setSortBy('date')}
                >
                  Most Recent
                </button>
            </div>
            <Articles articles={orderBy(sortBy, articles)}/>
        </div>
    );

}

export default App;
