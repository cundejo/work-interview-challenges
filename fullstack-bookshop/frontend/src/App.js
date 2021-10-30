import {Route, Switch} from "react-router-dom";

import BookList from "./BookList";
import Book from "./Book";
import useLibrary from "./hooks/useLibrary";

const App = () => {
  const [books, loadMore] = useLibrary();

  return (
    <Switch>
      <Route exact path="/">
        <BookList books={books} onLoadMore={loadMore} />
      </Route>
      <Route path="/book/:id">
        <Book books={books} />
      </Route>
    </Switch>
  )
};

export default App;
