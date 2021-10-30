import { Route, Switch } from 'react-router-dom';
import BookList from './pages/BookList';
import Book from './pages/Book';
import useBookLibrary from './hooks/useBookLibrary';
import AppLayout from './layouts/AppLayout';

const App = () => {
  const [books, loadMore] = useBookLibrary();

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <BookList books={books} onLoadMore={loadMore} />
        </Route>
        <Route path="/book/:id">
          <Book books={books} />
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default App;
